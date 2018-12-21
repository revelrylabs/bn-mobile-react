import {Container} from 'unstated'
import {server, apiErrorAlert} from '../constants/Server'

/**
 *  Right now, this only does one ticket type for one event
 *  Will require some refactoring if purchasing ever evolve to involve
 *  muliple items ofdifferent types in one cart
 **/


/* eslint-disable camelcase,space-before-function-paren,complexity */
class CartContainer extends Container {
  constructor(props = {}) {
    super(props);

    this.state = {
      id: null, // Cart ID
      ticketTypeId: null,
      quantity: 1,
      items: [],
      total_in_cents: 0,
      seconds_until_expiry: null,
      selectedPaymentDetails: {},
      redemption_code: null,
    }
  }

  applyPromo = async (redemption_code, onSuccess) => {
    await this.setState({redemption_code, quantity: 1})
    await this.replaceCart(true, onSuccess)
  }

  setPayment = async (selectedPaymentDetails) => {
    this.setState({selectedPaymentDetails})
  }

  selectTicket = async (ticketTypeId, _ticketPricingId) => {
    // Dont preserve existing tickets - we dont do multi-ticket carts in mobile
    if (this.state.ticketTypeId && ticketTypeId !== this.state.ticketTypeId) {
      await this.updateQuantity(0)
    }

    await this.setState((state) => {
      return {
        ticketTypeId,
        quantity: state.quantity < 1 ? 1 : state.quantity,
      }
    })
    await this.replaceCart()
  }

  updateQuantity = async (quantity) => {
    await this.setState({quantity})
    await this.updateCart()
  }

  cartItems(promoOnly) {
    return promoOnly ? [] : [{
      ticket_type_id: this.state.ticketTypeId,
      quantity: this.state.quantity,
    }]
  }

  updateCart = async (promoOnly = false) => {
    const items = this.cartItems(promoOnly)

    try {
      const response = await server.cart.update({items, redemption_code: this.state.redemption_code})
      const {data} = response;

      if (data) {
        this.replaceCartData(data);
      }
    } catch (error) {
      apiErrorAlert(error, 'There was a problem updating your cart.')
    }
  }

  replaceCart = async (promoOnly = false, onSuccess = () => {}) => {
    const items = this.cartItems(promoOnly)

    try {
      const response = await server.cart.replace({items, redemption_code: this.state.redemption_code})
      const {data} = response;

      if (data) {
        await this.replaceCartData(data);
      }

      onSuccess()
    } catch (error) {
      apiErrorAlert(error, 'There was a problem updating your cart.')
    }
  }

  refreshCart = async () => {
    try {
      const response = await server.cart.read()
      const {data} = response;

      if (data) {
        this.replaceCartData(data);
      }
    } catch (error) {
      apiErrorAlert(error, 'Loading cart details failed.')
    }
  }

  replaceCartData = async (data) => {
    const {id, items, total_in_cents, seconds_until_expiry} = data

    this.setState({id, items, total_in_cents, seconds_until_expiry})
  }

  emptyCart = async () => {
    // @TODO: delete from cart using API first
    this.setState({
      items: [],
      id: null,
      total_in_cents: 0,
      redemption_code: null,
    })
  }

  placeOrder = async (onSuccess) => {
    try {

      const _resp = await server.cart.checkout({
        amount: this.state.total_in_cents, // @TODO: remove this amount, we shouldn't be specifying it on the frontend
        method: {
          type: 'Card',
          provider: 'stripe',
          token: this.state.selectedPaymentDetails.id,
          save_payment_method: false,
          set_default: false,
        },
      })

      await this.setState({selectedPaymentDetails: {}})
      onSuccess()

      return true
    } catch (error) {
      this.setState({selectedPaymentDetails: {}})
      apiErrorAlert(error, 'There was an error checking out.')
    }
  }
}

export {
  CartContainer,
}

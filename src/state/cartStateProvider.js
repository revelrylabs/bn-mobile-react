import {Container} from 'unstated'
import {server} from '../constants/Server'

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
      quantity: 0,
      items: [],
      total_in_cents: 0,
      seconds_until_expiry: null,
      cartExpiryTicker: null,
      selectedPaymentDetails: {},
    }
  }

  setPayment = async (selectedPaymentDetails) => {
    this.setState({selectedPaymentDetails})
  }

  selectTicket = async (ticketTypeId, _ticketPricingId) => {
    // Dont preserve existing tickets - we dont do multi-ticket carts in mobile
    this.setState({ticketTypeId}, async () => {
      await this.updateCart()
      console.log(this.state);

    })
  }

  updateQuantity = async (quantity) => {
    this.setState({quantity}, async () => {
      await this.updateCart()
      console.log(this.state);
    })
  }

  updateCart = async () => {
    const items = [{
      ticket_type_id: this.state.ticketTypeId,
      quantity: this.state.quantity,
    }]

    try {
      const response = await server.cart.update({items})
      const {data} = response;

      if (data) {
        this.replaceCartData(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  startExpiryTicker = async () => {
    if (this.state.cartExpiryTicker) {
      clearInterval(this.state.cartExpiryTicker);
    }

    this.setState({
      cartExpiryTicker: setInterval(() => {
        if (!this.state.seconds_until_expiry || this.state.seconds_until_expiry < 1) {
          clearInterval(this.state.cartExpiryTicker);
          this.refreshCart();
        } else {
          this.state.seconds_until_expiry--;

          // Refresh the cart from server every 30 seconds as JS can be paused in browsers
          if (this.state.seconds_until_expiry % 30 === 0) {
            this.refreshCart();
          }
        }
      }, 1000),
    })
  }

  refreshCart = async () => {
    try {
      const response = await server.cart.read()
      const {data} = response;

      if (data) {
        this.replaceCartData(data);
      }

      return true
    } catch (error) {
      console.error(error);

      let message = 'Loading cart details failed.'

      if (
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        message = error.response.data.error;
      }

      return message
    }
  }

  replaceCartData = async (data) => {
    const {id, items, total_in_cents, seconds_until_expiry} = data

    this.setState({id, items, total_in_cents})

    if (seconds_until_expiry) {
      this.setState({seconds_until_expiry}, () => {
        this.startExpiryTicker()
      })
    } else {
      this.setState({seconds_until_expiry: null})
    }
  }

  emptyCart = async () => {
    // @TODO: delete from cart using API first
    this.setState({
      items: [],
      id: null,
      total_in_cents: 0,
    })
  }
}

export {
  CartContainer,
}

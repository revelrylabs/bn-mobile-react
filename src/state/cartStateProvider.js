import {Container} from 'unstated'
import {server, apiErrorAlert} from '../constants/Server'
import {some} from 'lodash'

function itemIsTicket({item_type: type}) {
  return type === 'Tickets'
}

function sumUnitPrices(items) {
  return items.reduce((sum, {unit_price_in_cents: unitPrice, quantity}) => sum + unitPrice * quantity, 0)
}

/**
 *  Right now, this only does one ticket type for one event
 *  Will require some refactoring if purchasing ever evolve to involve
 *  muliple items ofdifferent types in one cart
 **/

/* eslint-disable camelcase */
class CartContainer extends Container {
  async _resetState() {
    this.state = {
      requestedQuantity: 1,
      isReady: false,
      isChangingQuantity: false,
      ticketTypeId: null,
      response: null,
      payment: null,
      items: [],
      redemption_code: null,
    }
  }

  constructor() {
    super()
    this._resetState()
  }

  get response() {
    return this.state.response
  }

  get data() {
    return this.response.data
  }

  get id() {
    return this.data.id
  }

  get event() {
    return this.containers.events.selectedEvent
  }

  get ticketType() {
    return this.event.ticket_types.find(({id}) => id === this.ticketTypeId)
  }

  get ticketTypeId() {
    return this.state.ticketTypeId
  }

  get quantity() {
    return this.selectedTicket.quantity
  }

  get requestedQuantity() {
    return this.state.requestedQuantity
  }

  get isReady() {
    return this.state.isReady
  }

  get items() {
    return this.data.items
  }

  get tickets() {
    return this.items.filter(itemIsTicket)
  }

  get fees() {
    return this.items.filter((item) => !itemIsTicket(item))
  }

  get selectedTicket() {
    return this.tickets.find(({ticket_type_id: id}) => id === this.ticketTypeId)
  }

  get maxAdditionalQuantity() {
    return this.data.limited_tickets_remaining.find(({ticket_type_id: id}) => id === this.ticketTypeId).tickets_remaining
  }

  get maxCommittableQuantity() {
    return this.quantity + this.maxAdditionalQuantity
  }

  canAddQuantity(qty) {
    const newQuantity = this.requestedQuantity + qty

    return newQuantity > 0 && newQuantity <= this.maxCommittableQuantity
  }

  async clearCart() {
    await this._resetState()
  }
  async addQuantity(qty) {
    return await this.setQuantity(this.requestedQuantity + qty)
  }

  get ticketsCents() {
    return sumUnitPrices(this.tickets)
  }

  get feesCents() {
    return sumUnitPrices(this.fees)
  }

  get totalCents() {
    return this.data.total_in_cents
  }

  get usedPromo() {
    // Is there a ticket item in the cart with a promo code?
    return some(this.tickets, (ticket) => !!ticket.redemption_code)
  }

  get promoTickets() {
    return this.tickets.filter((ticket) => !!ticket.redemption_code)
  }

  get replaceParams() {
    return {
      items: [{ticket_type_id: this.ticketTypeId, quantity: this.state.requestedQuantity}],
      redemption_code: this.state.redemption_code,
    }
  }

  async _delete() {
    if (this.ticketTypeId && this.isReady) {
      await server.cart.delete(this.ticketTypeId)
    }
    await this._resetState()
  }

  setQuantity(quantity) {
    this.setState({requestedQuantity: quantity, isChangingQuantity: true})
    const quantityDebounceKey = this._quantityDebounceKey = new Date().getTime()

    setTimeout(() => {
      if (quantityDebounceKey === this._quantityDebounceKey) {
        this._commitQuantity()
      }
    }, 100)
  }

  async _commitQuantity() {
    const onSuccess = async (response) => {
      if (this.quantity === this.requestedQuantity) {
        await this.setState({isChangingQuantity: false})
      }

      return response
    }

    const onError = async (_error) => {
      if (this.isReady) {
        await this.setState({requestedQuantity: this.quantity})
        return this.response
      }

      return null
    }

    this.replaceCart(onSuccess, onError)
  }

  replaceCart = async (onSuccess = () => {}, onError = () => {}) => {
    try {
      const response = await server.cart.replace(this.replaceParams)

      await this.setState({response, isReady: true})
      onSuccess(response)
    } catch (error) {
      apiErrorAlert(error, 'There was a problem updating your cart.')
      onError(error)
    }
  }

  applyPromo = async (redemptionCode) => {
    const response = await server.redemptionCodes.read({ code: redemptionCode })
    console.log(response.data);

  }

  async setTicketType(ticketTypeId) {
    await this.setState({ticketTypeId, requestedQuantity: 1})
    return await this._commitQuantity()
  }

  async setPayment(payment) {
    return await this.setState({payment})
  }

  get payment() {
    return this.state.payment
  }

  // we disable the purchase button and indicate it's busy until this is false
  get isChangingQuantity() {
    return this.state.isChangingQuantity
  }

  // can't place an order until there's payment info and quantity isn't changing anymore
  get canPlaceOrder() {
    return this.payment && !this.isChangingQuantity
  }

  async placeOrder() {
    try {
      await server.cart.checkout({
        amount: this.totalCents,
        method: {
          type: 'Card',
          provider: 'stripe',
          token: this.payment.id,
          save_payment_method: false,
          set_default: false,
        },
      })
    } catch(error) {
      apiErrorAlert(error)
    }
  }
}

export {
  CartContainer,
}

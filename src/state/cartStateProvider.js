import {Container} from 'unstated'
import {server, apiErrorAlert} from '../constants/Server'

function itemIsTicket({item_type: type}) {
  return type === 'Tickets'
}

function sumUnitPrices(items) {
  return items.reduce((sum, {unit_price_in_cents: unitPrice}) => sum + unitPrice, 0)
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
      isReady: false,
      ticketTypeId: null,
      response: null,
      payment: null,
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

  get ticketTypeId() {
    return this.state.ticketTypeId
  }

  get event() {
    return this.containers.events.selectedEvent
  }

  get ticketType() {
    return this.event.ticket_types.find(({id}) => id === this.ticketTypeId)
  }

  get eventTicketsThatWereAlreadyPurchased() {
    console.log('tickets state', this.containers.tickets.ticketsForEvent(this.event.id))
    return this.containers.tickets.ticketsForEvent(this.event.id)
  }

  get quantityAlreadyPurchased() {
    const tix = this.eventTicketsThatWereAlreadyPurchased
    console.log('tix', tix)
    return 0
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
    return this.items.filter(x => !itemIsTicket(x))
  }

  get selectedTicket() {
    return this.tickets[0]
  }

  get quantity() {
    return this.selectedTicket.quantity
  }

  get limitPerCustomer() {
    const {limit_per_person: limit, available} = this.ticketType
    return limit ? Math.min(limit, available) : available
  }

  get limitForCart() {
    return Math.max(this.quantity, this.limitPerCustomer - this.quantity)
  }

  canAddQuantity(x) {
    const foo = this.quantityAlreadyPurchased
    const quantity = this.quantity + x

    return quantity > 0 && quantity <= this.limitForCart
  }

  async addQuantity(x) {
    return await this.setQuantity(this.quantity + x)
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

  async _delete() {
    if (this.ticketTypeId && this.isReady) {
      await server.cart.delete(this.ticketTypeId)
    }
    await this._resetState()
  }

  async setQuantity(quantity) {
    const params = {items: [{ticket_type_id: this.ticketTypeId, quantity}]}
    const [response, _] =  await Promise.all([
      server.cart.update(params),
      this.containers.tickets.userTickets(),
    ])

    await this.setState({response, isReady: true})

    return response
  }

  async setTicketType(ticketTypeId) {
    await this.setState({ticketTypeId})
    return await this.setQuantity(1)
  }

  async setPayment(payment) {
    return await this.setState({payment})
  }

  get payment() {
    return this.state.payment
  }

  async placeOrder() {
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
  }
}

export {
  CartContainer,
}

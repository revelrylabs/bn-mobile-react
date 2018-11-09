import {Container} from 'unstated'
import {server} from '../constants/Server'

/* eslint-disable camelcase,space-before-function-paren, complexity */
class CartContainer extends Container {
  constructor(props = {}) {
    super(props);

    this.state = {
      eventId: '',
      tickeTypeId: '',
      ticketPricingId: '',
    }
  }

  selectTicket = async (ticketTypeId, ticketPricingId) => {
    this.setState({ticketTypeId, ticketPricingId})
  }
}

export {
  CartContainer,
}

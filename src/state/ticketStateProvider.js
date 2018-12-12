import {Container} from 'unstated'
import {server, apiErrorAlert, refreshCheck} from '../constants/Server'
import {DateTime} from 'luxon'
import {find} from 'lodash'

/* eslint-disable camelcase,space-before-function-paren */

class TicketsContainer extends Container {
  constructor(props = {}) {
    super(props);

    this.state = {
      tickets: [],
      purchasedTicket: null,
    };

    this.userTickets()
  }

  // Grabbing tickets from orders right now - not preserving any order-level details
  userTickets = async () => {
    try {
      
      const response = await server.tickets.index()

      const {data, _paging} = response.data; // @TODO: pagination

      const ticketGroups = {
        upcoming: [],
        past: [],
        transfer: [],
      };

      // @TODO: api data structure will eventually change
      data.forEach((ticketGroup) => {
        const event = ticketGroup[0];
        const tickets = ticketGroup[1];
        const bucket = DateTime.fromISO(event.door_time) < DateTime.local() ? 'past' : 'upcoming'

        event.formattedDate = DateTime.fromISO(event.door_time).toFormat('EEE, MMMM d');
        event.formattedDoors = DateTime.fromISO(event.door_time).toFormat('t');
        event.formattedShow = DateTime.fromISO(event.event_start).toFormat('t');

        ticketGroups[bucket].push({event, tickets});
      });

      this.setState({tickets: ticketGroups});

    } catch (error) {
      apiErrorAlert(error, 'Loading tickets failed.')
    }
  }

  setPurchasedTicket = (purchasedTicket) => {
    this.setState({purchasedTicket})
  }

  // Can they view details for past or transfefred tickets?
  ticketsForEvent = async (eventId, bucket = 'upcoming') => {
    const {tickets} = this.state

    return find(tickets[bucket], ({event, _tickets}) => eventId === event.id)
  }

  redeemTicketInfo = async (ticket_id) => { // eslint-disable-line complexity
    try {
      
      const response = await server.tickets.redeem.read({ticket_id})

      return response.data;
    } catch (error) {
      apiErrorAlert(error, 'Creating QR code failed failed.')
    }
  }
}

export {
  TicketsContainer,
}

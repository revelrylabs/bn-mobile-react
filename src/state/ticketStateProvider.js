import {Container} from 'unstated'
import {server, apiErrorAlert} from '../constants/Server'
import {DateTime} from 'luxon'
import {find} from 'lodash'

// Hardcoding for now, will probably be replaced by a URL,
// and <Image source={{uri: ticket.imageUrl}} ... />
const sampleImages = {
  image1: require('../../assets/ticket-event.png'),
  image2: require('../../assets/ticket-event-2.png'),
}
const _sampleTickets = {
  upcoming: [
    {
      quantity: 3,
      name: 'Explosions In The Sky',
      venue: 'Fox Theater',
      location: 'Oakland, CA',
      date: 'Tue, July 21st',
      starts: '7:30pm',
      ends: '12:30am',
      image: sampleImages.image1,
      qrCode: '',
      id: 1,
    },
    {
      quantity: 3,
      name: 'Tycho',
      venue: 'Fox Theater',
      location: 'Oakland, CA',
      date: 'Tue, July 21st',
      starts: '7:30pm',
      ends: '12:30am',
      image: sampleImages.image2,
      qrCode: '',
      id: 2,
    },
  ],
  past: [
    {
      quantity: 3,
      name: 'Tycho',
      venue: 'Fox Theater',
      location: 'Oakland, CA',
      date: 'Tue, January 21st',
      starts: '7:30pm',
      ends: '12:30am',
      image: sampleImages.image2,
      qrCode: '',
      id: 3,
    },
    {
      quantity: 3,
      name: 'Explosions In The Sky',
      venue: 'Fox Theater',
      location: 'Oakland, CA',
      date: 'Tue, January 21st',
      starts: '7:30pm',
      ends: '12:30am',
      image: sampleImages.image1,
      qrCode: '',
      id: 4,
    },
  ],
  transfer: [
    {
      quantity: 1,
      name: 'Tycho',
      venue: 'Fox Theater',
      location: 'Oakland, CA',
      date: 'Tue, January 21st',
      starts: '7:30pm',
      ends: '12:30am',
      image: sampleImages.image2,
      qrCode: '',
      id: 5,
    },
    {
      quantity: 1,
      name: 'Explosions In The Sky',
      venue: 'Fox Theater',
      location: 'Oakland, CA',
      date: 'Tue, January 21st',
      starts: '7:30pm',
      ends: '12:30am',
      image: sampleImages.image1,
      qrCode: '',
      id: 6,
    },
  ],
}

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

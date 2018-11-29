import {Container} from 'unstated'
import {server} from '../constants/Server'
import {DateTime} from 'luxon'

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

class TicketsContainer extends Container {
  constructor(props = {}) {
    super(props);

    this.state = {
      tickets: [],
      purchasedTicketId: false,
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
      const errorMsg = error || 'Loading tickets failed.'

      alert(errorMsg)
    }
  }

  setPurchasedTicket = (purchasedTicketId) => {
    this.setState({purchasedTicketId})
  }
}

export {
  TicketsContainer,
}

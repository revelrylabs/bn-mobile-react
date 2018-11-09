import {Container} from 'unstated'
import {server} from '../constants/Server'
import {DateTime} from 'luxon'

const SAMPLE_LOCATIONS = [
  {
    name: 'Where are you looking for events?',
    nickname: '',
    id: 1,
  },
  {
    name: 'Philadelphia, PA',
    nickname: 'Philadelphia, PA',
    id: 2,
  },
  {
    name: 'New York, NY',
    nickname: 'New York, NY',
    id: 3,
  },
  {
    name: 'New Orleans, LA',
    nickname: 'New Orleans, LA',
    id: 4,
  },
  {
    name: 'San Francisco, CA',
    nickname: 'San Francisco, CA',
    id: 5,
  },
  {
    name: 'Washington, D.C.',
    nickname: 'Washington, D.C.',
    id: 6,
  },
]

const _SAMPLE_AVATARS = [
  require('../../assets/avatar-female.png'),
  require('../../assets/avatar-male.png'),
  require('../../assets/avatar-female.png'),
]

class EventsContainer extends Container {
  constructor(props = {}) {
    super(props);

    this.state = {
      events: [],
      paging: {},
      lastUpdate: null,
      locations: SAMPLE_LOCATIONS,
      selectedLocationId: 2,
      selectedEvent: {},
    };
  }

  getEvents = async (_location = null) => {
    const {data} = await server.events.index()

    this.setState({
      lastUpdate: DateTime.local(),
      events: data.data,
      paging: data.paging,
    })
  }

  clearEvent = () => {
    this.setState({selectedEvent: {}})
  }

  getEvent = async (id) => {
    const {data} = await server.events.read({id})

    this.setState({
      selectedEvent: {...data}
    })
  }

  changeLocation = (index, selectedLocation) => {
    if (index !== '0') {
      this.setState({selectedLocationId: selectedLocation.id})
    }
    return null
  }
}

export {
  EventsContainer,
}

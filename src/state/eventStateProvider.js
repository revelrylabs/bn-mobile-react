import {Container} from 'unstated'
import {server} from '../constants/Server'
import {DateTime} from 'luxon'

const LOCATIONS_FETCH_MIN_MINUTES = 15

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
      locations: [],
      selectedLocationId: null,
      selectedEvent: {},
    };
  }

  locationsPromise = null
  locationsLastFetched = null

  fetchLocations = async (...args) => {
    // Already fetching. Wait for existing promise to finish.
    if (this.locationsPromise !== null) {
      return await this.locationsPromise
    }
    // Don't fetch more often than is sane.
    if (this.locationsLastFetched && this.locationsLastFetched.plus({minutes: LOCATIONS_FETCH_MIN_MINUTES}) < DateTime.local()) {
      return
    }
    try {
      // Do the fetch, lock fetching, and write down the time when we finished.
      await (this.locationsPromise = this._fetchLocations(...args))
      this.locationsLastFetched = DateTime.local()
    } finally {
      // Always unlock so we can try to fetch again.
      this.locationsPromise = null
    }
  }

  _fetchLocations = async () => {
    const {data: {data: locations}} = await server.regions.index()

    await this.setState({locations})
  }

  getEvents = async (_location = null) => {
    const [{data}, ..._rest] = await Promise.all([server.events.index(), this.fetchLocations()])

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

  changeLocation = (_index, {id}) => this.setState({selectedLocationId: id})
}

export {
  EventsContainer,
}

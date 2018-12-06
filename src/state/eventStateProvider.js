import {Container} from 'unstated'
import {server, BASE_URL, apiErrorAlert} from '../constants/Server'
import {DateTime} from 'luxon'

const LOCATIONS_FETCH_MIN_MINUTES = 15

const _SAMPLE_AVATARS = [
  require('../../assets/avatar-female.png'),
  require('../../assets/avatar-male.png'),
  require('../../assets/avatar-female.png'),
]

/* eslint-disable complexity,space-before-function-paren,camelcase */

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

    data.data.forEach((event) => {
      if (!event.promo_image_url) {
        event.promo_image_url = `${BASE_URL}/images/event-placeholder.png`
      }
    })

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

    if (!data.promo_image_url) {
      data.promo_image_url = `${BASE_URL}/images/event-placeholder.png`
    }

    this.setState({
      selectedEvent: {...data},
    })
  }

  changeLocation = (_index, {id}) => this.setState({selectedLocationId: id})

  // allEvents will refresh all events (ie: from the index page), whereas setting it to false will refresh the interested event
  toggleInterest = async (event, allEvents = true) => {
    const {user_is_interested, id} = event

    try {
      if (user_is_interested) {
        // User already interested, so delete it.
        const _response = await server.events.interests.remove({event_id: id})
      } else {
        const _response = await server.events.interests.create({event_id: id})
      }
    } catch (error) {
      apiErrorAlert(error, 'There was a problem selecting this event.')
    } finally {
      if (allEvents) {
        this.getEvents()
      } else {
        this.getEvent(id)
      }
    }
  }
}

export {
  EventsContainer,
}

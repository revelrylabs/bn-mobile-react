import EventsIndex from './index'
import EventsShow from './show'
import EventsChangeLocation from './location'
import EventsSearch from './search'

const EventsIndexRoute = {
  screen: EventsIndex,
  navigationOptions: {
    title: 'Home',
    header: null,
  },
}

const EventsShowRoute = {
  screen: EventsShow,
  navigationOptions: ({
    navigation
  }) => ({
    title: navigation.state.params.name,
  }),
}

// @TODO: Can I set a dropdown transition animation? Also, add the navigate(''EventsChangeLocation) to Event Index
const EventsChangeLocationRoute = {
  screen: EventsChangeLocation,
  navigationOptions: {
    title: 'Change Location',
  },
}

const EventsSearchRoute = {
  screen: EventsSearch,
  navigationOptions: {
    title: 'Search for Events'
  },
}

const ROUTES = {
  Home: EventsIndexRoute,
  EventsIndex: EventsIndexRoute,
  EventsShow: EventsShowRoute,
  EventsChangeLocation: EventsChangeLocationRoute,
  EventsSearchRoute: EventsSearchRoute,
}

export default ROUTES
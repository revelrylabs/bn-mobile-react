import {Container} from 'unstated'


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

const SAMPLE_AVATARS = [
  require('../../assets/avatar-female.png'),
  require('../../assets/avatar-male.png'),
  require('../../assets/avatar-female.png'),
]
const SAMPLE_EVENTS = [
  {
    name: 'River Whyless',
    bgImage: require('../../assets/event-smaller-1.png'),
    avatarImages: SAMPLE_AVATARS,
    priceDollars: 30,
    titleText: 'River Whyless',
    scheduleText: 'Fri, July 20',
    favorite: true,
  },
  {
    name: 'Beyonce',
    bgImage: require('../../assets/event-smaller-2.png'),
    avatarImages: SAMPLE_AVATARS,
    priceDollars: 30,
    titleText: 'Beyonce',
    scheduleText: 'Fri, July 20',
    favorite: false,
  },
  {
    name: 'Drake',
    bgImage: require('../../assets/event-smaller-3.png'),
    avatarImages: SAMPLE_AVATARS,
    priceDollars: 30,
    titleText: 'Drake',
    scheduleText: 'Fri, July 20',
    favorite: false,
  },
  {
    name: 'Ed Sheeran',
    bgImage: require('../../assets/event-smaller-4.png'),
    avatarImages: SAMPLE_AVATARS,
    priceDollars: 30,
    titleText: 'Ed Sheeran',
    scheduleText: 'Fri, July 20',
    favorite: true,
  },
]

class EventsContainer extends Container {
  constructor(props = {}) {
    super(props);

    this.state = {
      events: SAMPLE_EVENTS,
      locations: SAMPLE_LOCATIONS,
      selectedLocationId: 2,
    };
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

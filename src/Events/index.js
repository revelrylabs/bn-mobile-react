import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {ScrollView, Text, View, Image, TextInput, TouchableHighlight, Animated, Platform, RefreshControl, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import ModalDropdown from 'react-native-modal-dropdown';
import SharedStyles from '../styles/shared/sharedStyles'
import FormStyles from '../styles/shared/formStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import NavigationStyles from '../styles/shared/navigationStyles'
import ModalStyles from '../styles/shared/modalStyles'
import EventItemView from './event_card'

const styles = SharedStyles.createStyles()
const formStyles = FormStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const navigationStyles = NavigationStyles.createStyles()
const modalStyles = ModalStyles.createStyles()


const HEADER_MAX_HEIGHT = 0;
const HEADER_MIN_HEIGHT = -25;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const SAMPLE_LOCATIONS = [
  {
    name: 'Where are you looking for events?',
    nickname: '',
    id: 1,
  },
  {
    name: 'Philadelphia, PA',
    nickname: 'PHILLY',
    id: 2,
  },
  {
    name: 'New York, NY',
    nickname: 'NYC',
    id: 3,
  },
  {
    name: 'New Orleans, LA',
    nickname: 'NOLA',
    id: 4,
  },
  {
    name: 'San Francisco, CA',
    nickname: 'SF',
    id: 5,
  },
  {
    name: 'Washington, D.C.',
    nickname: 'DC',
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
    scheduleText: 'Fri, July 20 - 8:50 pm - The Warfield',
    favorite: true,
  },
  {
    name: 'Beyonce',
    bgImage: require('../../assets/event-smaller-2.png'),
    avatarImages: SAMPLE_AVATARS,
    priceDollars: 30,
    titleText: 'Beyonce',
    scheduleText: 'Fri, July 20 - 8:50 pm - The Warfield',
    favorite: false,
  },
  {
    name: 'Drake',
    bgImage: require('../../assets/event-smaller-3.png'),
    avatarImages: SAMPLE_AVATARS,
    priceDollars: 30,
    titleText: 'Drake',
    scheduleText: 'Fri, July 20 - 8:50 pm - The Warfield',
    favorite: false,
  },
  {
    name: 'Ed Sheeran',
    bgImage: require('../../assets/event-smaller-4.png'),
    avatarImages: SAMPLE_AVATARS,
    priceDollars: 30,
    titleText: 'Ed Sheeran',
    scheduleText: 'Fri, July 20 - 8:50 pm - The Warfield',
    favorite: true,
  },
]

export default class EventsIndex extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      selectedLocationId: 2,
      mainFavorite: true,
    };
  }

  setFavorite = (mainFavorite) => {
    this.setState({mainFavorite})
  }

  changeLocation = (index, selectedLocation) => {
    this.setState({selectedLocationId: selectedLocation.id})
  }

  get currentLocationDisplayName() {
    const selectedLoc = SAMPLE_LOCATIONS.find((loc) => (loc.id === this.state.selectedLocationId))

    return selectedLoc.nickname
  }

  locRowOption = (rowData, rowID, _highlighted) => {
    if (rowID === 0) {
      return (
        <View>
          <View style={modalStyles.rowWrapper}>
            <Text style={modalStyles.sectionHeader}>{rowData.name}</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View>
          <View style={modalStyles.rowWrapper}>
            <Icon style={modalStyles.locationIcon} name="location-on" />
            <Text style={modalStyles.locationText}>{rowData.name}</Text>
          </View>
        </View>
      )
    }
  }

  get allEvents() {
    const {navigation: {navigate}} = this.props

    return SAMPLE_EVENTS.map((event, index) => (
      <EventItemView
        key={index}
        onPress={() => navigate('EventsShow', {name: 'River Whyless'})}
        event={event}
      />
    ))
  }

  /* eslint-disable-next-line complexity */
  render() {
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, 100],
      extrapolate: 'clamp',
    });
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });
    const opacity = scrollY.interpolate({
      inputRange: [0, 0.9, 1],
      outputRange: [1, 0, 1],
    });

    const {navigation: {navigate}} = this.props
    const {mainFavorite} = this.state

    return (
      <View>
        <ScrollView
          style={styles.container}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({refreshing: true});
                setTimeout(() => this.setState({refreshing: false}), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          <View style={styles.sectionHeaderContainer}>
            <Animated.Text style={[styles.header, {opacity}]}>Explore</Animated.Text>
            <ModalDropdown
              ref={(ref) => {
                this._dropdown = ref
              }}
              onSelect={this.changeLocation}
              options={SAMPLE_LOCATIONS}
              renderRow={this.locRowOption}
              renderSeparator={() => <View />}
              dropdownStyle={modalStyles.modalDropdownContainer}
            >
              <View style={styles.dropdownLinkContainer}>
                <Image
                  style={styles.iconImageSmall}
                  source={require('../../assets/heart-small.png')}
                />
                <Text style={styles.iconLinkText}>{this.currentLocationDisplayName}</Text>
                <Icon style={styles.iconLink} name="keyboard-arrow-down" />
              </View>
            </ModalDropdown>
          </View>

          <View style={formStyles.searchContainer}>
            <Icon style={formStyles.searchIcon} name="search" />
            <TextInput
              style={formStyles.searchInput}
              placeholder="Search artists, shows, venues..."
              searchIcon={{size: 24}}
              disabled
            />
          </View>
          <Text style={styles.sectionHeader}>Hot This Week</Text>

          <View style={slideshowStyles.slideshowContainer}>
            <Image
              style={slideshowStyles.slideShowImage}
              source={require('../../assets/featured-1.png')}
            />

            <View style={slideshowStyles.detailsContainer}>
              <View style={slideshowStyles.sectionTop}>
                <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.setFavorite(!mainFavorite)}>
                  <View style={mainFavorite ? styles.iconLinkCircleContainerActive : styles.iconLinkCircleContainer}>
                    <Icon style={mainFavorite ? styles.iconLinkCircleActive : styles.iconLinkCircle} name="star" />
                  </View>
                </TouchableHighlight>
                <View style={styles.avatarContainer}>
                  <Image
                    style={styles.avatar}
                    source={require('../../assets/avatar-male.png')}
                  />
                  <Image
                    style={styles.avatar}
                    source={require('../../assets/avatar-female.png')}
                  />
                </View>
              </View>

              <View style={slideshowStyles.sectionMiddle}>
                <Icon style={slideshowStyles.slideShowIconLinkLeft} name="keyboard-arrow-left" />
                <Icon style={slideshowStyles.slideShowIconLinkRight} name="keyboard-arrow-right" />
              </View>

              <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('EventsShow', {name: 'Childish Gambino'})}>
                <View style={slideshowStyles.sectionBottom}>
                  <View style={styles.priceTagContainer}>
                    <Text style={styles.priceTag}>$30</Text>
                  </View>
                  <Text style={slideshowStyles.header}>Childish Gambino</Text>
                  <Text style={slideshowStyles.details}>Fri, July 20 - 8:50 pm - The Warfield</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <Text style={styles.sectionHeader}>Upcoming</Text>

          {this.allEvents}
        </ScrollView>
        <Animated.View style={[navigationStyles.scrollHeaderContainer, {height: headerHeight, transform: [{translateY: headerTranslate}]}]}>
          <View style={navigationStyles.scrollHeader}>
            <Animated.Text style={[navigationStyles.scrollTitle, {opacity}]}>Explore</Animated.Text>
            <Animated.Text style={navigationStyles.scrollSubTitle}>All Dates &bull; Los Angeles, CA</Animated.Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Modal, ScrollView, Text, View, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Ticket from './Ticket'
import SharedStyles from '../styles/shared/sharedStyles'
import TicketWalletStyles from '../styles/tickets/ticketWalletStyles'

const styles = SharedStyles.createStyles()

const ticketWalletStyles = TicketWalletStyles.createStyles()

const ticketData = [
  {
    image: require('../../assets/ticket-event-2.png'),
    name: 'Tycho',
    venue: 'The Filmore SF',
    location: 'San Francisco, CA',
    date: 'July 27th',
    starts: '7:30pm',
    ends: '12:30am',
  },
  {
    image: require('../../assets/ticket-event-2.png'),
    name: 'Tycho',
    venue: 'The Filmore SF',
    location: 'San Francisco, CA',
    date: 'July 27th',
    starts: '7:30pm',
    ends: '12:30am',
  },
  {
    image: require('../../assets/ticket-event-2.png'),
    name: 'Tycho',
    venue: 'The Filmore SF',
    location: 'San Francisco, CA',
    date: 'July 27th',
    starts: '7:30pm',
    ends: '12:30am',
  },
]

export default class EventsTicket extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  state = {
    activeSlide: 0,
  }

  _renderItem = ({item, _index}) => {
    const {navigation: {navigate}} = this.props

    return <Ticket ticket={item} navigate={navigate} />
  }

  render() {
    const {navigation} = this.props
    const {fullWidth, itemWidth} = TicketWalletStyles
    const {activeSlide} = this.state

    return (
      <Modal>
        <View style={ticketWalletStyles.modalContainer}>
          <Image
            style={ticketWalletStyles.modalBkgdImage}
            source={require('../../assets/modal-bkgd.jpg')}
          />
          <View>
            <View style={ticketWalletStyles.closeModalContainer}>
              <Icon
                style={styles.iconLinkCircle}
                name="close"
                onPress={() => {
                  navigation.goBack()
                }}
              />
              <Text style={ticketWalletStyles.closeModalHeader}>Ticket {activeSlide + 1} of {ticketData.length}</Text>
              <Text>&nbsp;</Text>
            </View>
            <Carousel
              ref={(ref) => {
                this._ticketSlider = ref
              }}
              data={ticketData}
              renderItem={this._renderItem}
              sliderWidth={fullWidth}
              itemWidth={itemWidth}
              slideStyle={ticketWalletStyles.slideWrapper}
              onSnapToItem={(index) => this.setState({activeSlide: index})}
            />
            <Pagination
              dotsLength={ticketData.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor={'rgba(255, 255, 255, 0.92)'}
              dotStyle={styles.paginationDot}
              inactiveDotColor={'rgba(255, 255, 255, 0.3)'}
              inactiveDotOpacity={0.4}
              inactiveDotScale={1}
              carouselRef={this._ticketSlider}
              tappableDots={!!this._ticketSlider}
            />
          </View>
        </View>
      </Modal>
    )
  }
}

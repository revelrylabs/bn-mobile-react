import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Modal, ScrollView, Text, View, Image, TouchableHighlight} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventStyles from '../styles/shared/eventStyles'
import TicketStyles from '../styles/tickets/ticketStyles'
import TicketShowStyles from '../styles/tickets/ticketShowStyles'

const styles = SharedStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventStyles = EventStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()
const ticketShowStyles = TicketShowStyles.createStyles()

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

const Ticket = ({ticket, navigate}) => {
  return (
    <View>
      <View>
        <TouchableHighlight underlayColor="#F5F6F7" onPress={() => navigate('EventTicket')}>
          <View style={ticketStyles.ticketContainer}>
            <Image
              style={eventStyles.eventImage}
              source={ticket.image}
            />
            <View style={ticketStyles.detailsContainer}>
              <View>
                <View style={styles.iconLinkContainer}>
                  <Image
                    style={styles.iconImage}
                    source={require('../../assets/heart-white.png')}
                  />
                </View>
              </View>
              <View>
                <Text style={ticketStyles.header}>{ticket.name}</Text>
                <Text style={ticketShowStyles.details}>{ticket.date} • {ticket.starts}  •  {ticket.venue}</Text>
                <View style={styles.iconLinkContainer}>
                  <Text style={ticketShowStyles.iconLinkText}>GET DIRECTIONS</Text>
                  <Icon style={ticketShowStyles.iconLink} name="call-made" />
                </View>
              </View>
            </View>
          </View>
        </TouchableHighlight>
        <View style={ticketStyles.ticketContainerBottom}>
          <View style={ticketShowStyles.detailsContainerBottom}>
            <View style={ticketShowStyles.avatarContainer}>
              <Image
                style={ticketShowStyles.avatar}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
            <View>
              <Text style={ticketStyles.detailsBottomText}>Anna Behrensmeyer</Text>
              <Text style={ticketStyles.detailsBottomHeader}>GENERAL ADMISSION</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={ticketShowStyles.qrCodeContainer}>
        <Image
          style={ticketShowStyles.qrCode}
          source={require('../../assets/qr-code-placeholder.png')}
        />
      </View>

      <View style={ticketShowStyles.bottomNav}>
        <View style={[ticketShowStyles.bottomNavLinkContainer, styles.borderRight]}>
          <Icon style={ticketShowStyles.bottomNavIcon} name="account-balance-wallet" />
          <Text style={ticketShowStyles.bottomNavLinkText}>ADD TO WALLET</Text>
        </View>
        <View style={ticketShowStyles.bottomNavLinkContainer}>
          <Text style={ticketShowStyles.bottomNavLinkText}>TRANSFER TICKET</Text>
          <Icon style={ticketShowStyles.bottomNavIcon} name="launch" />
        </View>
      </View>
    </View>
  )
}

Ticket.propTypes = {
  navigate: PropTypes.func.isRequired,
  ticket: PropTypes.object.isRequired,
}

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
    const {fullWidth, itemWidth} = TicketShowStyles
    const {activeSlide} = this.state

    return (
      <Modal
        onRequestClose={() => {
          navigation.goBack()
        }}
      >
        <ScrollView>
          <View style={ticketShowStyles.modalContainer}>
            <Image
              style={ticketShowStyles.modalBkgdImage}
              source={require('../../assets/modal-bkgd.jpg')}
            />

            <View style={ticketShowStyles.closeModalContainer}>
              <Icon
                style={styles.iconLinkCircle}
                name="close"
                onPress={() => {
                  navigation.goBack()
                }}
              />
              <Text style={ticketShowStyles.closeModalHeader}>Ticket {activeSlide + 1} of {ticketData.length}</Text>
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
              // containerCustomStyle={styles.slider}
              // contentContainerCustomStyle={styles.sliderContentContainer}
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
        </ScrollView>
      </Modal>
    )
  }
}

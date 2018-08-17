import React, {Component} from 'react';
import {PropTypes} from 'prop-types'
import {ScrollView, Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventStyles from '../styles/shared/eventStyles'
import TicketStyles from '../styles/tickets/ticketStyles'

const styles = SharedStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventStyles = EventStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()


// Hardcoding for now, will probably be replaced by a URL,
// and <Image source={{uri: ticket.imageUrl}} ... />
const sampleImages = {
  image1: require('../../assets/ticket-event.png'),
  image2: require('../../assets/ticket-event-2.png'),
}
const sampleTickets = {
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
    },
  ],
}

const Ticket = ({navigate, ticket}) => (
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
              <Icon style={ticketStyles.iconTicket} name="local-activity" />
              <Text style={ticketStyles.iconTicketText}>x {ticket.quantity}</Text>
            </View>
          </View>
          <View>
            <Text style={slideshowStyles.header}>{ticket.name}</Text>
            <Text style={slideshowStyles.details}>{ticket.venue} | {ticket.location}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>

    <View style={ticketStyles.ticketContainerBottom}>
      <View style={ticketStyles.detailsContainerBottom}>
        <View>
          <Text style={ticketStyles.detailsBottomHeader}>DATE</Text>
          <Text style={ticketStyles.detailsBottomText}>{ticket.date}</Text>
        </View>
        <View>
          <Text style={ticketStyles.detailsBottomHeader}>BEGINS</Text>
          <Text style={ticketStyles.detailsBottomText}>{ticket.starts}</Text>
        </View>
        <View>
          <Text style={[ticketStyles.detailsBottomHeader, ticketStyles.detailsLast]}>ENDS</Text>
          <Text style={[ticketStyles.detailsBottomText, ticketStyles.detailsLast]}>{ticket.ends}</Text>
        </View>
      </View>
    </View>
  </View>
)

Ticket.propTypes = {
  navigate: PropTypes.func.isRequired,
  ticket: PropTypes.object.isRequired,
}

const TicketsView = ({navigate, viewType}) => (
  sampleTickets[viewType].map((ticket) => (
    <Ticket key={ticket.name} navigate={navigate} ticket={ticket} />
  ))
)

TicketsView.propTypes = {
  navigate: PropTypes.func.isRequired,
  viewType: PropTypes.string.isRequired,
}


export default class MyTickets extends Component {
  state = {
    activeTab: 'upcoming',
  }

  tabStyle(viewType) {
    return viewType === this.state.activeTab ? styles.subnavHeaderActive : styles.subnavHeader
  }

  render() {
    const {navigation: {navigate}} = this.props

    return (
      <ScrollView>

        <View style={styles.headerContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.header}>My Tickets</Text>
            <View style={styles.iconLinkContainer}>
              <Image
                style={styles.iconImage}
                source={require('../../assets/heart-large.png')}
              />
            </View>
          </View>
        </View>

        <View style={styles.containerDark}>

          <View style={styles.subnavContainer}>
            <Text style={this.tabStyle('upcoming')} onPress={() => this.setState({activeTab: 'upcoming'})}>Upcoming Events</Text>
            <Text style={this.tabStyle('past')} onPress={() => this.setState({activeTab: 'past'})}>Past Events</Text>
          </View>

          <TicketsView navigate={navigate} viewType={this.state.activeTab} />

        </View>

      </ScrollView>
    )
  }
}

MyTickets.propTypes = {
  navigation: PropTypes.object.isRequired,
}

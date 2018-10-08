import React, {Component} from 'react';
import {PropTypes} from 'prop-types'
import {ScrollView, Text, View, Image, Animated, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventStyles from '../styles/shared/eventStyles'
import TicketStyles from '../styles/tickets/ticketStyles'

const styles = SharedStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventStyles = EventStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()

const AnimatedTicket = ({navigate, ticket, springValue}) => (
  <Animated.View style={{transform: [{scale: springValue}]}}>
    <Ticket navigate={navigate} ticket={ticket} />
  </Animated.View>
)

AnimatedTicket.propTypes = {
  navigate: PropTypes.func.isRequired,
  ticket: PropTypes.object.isRequired,
  springValue: PropTypes.object.isRequired,
}

const Ticket = ({navigate, ticket}) => (
  <View>
    <TouchableHighlight underlayColor="#F5F6F7" onPress={() => navigate('EventTickets')}>
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
            <Text style={ticketStyles.header}>{ticket.name}</Text>
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

const TicketsView = ({tickets, navigate, springValue}) => (
  tickets.map((ticket, index) => (
    index === 0 ?
      <AnimatedTicket
        key={ticket.name}
        navigate={navigate}
        ticket={ticket}
        springValue={springValue}
      /> :
      <Ticket key={ticket.name} navigate={navigate} ticket={ticket} />
  ))
)

TicketsView.propTypes = {
  navigate: PropTypes.func.isRequired,
  tickets: PropTypes.array.isRequired,
  springValue: PropTypes.object.isRequired,
}


export default class MyTickets extends Component {

  constructor(props) {
    super(props)

    this.springValue = new Animated.Value(0.3)
    const {screenProps: {store: {state}}} = props

    this.state = {
      activeTab: 'upcoming',
      tickets: state.tickets || [],
      purchasedTicket: this.hasPurchasedTicket,
    }
  }

  componentDidMount() {
    this.spring()
  }

  spring() {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1,
        tension: 1,
      }
    ).start()
  }

  tabStyle(viewType) {
    return viewType === this.state.activeTab ? styles.subnavHeaderActive : styles.subnavHeader
  }

  get ticketsForActiveView() {
    const {tickets, activeTab} = this.state

    return tickets[activeTab] || []
  }

  get hasPurchasedTicket() {
    const {navigation} = this.props

    return false // @TODO: Grab a purchasedTicket from unstated
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

          <TicketsView navigate={navigate} tickets={this.ticketsForActiveView} springValue={this.springValue} />

        </View>

      </ScrollView>
    )
  }
}

MyTickets.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
}

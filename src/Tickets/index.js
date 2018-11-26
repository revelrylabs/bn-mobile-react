import React, {Component} from 'react';
import {PropTypes} from 'prop-types'
import {ScrollView, Text, View, Image, Animated, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import TicketStyles from '../styles/tickets/ticketStyles'

const styles = SharedStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
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
  // TODO: Set up empty state component outside of this const
  // <View style={ticketStyles.emptyStateContainer}>
  //   <Image
  //     style={ticketStyles.emptyStateIcon}
  //     source={require('../../assets/icon-empty-state.png')}
  //   />
  //   <Text style={ticketStyles.emptyStateText}>
  //     Looks like you haven't attended any events yet! Why not tap browse and find your first?
  //   </Text>
  // </View>

  <View>
    <TouchableHighlight underlayColor="#F5F6F7" onPress={() => navigate('EventTickets')}>
      <View style={ticketStyles.ticketContainer}>
        <Image
          style={ticketStyles.eventImage}
          source={ticket.image}
        />
        <Image
          style={ticketStyles.eventImageOverlay}
          source={require('../../assets/event-img-overlay.png')}
        />
        <View style={ticketStyles.detailsContainer}>
          <View>
            <View style={styles.iconLinkContainer}>
              <Icon style={ticketStyles.iconTicket} name="local-activity" />
              <Text style={ticketStyles.iconTicketText}>x {ticket.quantity}</Text>
            </View>
          </View>
          <View>
            <Text numberOfLines={1} style={ticketStyles.header}>{ticket.name}</Text>
            <Text numberOfLines={1} style={slideshowStyles.details}>{ticket.venue} | {ticket.location}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>

    <View style={[ticketStyles.ticketContainerBottom, styles.borderBottomRadius]}>
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

const TicketsView = ({tickets, navigate, springValue, purchasedTicketId}) => (
  tickets.map((ticket) => (
    ticket.id === purchasedTicketId ?
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
      purchasedTicket: state.purchasedTicketId || false,
    }
  }

  componentDidMount() {
    this.spring()
  }

  componentDidUpdate(_prevProps) {
    const {screenProps: {store: {state}}} = this.props

    if (this.state.purchasedTicket !== state.purchasedTicketId) {


      this.setState({
        purchasedTicket: state.purchasedTicketId,
      }, this.spring())
    }
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

  tabWrapperStyle(viewType) {
    return viewType === this.state.activeTab ? styles.activeWrapper : null
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
      <View  style={styles.containerDark}>
        <View style={styles.headerContainer}>
          <View style={[styles.sectionHeaderContainer, styles.flexRowCenter]}>
            <Image
              style={[styles.iconImage, styles.marginBottomSmall]}
              source={require('../../assets/heart-large.png')}
            />
          </View>
        </View>
        <View style={styles.subnavContainer}>
          <View style={this.tabWrapperStyle('upcoming')}>
            <Text style={this.tabStyle('upcoming')} onPress={() => this.setState({activeTab: 'upcoming'})}>UPCOMING</Text>
          </View>
          <View style={this.tabWrapperStyle('past')}>
            <Text style={this.tabStyle('past')} onPress={() => this.setState({activeTab: 'past'})}>PAST</Text>
          </View>
          <View style={this.tabWrapperStyle('transfer')}>
            <Text style={this.tabStyle('transfer')} onPress={() => this.setState({activeTab: 'transfer'})}>TRANSFERS</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.paddingHorizontal}>
            <TicketsView
              navigate={navigate}
              tickets={this.ticketsForActiveView}
              springValue={this.springValue}
              purchasedTicketId={this.state.purchasedTicket}
            />
          </View>
          
          <View style={styles.spacer} />

        </ScrollView>
      </View>
    )
  }
}

MyTickets.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
}

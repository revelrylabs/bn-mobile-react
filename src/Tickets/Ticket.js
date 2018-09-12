import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import EventStyles from '../styles/shared/eventStyles'
import TicketStyles from '../styles/tickets/ticketStyles'
import SharedStyles from '../styles/shared/sharedStyles'
import TicketShowStyles from '../styles/tickets/ticketShowStyles'

const styles = SharedStyles.createStyles()
const eventStyles = EventStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()
const ticketShowStyles = TicketShowStyles.createStyles()

export default class Ticket extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired,
    ticket: PropTypes.object.isRequired,
  }

  render() {
    const {navigate, ticket} = this.props

    return (
      <View>
        <View>
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
}

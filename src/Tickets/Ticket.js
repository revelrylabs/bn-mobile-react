import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import EventCardStyles from '../styles/shared/eventCardStyles'
import TicketStyles from '../styles/tickets/ticketStyles'
import SharedStyles from '../styles/shared/sharedStyles'
import TicketWalletStyles from '../styles/tickets/ticketWalletStyles'

const styles = SharedStyles.createStyles()
const eventCardStyles = EventCardStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()
const ticketWalletStyles = TicketWalletStyles.createStyles()

export default class Ticket extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired,
    ticket: PropTypes.object.isRequired,
  }

  render() {
    const {navigate, ticket} = this.props

    return (
      <View>
        <View style={ticketStyles.ticketContainer}>
          <Image
            style={ticketWalletStyles.eventImage}
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
              <Text style={ticketWalletStyles.details}>{ticket.date} &bull; {ticket.starts}  &bull;  {ticket.venue}</Text>
              <View style={styles.iconLinkContainer}>
                <Text style={ticketWalletStyles.iconLinkText}>GET DIRECTIONS</Text>
                <Icon style={ticketWalletStyles.iconLink} name="call-made" />
              </View>
            </View>
          </View>
        </View>
        <View style={ticketWalletStyles.ticketContainerBottom}>
          <View style={ticketWalletStyles.detailsContainerBottom}>
            <View style={ticketWalletStyles.avatarContainer}>
              <Image
                style={ticketWalletStyles.avatar}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
            <View>
              <Text style={ticketStyles.detailsBottomText}>Anna Behrensmeyer</Text>
              <Text style={ticketStyles.detailsBottomHeader}>GENERAL ADMISSION</Text>
            </View>
          </View>
        </View>

        <View style={ticketWalletStyles.qrCodeContainer}>
          <Image
            style={ticketWalletStyles.qrCode}
            source={require('../../assets/qr-code-placeholder.png')}
          />
        </View>

        <View style={ticketWalletStyles.bottomNav}>
          <View style={[ticketWalletStyles.bottomNavLinkContainer, styles.borderRight]}>
            <Icon style={ticketWalletStyles.bottomNavIcon} name="account-balance-wallet" />
            <Text style={ticketWalletStyles.bottomNavLinkText}>ADD TO WALLET</Text>
          </View>
          <View style={ticketWalletStyles.bottomNavLinkContainer}>
            <Text style={ticketWalletStyles.bottomNavLinkText}>TRANSFER TICKET</Text>
            <Icon style={ticketWalletStyles.bottomNavIcon} name="launch" />
          </View>
        </View>
      </View>
    )
  }
}

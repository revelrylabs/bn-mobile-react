import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import QRCode from 'react-native-qrcode';

import TicketStyles from '../styles/tickets/ticketStyles'
import SharedStyles from '../styles/shared/sharedStyles'
import TicketWalletStyles from '../styles/tickets/ticketWalletStyles'

const styles = SharedStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()
const ticketWalletStyles = TicketWalletStyles.createStyles()

export default class Ticket extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired,
    ticket: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      qrText: '',
      firstName: '',
      lastName: '',
      redeem_key: '',
    }
  }

  componentDidMount() {
    this.ticketDetails()
  }

  buildQRText() {
    const {redeem_key} = this.state
    const {ticket: {ticketId, eventId}} = this.props
    const qrObj = {type: 0, data: {redeem_key, id: ticketId, event_id: eventId, extra: ''}};
    this.setState({qrText: JSON.stringify(qrObj)})
  }

  async ticketDetails() {
    const {redeemTicketInfo, ticket} = this.props
    const details = await redeemTicketInfo(ticket.ticketId)

    this.setState({
      firstName: details.first_name,
      lastName: details.last_name,
      redeem_key: details.redeem_key,
    }, () => {
      this.buildQRText()
    })
  }

  render() {
    const {navigate, ticket} = this.props
    const {firstName, lastName} = this.state

    return (
      <View>
        <View style={ticketStyles.ticketContainer}>
          <View style={ticketWalletStyles.eventImageWrapper}>
            <Image
              style={ticketWalletStyles.eventImage}
              source={{uri: ticket.image}}
            />
          </View>
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
              <Text style={ticketWalletStyles.details}>{ticket.date} &bull; {ticket.formattedDate} {ticket.formattedStart}  &bull;  {ticket.venue}</Text>
              <View style={styles.iconLinkContainer}>
                <Text style={ticketWalletStyles.iconLinkText}>GET DIRECTIONS</Text>
                <Icon style={ticketWalletStyles.iconLink} name="call-made" />
              </View>
            </View>
          </View>
        </View>
        <View style={ticketWalletStyles.ticketContainerBottom}>
          <View style={[styles.flexRowFlexStartCenter, styles.padding]}>
            <View style={ticketWalletStyles.avatarContainer}>
              <Image
                style={ticketWalletStyles.avatar}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
            <View>
              <Text style={ticketStyles.ticketHolderHeader}>{firstName} {lastName}</Text>
              <Text style={ticketStyles.ticketHolderSubheader}>{ticket.ticketType}</Text>
            </View>
          </View>
        </View>

        <View style={ticketWalletStyles.qrCodeContainer}>
          {this.state.qrText !== '' ? <QRCode size={300} fgColor="white" bgColor="black" value={this.state.qrText} /> : null}
        </View>

        {false && // TODO: Re-enable when functionality is implemented.
        <View style={ticketWalletStyles.bottomNav}>
          <View style={[ticketWalletStyles.bottomNavLinkContainer, styles.borderRight]}>
            <Icon style={ticketWalletStyles.bottomNavIcon} name="account-balance-wallet" />
            <Text style={ticketWalletStyles.bottomNavLinkText}>ADD TO WALLET</Text>
          </View>
          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('TransferTickets')}>
            <View style={ticketWalletStyles.bottomNavLinkContainer}>
              <Text style={ticketWalletStyles.bottomNavLinkText}>TRANSFER TICKET</Text>
              <Icon style={ticketWalletStyles.bottomNavIcon} name="launch" />
            </View>
          </TouchableHighlight>
        </View>
        }
      </View>
    )
  }
}

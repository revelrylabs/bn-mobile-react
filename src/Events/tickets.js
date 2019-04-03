import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {Ticket} from './event_ticket'
import CheckoutStyles from '../styles/event_details/checkoutStyles'
import TicketStyles from '../styles/tickets/ticketStyles'
import FormStyles from '../styles/shared/formStyles'
import SharedStyles from '../styles/shared/sharedStyles'
import emptyState from '../../assets/icon-empty-state.png'
import {autotrim} from '../string'

const styles = SharedStyles.createStyles()
const formStyles = FormStyles.createStyles()
const checkoutStyles = CheckoutStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()

/* eslint-disable camelcase, space-before-function-paren */

export default class GetTickets extends Component {
  static propTypes = {
    onTicketSelection: PropTypes.func,
    onPromoApply: PropTypes.func,
    onPromoRemove: PropTypes.func,
    event: PropTypes.object,
    ticketsToDisplay: PropTypes.array,
  }

  state = {
    promoCode: '',
  }

  handlePromoSubmit = () => {
    this.props.onPromoApply(this.state.promoCode)
  }

  handleRemovePromoSubmit = () => {
    this.props.onPromoRemove(this.props.event.id)
  }

  get hasTickets() {
    return this.props.ticketsToDisplay.length > 0
  }

  get ticketList() {
    return this.props.ticketsToDisplay.map((ticket) => (
      <Ticket
        key={ticket.id}
        ticket={ticket}
        onTicketSelection={this.props.onTicketSelection}
      />
    ))
  }

  get noAvailableTickets() {
    return (
      <View>
        <View style={ticketStyles.emptyStateContainer}>
          <Image style={ticketStyles.emptyStateIcon} source={emptyState} />
          <Text style={ticketStyles.emptyStateText}>
            Looks like there are no tickets available at this time.
          </Text>
        </View>
        <View style={ticketStyles.noTicketsPromoContainer}>
          {this.promoCode}
        </View>
      </View>
    )
  }

  promoCodeApplied() {
    return (
      this.props.ticketsToDisplay.findIndex(
        (ticket) => ticket.redemption_code !== null
      ) >= 0
    )
  }

  get promoCode() {
    const isPromoCodeApplied = this.promoCodeApplied()

    return (
      <View style={styles.container}>
        <Text style={checkoutStyles.ticketHeader}>Promo Code</Text>
        {isPromoCodeApplied ? (
          <View style={[checkoutStyles.rowContainer, styles.marginBottom]}>
            <View style={[styles.flexRowSpaceBetween, styles.flex1]}>
              <Text style={checkoutStyles.ticketSubHeaderPink}>
                {this.state.promoCode}
              </Text>
              <MaterialIcons
                style={checkoutStyles.iconCheck}
                name="check-circle"
              />
            </View>
          </View>
        ) : (
          <TextInput
            editable={!isPromoCodeApplied}
            keyboardShouldPersistTaps="always"
            style={[formStyles.input, styles.marginTop]}
            placeholder="Enter a Promo Code"
            onChangeText={autotrim((promoCode) => this.setState({promoCode}))}
          />
        )}

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            underlayColor="rgba(255, 34, 178, 0.2)"
            keyboardShouldPersistTaps="always"
            onPress={
              isPromoCodeApplied ?
                this.handleRemovePromoSubmit :
                this.handlePromoSubmit
            }
            style={checkoutStyles.buttonSecondary}
          >
            <Text style={styles.buttonSecondaryText}>
              {isPromoCodeApplied ? 'Remove Promo Code' : 'Apply Promo Code'}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  get hasTicketDisplay() {
    return (
      <ScrollView>
        <View>
          <View style={checkoutStyles.headerWrapper}>
            <Text style={checkoutStyles.header}>Select Ticket Type</Text>
          </View>
          {this.ticketList}
          {this.promoCode}
        </View>
      </ScrollView>
    )
  }

  render() {
    return (
      <View style={checkoutStyles.mainBody}>
        <View style={checkoutStyles.mainBodyContent}>
          {this.hasTickets ? this.hasTicketDisplay : this.noAvailableTickets}
        </View>
      </View>
    )
  }
}

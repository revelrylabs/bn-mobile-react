import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight, Image, TextInput} from 'react-native'
import {Ticket} from './event_ticket';
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

function ticketComparator({ticket_pricing: a}, {ticket_pricing: b}) { // eslint-disable-line complexity
  if (a === null && b === null) {
    return 0
  }
  if (a === null) {
    return 1
  }
  if (b === null) {
    return -1
  }
  return b - a
}

function NoAvailableTickets() {
  return (
    <View style={ticketStyles.emptyStateContainer}>
      <Image
        style={ticketStyles.emptyStateIcon}
        source={emptyState}
      />
      <Text style={ticketStyles.emptyStateText}>
        Looks like there are no tickets available at this time.
      </Text>
    </View>
  )
}

export default class GetTickets extends Component {
  static propTypes = {
    onTicketSelection: PropTypes.func,
    onPromoApply: PropTypes.func,
    event: PropTypes.object,
  }

  state = {
    promoCode: '',
  }

  handlePromoSubmit = () => {
    this.props.onPromoApply(this.state.promoCode)
  }

  get hasTickets() {
    return this.props.event.ticket_types.length > 0
  }

  get ticketList() {
    const {onTicketSelection, event: {ticket_types}} = this.props

    return ticket_types.sort(ticketComparator).map((ticket) => (
      <Ticket key={ticket.id} ticket={ticket} onTicketSelection={onTicketSelection} />
    ))
  }

  get hasTicketDisplay() {
    return (
      <View>
        <View style={checkoutStyles.headerWrapper}>
          <Text style={checkoutStyles.header}>Ticket Type</Text>
        </View>
        {this.ticketList}
        <View style={styles.container}>
          <Text style={[checkoutStyles.ticketHeader, styles.paddingBottom]}>Promo Code</Text>
          <TextInput
            style={formStyles.input}
            placeholder="Enter a Promo Code"
            onChangeText={autotrim((promoCode) => this.setState({promoCode}))}
          />
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              underlayColor="rgba(0, 0, 0, 0)"
              onPress={this.handlePromoSubmit}
              style={checkoutStyles.buttonSecondary}
            >
              <Text style={styles.buttonSecondaryText}>Apply Promo Code</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={checkoutStyles.mainBody}>
        <View style={checkoutStyles.mainBodyContent}>

          {this.hasTickets ? this.hasTicketDisplay : <NoAvailableTickets />}

        </View>
      </View>
    )
  }
}

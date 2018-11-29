import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AccountStyles from '../styles/account/accountStyles'
import CheckoutStyles from '../styles/event_details/checkoutStyles'
import {sortBy} from 'lodash'
import {toDollars} from '../constants/money'

const accountStyles = AccountStyles.createStyles()
const checkoutStyles = CheckoutStyles.createStyles()

/* eslint-disable camelcase, space-before-function-paren */

export default class GetTickets extends Component {
  static propTypes = {
    onTicketSelection: PropTypes.func,
    event: PropTypes.object,
  }

  get tickets() {
    const {onTicketSelection, event: {ticket_types}} = this.props

    return sortBy(ticket_types, (ticket) => (
      ticket.ticket_pricing.price_in_cents
    )).map((ticket) => {
      const {id, name, ticket_pricing} = ticket

      return (
        <TouchableHighlight key={ticket.id} onPress={() => onTicketSelection(id, ticket_pricing.id)}>
          <View style={checkoutStyles.rowContainer}>
            <View style={checkoutStyles.row}>
              <Text style={checkoutStyles.ticketPrice}>${toDollars(ticket_pricing.price_in_cents)}</Text>
              <View>
                <Text style={checkoutStyles.ticketHeader}>{name}</Text>
                <Text style={checkoutStyles.ticketSubHeader}>{ticket_pricing.name}</Text>
              </View>
            </View>
            <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
          </View>
        </TouchableHighlight>
      )
    })
  }

  render() {
    return (
      <View style={checkoutStyles.mainBody}>
        <View style={checkoutStyles.mainBodyContent}>

          <View style={checkoutStyles.headerWrapper}>
            <Text style={checkoutStyles.header}>Ticket Type</Text>
          </View>

          {this.tickets}

        </View>
      </View>
    )
  }
}

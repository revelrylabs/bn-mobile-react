import React, {Component} from 'react'
import {View, Text, TouchableHighlight, TextInput, Image} from 'react-native'
import {price, usernameLastFirst} from '../string'
import SharedStyles from '../styles/shared/sharedStyles'
import FormStyles from '../styles/shared/formStyles'
import TicketStyles from '../styles/tickets/ticketStyles'
import CheckoutStyles from '../styles/event_details/checkoutStyles'

const styles = SharedStyles.createStyles()
const formStyles = FormStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()
const checkoutStyles = CheckoutStyles.createStyles()

function BusyState() {
  return (
    <View style={ticketStyles.emptyStateContainer}>
      <Text style={ticketStyles.emptyStateText}>Hang on a sec...</Text>
    </View>
  )
}

function GuestTicketCard({guest, onSelect}) {
  return (
    <TouchableHighlight onPress={() => onSelect(guest)}>
      <View>
        <Text>{usernameLastFirst(guest)}</Text>
        <Text>{guest.ticket_type}</Text>
        <Text>{price(guest.price_in_cents)}</Text>
        <Text>{guest.status}</Text>
      </View>
    </TouchableHighlight>
  )
}

function EmptyState() {
  return (
    <Text>No guests found.</Text>
  )
}

function GuestList({guests, onSelect}) {
  if (guests.length === 0) {
    return <EmptyState />
  }

  return guests.map((guest) => (
    <GuestTicketCard
      key={guest.id}
      guest={guest}
      onSelect={onSelect}
    />
  ))
}

function GuestToCheckIn({guest, onCancel, onCheckIn}) {
  return (
    <View>
      <Text>{usernameLastFirst(guest)}</Text>
      <Text>{guest.ticket_type}</Text>
      <Text>{price(guest.price_in_cents)}</Text>
      <Text>{guest.status}</Text>
      <TouchableHighlight onPress={() => onCancel(guest)}>
        <Text>Cancel</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onCheckIn(guest)}>
        <Text>Check In</Text>
      </TouchableHighlight>
    </View>
  )
}

function SearchBox({textInput}) {
  return (
    <TextInput {...textInput} />
  )
}

export default class ManualCheckin extends Component {
  state = {
    selectedGuest: null,
  }

  componentDidMount() {
    this.searchGuestList()
  }

  searchGuestList = (...args) => {
    this.props.searchGuestList(...args)
  }

  selectGuest = (selectedGuest) => {
    this.setState({selectedGuest})
  }

  unselectGuest = () => {
    this.selectGuest(null)
  }

  checkInGuest = (guest) => {
    console.log(guest)
    alert(`TODO: check in ticket ID ${guest.id}`)
    this.unselectGuest()
  }

  get innerContent() {
    const {selectedGuest} = this.state
    const {isFetchingGuests, guests, guestListQuery} = this.props

    if (selectedGuest !== null) {
      return (
        <GuestToCheckIn
          guest={selectedGuest}
          onCancel={this.unselectGuest}
          onCheckIn={this.checkInGuest}
        />
      )
    }

    return (
      <View style={[checkoutStyles.mainBody, checkoutStyles.checkoutMainBody]}>
        <View style={checkoutStyles.mainBodyContent}>

          <View style={styles.container}>
            <Text style={styles.sectionHeader}>All Guests</Text>
            <View style={formStyles.searchContainer}>
              <SearchBox style={formStyles.searchInput}>
                textInput={{
                  defaultValue: guestListQuery,
                  onChangeText: this.searchGuestList,
                  placeholder: "Search for guests",
                }}
              </SearchBox>
            </View>
          </View>

          {isFetchingGuests && (
            <BusyState />
          )}

          <GuestList
            guests={guests}
            onSelect={this.selectGuest}
          />
        </View>
      </View>
    )
  }

  render() {
    return (
      <View>
        {this.innerContent}
      </View>
    )
  }
}

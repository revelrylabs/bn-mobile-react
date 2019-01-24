import React, {Component} from 'react'
import {ScrollView, View, Text, TouchableHighlight, TextInput, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {price, usernameLastFirst} from '../string'
import SharedStyles from '../styles/shared/sharedStyles'
import DoormanStyles from '../styles/account/doormanStyles'
import AccountStyles from '../styles/account/accountStyles'
import TicketStyles from '../styles/tickets/ticketStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'

const styles = SharedStyles.createStyles()
const doormanStyles = DoormanStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()

function BusyState() {
  return (
    <View style={ticketStyles.emptyStateContainer}>
      <Text style={ticketStyles.emptyStateText}>Hang on a sec...</Text>
    </View>
  )
}

function GuestTicketCard({guest, onSelect}) {
  return (
    <View style={doormanStyles.rowContainer}>
      <TouchableHighlight onPress={() => onSelect(guest)}>
        <View style={doormanStyles.row}>
          <View>
            <Text style={styles.headerSecondary}>{usernameLastFirst(guest)}</Text>
            <Text style={doormanStyles.bodyText}>{guest.ticket_type}</Text>
            <Text style={doormanStyles.bodyText}>{price(guest.price_in_cents)} | {guest.status}</Text>
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onSelect(guest)}>
        <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
      </TouchableHighlight>
    </View>
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
      <View style={doormanStyles.rowContainer}>
        <View style={doormanStyles.row}>
          <View>
            <Text style={styles.headerSecondary}>{usernameLastFirst(guest)}</Text>
            <Text style={doormanStyles.bodyText}>{guest.ticket_type}</Text>
            <Text style={doormanStyles.bodyText}>{price(guest.price_in_cents)} | {guest.status}</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={[styles.flexRowSpaceBetween, styles.paddingTop]}>
          <TouchableHighlight
            style={[eventDetailsStyles.buttonRounded, styles.marginRightTiny]}
            onPress={() => onCancel(guest)}
          >
              <Text style={eventDetailsStyles.buttonRoundedText}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[eventDetailsStyles.buttonRoundedActive, styles.marginLeftTiny]}
            onPress={() => onCheckIn(guest)}
          >
            <Text style={eventDetailsStyles.buttonRoundedActiveText}>Complete Check-In</Text>
          </TouchableHighlight>
        </View>
      </View>

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
    console.log(...args)
    this.props.searchGuestList(...args)
  }

  selectGuest = (selectedGuest) => {
    this.setState({selectedGuest})
  }

  unselectGuest = () => {
    this.selectGuest(null)
  }

  checkInGuest = (guest) => {
    alert(`TODO: check in ticket ID ${guest.id}`)
    this.unselectGuest()
  }

  get innerContent() {
    const {selectedGuest} = this.state
    const {isFetchingGuests, guests, guestListQuery} = this.props

    if (selectedGuest !== null) {
      return (
        <View style={[doormanStyles.mainBody, doormanStyles.checkoutMainBody]}>
          <View style={doormanStyles.mainBodyContent}>
            <GuestToCheckIn
              guest={selectedGuest}
              onCancel={this.unselectGuest}
              onCheckIn={this.checkInGuest}
            />
          </View>
        </View>
      )
    }

    return (
      <ScrollView>
        <View style={[doormanStyles.mainBody, doormanStyles.checkoutMainBody]}>
          <View style={doormanStyles.mainBodyContent}>

            <View style={styles.container}>
              <Text style={doormanStyles.sectionHeader}>All Guests</Text>
              <View style={doormanStyles.searchContainer}>
                <SearchBox
                  textInput={{
                    defaultValue: guestListQuery,
                    onChangeText: this.searchGuestList,
                    placeholder: "Search for guests",
                  }}
                  style={doormanStyles.searchInput}
                />
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
        <View style={doormanStyles.spacer} />
      </ScrollView>
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

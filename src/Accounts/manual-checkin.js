import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import {price, usernameLastFirst} from '../string'

function BusyState() {
  return (
    <Text>Hang on a sec...</Text>
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

export default class ManualCheckin extends Component {
  state = {
    selectedGuest: null
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
    const {isFetchingGuests, guests} = this.props

    if (selectedGuest !== null) {
      return (
        <GuestToCheckIn
          guest={selectedGuest}
          onCancel={this.unselectGuest}
          onCheckIn={this.checkInGuest}
        />
      )
    }

    if (isFetchingGuests) {
      return <BusyState />
    }

    return (
      <GuestList
        guests={guests}
        onSelect={this.selectGuest}
      />
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.innerContent}
      </View>
    )
  }
}

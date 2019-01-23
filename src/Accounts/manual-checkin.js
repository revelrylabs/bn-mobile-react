import React, {Component} from 'react'
import {ScrollView, View, Text, TouchableHighlight, TextInput, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {price, usernameLastFirst} from '../string'
import SharedStyles from '../styles/shared/sharedStyles'
import FormStyles from '../styles/shared/formStyles'
import DoormanStyles from '../styles/account/doormanStyles'
import AccountStyles from '../styles/account/accountStyles'
import TicketStyles from '../styles/tickets/ticketStyles'

const styles = SharedStyles.createStyles()
const formStyles = FormStyles.createStyles()
const doormanStyles = DoormanStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()

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
      <ScrollView>
        <View style={[doormanStyles.mainBody, doormanStyles.checkoutMainBody]}>
          <View style={doormanStyles.mainBodyContent}>

            <View style={styles.container}>
              <Text style={doormanStyles.sectionHeader}>All Guests</Text>
              <SearchBox style={formStyles.searchContainer}>
                textInput={{
                  defaultValue: guestListQuery,
                  onChangeText: this.searchGuestList,
                  placeholder: "Search for guests",
                }},
                style={formStyles.searchInput},
              </SearchBox>

              <View style={formStyles.searchContainer}>
                <Image
                  style={formStyles.searchIcon}
                  source={require('../../assets/icon-search.png')}
                />
                <TextInput
                  style={formStyles.searchInput}
                  placeholder="Search artists, shows, venues..."
                  searchIcon={{size: 24}}
                  underlineColorAndroid="transparent"
                  disabled
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

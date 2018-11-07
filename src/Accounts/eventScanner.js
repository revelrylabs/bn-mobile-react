import React from 'react';
import {Text, View, Image, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'
import EventScannerStyles from '../styles/account/eventScannerStyles'
import TicketWalletStyles from '../styles/tickets/ticketWalletStyles'

const styles = SharedStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()
const eventScannerStyles = EventScannerStyles.createStyles()
const ticketWalletStyles = TicketWalletStyles.createStyles()


export default function EventScanner(props) {
  const {navigation: {navigate}} = props

  return (
    <View>
      <Image
        style={eventScannerStyles.scannerBkgdImage}
        source={require('../../assets/phone-scanner.png')}
      />

      <View style={eventScannerStyles.headerActionsWrapper}>
        <View style={eventDetailsStyles.backArrowCircleContainer}>
          <Icon
            style={eventDetailsStyles.backArrow}
            name="close"
            onPress={() => {
              navigate('ManageEvents')
            }}
          />
        </View>
        <TouchableHighlight style={eventScannerStyles.pillContainer}>
          <View style={styles.flexRowCenter}>
            <Text style={[eventScannerStyles.pillTextWhite, styles.marginRightTiny]}>Check-in Mode:</Text>
            <Text style={eventScannerStyles.pillTextPrimary}>Manual</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={eventScannerStyles.headerActionsWrapper}>
        <View style={eventScannerStyles.pillContainer}>

          <View style={styles.flexRowFlexStartCenter}>
            <View style={ticketWalletStyles.avatarContainer}>
              <Image
                style={ticketWalletStyles.avatar}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
            <View>
              <Text style={eventScannerStyles.pillTextWhite}>Anna Behrensmeyer</Text>
              <Text style={eventScannerStyles.pillTextSubheader}>General Admission</Text>
            </View>
            <Icon style={eventScannerStyles.checkIcon} name="check-circle" />
          </View>

        </View>
      </View>

      <ScrollView>
        <View style={[styles.container, eventDetailsStyles.mainBody]}>
          <View style={eventDetailsStyles.mainBodyContent}>
            <View style={styles.flexRowSpaceBetween}>
              <Text numberOfLines={2} style={eventDetailsStyles.descriptionHeader}>All Guests</Text>
              <Text style={eventDetailsStyles.calendarMonth}>icon</Text>
            </View>
          </View>
        </View>
      </ScrollView>

    </View>
  );
}

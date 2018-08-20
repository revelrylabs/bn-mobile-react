import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventStyles from '../styles/shared/eventStyles'
import TicketStyles from '../styles/tickets/ticketStyles'
import TicketShowStyles from '../styles/tickets/ticketShowStyles'

const styles = SharedStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventStyles = EventStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()
const ticketShowStyles = TicketShowStyles.createStyles()

export default function EventsTicket() {
  return (
    <View style={ticketShowStyles.modalContainer}>
      <Image
        style={ticketShowStyles.modalBkgdImage}
        source={require('../../assets/modal-bkgd.jpg')}
      />

      <View style={ticketShowStyles.closeModalContainer}>
        <Icon
          style={styles.iconLinkCircle}
          name="close"
          onPress={() => {
            this.props.navigation.goBack()
          }}
        />
        <Text style={ticketShowStyles.closeModalHeader}>Ticket 1 of 3</Text>
        <Text>&nbsp;</Text>
      </View>

      <View>
        <TouchableHighlight underlayColor="#F5F6F7" onPress={() => navigate('EventTicket')}>
          <View style={ticketStyles.ticketContainer}>
            <Image
              style={eventStyles.eventImage}
              source={require('../../assets/ticket-event-2.png')}
            />
            <View style={ticketStyles.detailsContainer}>
              <View>
                <View style={styles.iconLinkContainer}>
                  <Image
                    style={eventStyles.eventImage}
                    source={require('../../assets/heart-white.png')}
                  />
                </View>
              </View>
              <View>
                <Text style={slideshowStyles.header}>Header</Text>
                <Text style={slideshowStyles.details}>Location</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
        <View style={ticketStyles.ticketContainerBottom}>
          <View style={ticketStyles.detailsContainerBottom}>
            <View>
              <Text style={ticketStyles.detailsBottomHeader}>DATE</Text>
              <Text style={ticketStyles.detailsBottomText}>date</Text>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
}

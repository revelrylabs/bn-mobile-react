import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import TicketShowStyles from '../styles/tickets/ticketShowStyles'

const styles = SharedStyles.createStyles()
const ticketShowStyles = TicketShowStyles.createStyles()

export default function EventsTicket() {
  return (
    <View style={ticketShowStyles.modalContainer}>
      <Image
        style={ticketShowStyles.modalBkgdImage}
        source={require('../../assets/modal-bkgd.jpg')}
      />

      <View style={ticketShowStyles.closeModal}>
        <Icon
          style={styles.iconLinkCircle}
          name="close"
        />
        <Text style={ticketShowStyles.closeModalHeader}>Ticket 1 of 3</Text>
      </View>
    </View>
  );
}

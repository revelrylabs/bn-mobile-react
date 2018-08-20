import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import TicketShowStyles from '../styles/tickets/ticketShowStyles'

const styles = SharedStyles.createStyles()
const ticketShowStyles = TicketShowStyles.createStyles()

export default function EventsTicket() {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.iconLinkCircle}
        name="close"
        onPress={() => {
          this.props.navigation.goBack()
        }}
      />
    </View>
  );
}

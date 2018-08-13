import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import SharedStyles from '../styles/shared/sharedStyles'

const styles = SharedStyles.createStyles()

export default function MyTickets(props) {
  const {navigation: {navigate}} = props

  return (
    <View style={styles.container}>
      <Text>My Tickets Page</Text>
      <Button
        title="View Event Ticket"
        onPress={() => navigate("EventTicket")}
      />
    </View>
  );
}

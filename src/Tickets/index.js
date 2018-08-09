import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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

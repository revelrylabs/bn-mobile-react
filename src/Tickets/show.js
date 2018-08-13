import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SharedStyles from '../styles/shared/sharedStyles'

const styles = SharedStyles.createStyles()

export default function EventsTicket() {
  return (
    <View style={styles.container}>
      <Text>Show a specific Event&apos;s Ticket</Text>
    </View>
  );
}

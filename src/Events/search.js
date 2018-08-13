import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SharedStyles from '../styles/shared/sharedStyles'

const styles = SharedStyles.createStyles()

export default function EventsSearch() {
  return (
    <View style={styles.container}>
      <Text>Search for Events</Text>
    </View>
  );
}

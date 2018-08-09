import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function EventsIndex() {
  return (
    <View style={styles.container}>
      <Text>Main Events Explore Page</Text>
    </View>
  );
}

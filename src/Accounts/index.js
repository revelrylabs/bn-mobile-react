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

export default function Account() {
  return (
    <View style={styles.container}>
      <Text>My Account Details</Text>
    </View>
  );
}

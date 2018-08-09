import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function EventsIndex(props) {
  const {navigation: {navigate}} = props

  return (
    <View style={styles.container}>
      <Text>Main Events Explore Page</Text>
      <Button
        title="View Event"
        onPress={() => navigate("EventsShow")}
      />
      <Button
        title="Search Event"
        onPress={() => navigate("EventsSearch")}
      />
      <Button
        title="Change Location"
        onPress={() => navigate("EventsChangeLocation")}
      />
    </View>
  );
}

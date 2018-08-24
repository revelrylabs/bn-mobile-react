import React from 'react';
import {Text, View} from 'react-native';
import SharedStyles from '../styles/shared/sharedStyles'

const styles = SharedStyles.createStyles()

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text>Notification Preferences Page</Text>
    </View>
  );
}

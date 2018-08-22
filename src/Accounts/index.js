import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()

export default function Account() {
  return (
    <View style={styles.container}>
    </View>
  );
}

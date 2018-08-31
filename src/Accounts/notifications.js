import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()

export default function Notifications() {
  return (
    <ScrollView>
      <View style={accountStyles.containerDark}>
        <Text style={accountStyles.sectionHeader}>Notification Type</Text>
      </View>
    </ScrollView>
  );
}

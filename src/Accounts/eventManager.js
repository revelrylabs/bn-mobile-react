import React from 'react';
import {Text, View, Image, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import BillingStyles from '../styles/account/billingStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()


export default function EventManager() {
  return (
    <ScrollView style={styles.containerDark}>
      <View style={styles.paddingVerticalMedium}>

        <Text style={accountStyles.sectionHeader}>Live</Text>



        <Text style={[accountStyles.sectionHeader, styles.marginTop]}>Upcoming</Text>

      </View>
    </ScrollView>
  );
}

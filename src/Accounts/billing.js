import React from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import BillingStyles from '../styles/account/billingStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const billingStyles = BillingStyles.createStyles()

export default function Billing() {
  return (
    <ScrollView>
      <View style={accountStyles.containerDark}>

        <Text style={accountStyles.sectionHeader}>Credit Cards</Text>

        <View style={accountStyles.accountRow}>
          <View style={billingStyles.billingRowWrapper}>
            <Image
              style={billingStyles.billingImage}
              source={require('../../assets/icon-visa.png')}
            />
            <TextInput
              style={billingStyles.billingInputHeader}
              placeholder="**** **** **** 2386"
              placeholderTextColor='black'
            />
            <TextInput
              style={billingStyles.billingInputHeader}
              placeholder="12/24"
              placeholderTextColor='black'
            />
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

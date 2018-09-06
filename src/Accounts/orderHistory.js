import React from 'react';
import {Text, View, Image, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import BillingStyles from '../styles/account/billingStyles'
import OrderHistoryStyles from '../styles/account/orderHistoryStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const billingStyles = BillingStyles.createStyles()
const orderHistoryStyles = OrderHistoryStyles.createStyles()

export default function OrderHistory() {
  return (
    <ScrollView>
      <View style={accountStyles.containerDark}>

        <Text style={accountStyles.sectionHeader}>Order Receipts</Text>

        <View style={billingStyles.billingRowWrapper}>
          <View style={billingStyles.billingRow}>
            <View>
              <Text style={orderHistoryStyles.orderHistoryDate}>AUG 14TH | THE WARFIELD</Text>
              <Text style={orderHistoryStyles.orderHistoryText}>Future Islands</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

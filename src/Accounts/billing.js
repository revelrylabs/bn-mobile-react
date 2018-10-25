import React from 'react';
import {Text, View, Image, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import BillingStyles from '../styles/account/billingStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const billingStyles = BillingStyles.createStyles()

export default function Billing() {
  return (
    <ScrollView style={styles.containerDark}>
      <View style={styles.paddingVerticalMedium}>

        <Text style={accountStyles.sectionHeader}>Credit Cards</Text>

        <View style={accountStyles.inputContainer}>
          <View style={billingStyles.row}>
            <View style={billingStyles.imageWrapper}>
              <Image
                style={billingStyles.billingImageVisa}
                source={require('../../assets/icon-visa.png')}
              />
            </View>
            <TextInput
              style={styles.paddingRight}
              placeholder="**** **** **** 2386"
              placeholderTextColor='black'
            />
            <TextInput
              style={styles.paddingRight}
              placeholder="12/24"
              placeholderTextColor='black'
            />
          </View>
        </View>

        <View style={accountStyles.inputContainer}>
          <View style={billingStyles.row}>
            <View style={billingStyles.imageWrapper}>
              <Image
                style={billingStyles.billingImageMC}
                source={require('../../assets/icon-mastercard.png')}
              />
            </View>
            <TextInput
              style={styles.paddingRight}
              placeholder="**** **** **** 2595"
              placeholderTextColor='black'
            />
            <TextInput
              style={styles.paddingRight}
              placeholder="04/21"
              placeholderTextColor='black'
            />
          </View>
        </View>

        <Text style={[accountStyles.sectionHeader, styles.marginTop]}>Other</Text>

        <View style={accountStyles.inputContainer}>
          <View style={billingStyles.row}>
            <View style={billingStyles.imageWrapper}>
              <Image
                style={billingStyles.billingImageVenmo}
                source={require('../../assets/icon-venmo.png')}
              />
            </View>
            <TextInput
              style={accountStyles.accountInputHeader}
              placeholder="kookster9000@hottopic.com"
              placeholderTextColor='black'
            />
          </View>
        </View>

        <View style={[styles.buttonContainer, styles.marginTop]}>
          <TouchableHighlight
            style={styles.buttonSecondary}
          >
            <View style={styles.buttonIconContainer}>
              <Icon style={billingStyles.billingButtonIcon} name="credit-card" />
              <Text style={styles.buttonSecondaryText}>Add Payment Method</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    </ScrollView>
  );
}

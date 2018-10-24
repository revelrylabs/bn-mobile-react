import React from 'react';
import {Text, View, Image, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import TicketWalletStyles from '../styles/tickets/ticketWalletStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const ticketWalletStyles = TicketWalletStyles.createStyles()

export default function AccountDetails(props) {
  const {navigation: {navigate}, screenProps: {auth: {logOut}}} = props

  return (
    <ScrollView style={styles.containerDark}>
      <View style={styles.paddingVerticalMedium}>

        <View style={accountStyles.rowContainer}>
          <View style={accountStyles.row}>
            <View style={[ticketWalletStyles.avatarContainer, accountStyles.avatarContainer]}>
              <Image
                style={ticketWalletStyles.avatar}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
            <TouchableHighlight style={styles.flexColumnCenter}>
              <Text style={styles.buttonSecondaryText} onPress={() => navigate('ChangePhoto')}>Change Profile Photo</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={accountStyles.rowContainer}>
          <View style={accountStyles.row}>
            <Text style={accountStyles.accountInputHeaderDisabled}>First Name</Text>
            <TextInput
              placeholder="Kook"
              placeholderTextColor='gray'
            />
          </View>
        </View>

        <View style={accountStyles.rowContainer}>
          <View style={accountStyles.row}>
            <Text style={accountStyles.accountInputHeaderDisabled}>Last Name</Text>
            <TextInput
              placeholder="McDropin"
              placeholderTextColor='gray'
            />
          </View>
        </View>

        <View style={[accountStyles.rowContainer, styles.marginTop]}>
          <View style={accountStyles.row}>
            <Text style={accountStyles.accountInputHeaderDisabled}>Mobile</Text>
            <TextInput
              placeholder="504-000-0000"
              placeholderTextColor='gray'
            />
          </View>
        </View>

        <View style={accountStyles.rowContainer}>
          <View style={accountStyles.row}>
            <Text style={accountStyles.accountInputHeaderDisabled}>Email</Text>
            <TextInput
              placeholder="kookmcdropz@gmail.com"
              placeholderTextColor='gray'
            />
          </View>
        </View>

        <View style={accountStyles.rowContainer}>
          <View style={accountStyles.row}>
            <Text style={accountStyles.accountInputHeaderDisabled}>Password</Text>
            <TextInput
              placeholder="password"
              placeholderTextColor='gray'
            />
          </View>
        </View>
        <View style={[styles.buttonContainer, styles.marginTop]}>
          <TouchableHighlight
            style={styles.buttonSecondary}
          >
            <Text style={styles.buttonSecondaryText} onPress={() => logOut(navigate)}>Sign Out</Text>
          </TouchableHighlight>
        </View>

      </View>
    </ScrollView>
  );
}

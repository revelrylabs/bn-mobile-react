import React from 'react';
import {Text, View, Image, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import TicketShowStyles from '../styles/tickets/ticketShowStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const ticketShowStyles = TicketShowStyles.createStyles()

export default function AccountDetails(props) {
  const {navigation: {navigate}} = props

  return (
    <ScrollView>
      <View style={accountStyles.containerDark}>

        <View style={accountStyles.accountRow}>
          <View style={styles.flexRowFlexStart}>
            <View style={[ticketShowStyles.avatarContainer, accountStyles.avatarContainer]}>
              <Image
                style={ticketShowStyles.avatar}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
            <TouchableHighlight style={styles.flexColumnCenter}>
              <Text style={styles.buttonSecondaryText} onPress={() => navigate('ChangePhoto')}>Change Profile Photo</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={accountStyles.accountRow}>
          <View style={styles.flexRowFlexStart}>
            <Text style={accountStyles.accountInputHeaderDisabled}>First Name</Text>
            <TextInput
              style={styles.flexColumnCenter}
              placeholder="Kook"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={accountStyles.accountRow}>
          <View style={styles.flexRowFlexStart}>
            <Text style={accountStyles.accountInputHeaderDisabled}>Last Name</Text>
            <TextInput
              style={styles.flexColumnCenter}
              placeholder="McDropin"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={[accountStyles.accountRow, styles.marginTop]}>
          <View style={styles.flexRowFlexStart}>
            <Text style={accountStyles.accountInputHeaderDisabled}>Mobile</Text>
            <TextInput
              style={styles.flexColumnCenter}
              placeholder="504-000-0000"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={accountStyles.accountRow}>
          <View style={styles.flexRowFlexStart}>
            <Text style={accountStyles.accountInputHeaderDisabled}>Email</Text>
            <TextInput
              style={styles.flexColumnCenter}
              placeholder="kookmcdropz@gmail.com"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={accountStyles.accountRow}>
          <View style={styles.flexRowFlexStart}>
            <Text style={accountStyles.accountInputHeaderDisabled}>Password</Text>
            <TextInput
              style={styles.flexColumnCenter}
              placeholder="password"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={[styles.buttonContainer, styles.marginTop]}>
          <TouchableHighlight
            style={styles.buttonSecondary}
          >
            <Text style={styles.buttonSecondaryText} onPress={() => navigate('SignedOut')}>Sign Out</Text>
          </TouchableHighlight>
        </View>

      </View>
    </ScrollView>
  );
}

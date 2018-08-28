import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Text, View, Image, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import TicketShowStyles from '../styles/tickets/ticketShowStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const ticketShowStyles = TicketShowStyles.createStyles()

export default function AccountDetails() {
  return (
    <ScrollView>
      <View style={accountStyles.containerDark}>

        <View style={accountStyles.accountRow}>
          <View style={accountStyles.accountRowWrapper}>
            <View style={[ticketShowStyles.avatarContainer, accountStyles.avatarContainer]}>
              <Image
                style={ticketShowStyles.avatar}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
            <TouchableHighlight style={accountStyles.accountInputHeader}>
              <Text style={styles.buttonSecondaryText}>Change Profile Photo</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={accountStyles.accountRow}>
          <View style={accountStyles.accountRowWrapper}>
            <Text style={accountStyles.accountInputHeaderDisabled}>First Name</Text>
            <TextInput
              style={accountStyles.accountInputHeader}
              placeholder="Kook"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={accountStyles.accountRow}>
          <View style={accountStyles.accountRowWrapper}>
            <Text style={accountStyles.accountInputHeaderDisabled}>Last Name</Text>
            <TextInput
              style={accountStyles.accountInputHeader}
              placeholder="McDropin"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={[accountStyles.accountRow, styles.marginTop]}>
          <View style={accountStyles.accountRowWrapper}>
            <Text style={accountStyles.accountInputHeaderDisabled}>Mobile</Text>
            <TextInput
              style={accountStyles.accountInputHeader}
              placeholder="504-000-0000"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={accountStyles.accountRow}>
          <View style={accountStyles.accountRowWrapper}>
            <Text style={accountStyles.accountInputHeaderDisabled}>Email</Text>
            <TextInput
              style={accountStyles.accountInputHeader}
              placeholder="kookmcdropz@gmail.com"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={accountStyles.accountRow}>
          <View style={accountStyles.accountRowWrapper}>
            <Text style={accountStyles.accountInputHeaderDisabled}>Password</Text>
            <TextInput
              style={accountStyles.accountInputHeader}
              placeholder="password"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={[styles.buttonContainer, styles.marginTop]}>
          <TouchableHighlight
            style={styles.buttonSecondary}
          >
            <Text style={styles.buttonSecondaryText}>Sign Out</Text>
          </TouchableHighlight>
        </View>

      </View>
    </ScrollView>
  );
}

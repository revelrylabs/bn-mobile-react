import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Text, View, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()

export default function AccountDetails() {
  return (
    <ScrollView>
      <View style={accountStyles.containerDark}>

        <View style={accountStyles.accountRow}>
          <View style={accountStyles.accountRowWrapper}>
            <Text style={accountStyles.accountHeaderDisabled}>First Name</Text>
            <TextInput
              style={accountStyles.accountHeader}
              placeholder="Kook"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={accountStyles.accountRow}>
          <View style={accountStyles.accountRowWrapper}>
            <Text style={accountStyles.accountHeaderDisabled}>Last Name</Text>
            <TextInput
              style={accountStyles.accountHeader}
              placeholder="McDropin"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={accountStyles.accountRow}>
          <View style={accountStyles.accountRowWrapper}>
            <Text style={accountStyles.accountHeaderDisabled}>Mobile</Text>
            <TextInput
              style={accountStyles.accountHeader}
              placeholder="504-000-0000"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={accountStyles.accountRow}>
          <View style={accountStyles.accountRowWrapper}>
            <Text style={accountStyles.accountHeaderDisabled}>Email</Text>
            <TextInput
              style={accountStyles.accountHeader}
              placeholder="kookmcdropz@gmail.com"
              placeholderTextColor='black'
            />
          </View>
        </View>
        <View style={accountStyles.accountRow}>
          <View style={accountStyles.accountRowWrapper}>
            <Text style={accountStyles.accountHeaderDisabled}>Password</Text>
            <TextInput
              style={accountStyles.accountHeader}
              placeholder="password"
              placeholderTextColor='black'
            />
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

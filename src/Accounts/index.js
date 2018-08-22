import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'
import AccountStyles from '../styles/account/accountStyles'

const styles = SharedStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()
const accountStyles = AccountStyles.createStyles()

export default function Account() {
  return (
    <ScrollView>

      <View style={accountStyles.accountBkgdContainer}>
        <Image
          style={accountStyles.accountBkgd}
          source={require('../../assets/account-placeholder-bkgd.png')}
        />
        <View style={accountStyles.accountPhotoContainer}>
          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
            <Text style={accountStyles.accountPhotoText}>+ TAP TO ADD A COVER PHOTO</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.container}>
        <View style={accountStyles.avatarPlaceholderContainer}>
          <Icon style={accountStyles.avatarIcon} name="person-add" />
        </View>

        <View style={accountStyles.accountHeaderContainer}>
          <View>
            <Text style={accountStyles.accountHeader}>Kook McDropin</Text>
            <View style={accountStyles.emailWrapper}>
              <Icon style={accountStyles.emailIcon} name="mail" />
              <Text style={accountStyles.accountEmail}>kookmcdropz@gmail.com</Text>
            </View>
          </View>
          <Image
            style={accountStyles.qrCodeSmall}
            source={require('../../assets/qr-code-small.png')}
          />
        </View>
      </View>

    </ScrollView>
  );
}

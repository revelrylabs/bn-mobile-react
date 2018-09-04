import React from 'react';
import {Text, View, ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import NotificationStyles from '../styles/account/notificationStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const notificationStyles = NotificationStyles.createStyles()

export default function Notifications() {
  return (
    <ScrollView>
      <View style={accountStyles.containerDark}>

        <View style={notificationStyles.notificationHeaderRow}>
          <View style={styles.cols2}>
            <Text style={notificationStyles.sectionHeader}>Notification Type</Text>
          </View>
          <Text style={notificationStyles.sectionHeader}>Phone</Text>
          <Text style={notificationStyles.sectionHeader}>Email</Text>
        </View>

        <View style={notificationStyles.notificationRow}>
          <View style={styles.cols2}>
            <Text style={accountStyles.accountHeader}>A friend is interested in an event</Text>
          </View>
          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
            <Icon style={accountStyles.accountIcon} name="phone-iphone" />
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
            <Icon style={accountStyles.accountIconActive} name="mail-outline" />
          </TouchableHighlight>
        </View>

        <View style={notificationStyles.notificationRow}>
          <View style={styles.cols2}>
            <Text style={accountStyles.accountHeader}>My dog buys tickets to a show</Text>
          </View>
          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
            <Icon style={accountStyles.accountIcon} name="phone-iphone" />
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
            <Icon style={accountStyles.accountIcon} name="mail-outline" />
          </TouchableHighlight>
        </View>

        <View style={notificationStyles.notificationRow}>
          <View style={styles.cols2}>
            <Text style={accountStyles.accountHeader}>An artist i dislike cancels a show in my area</Text>
          </View>
          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
            <Icon style={accountStyles.accountIconActive} name="phone-iphone" />
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
            <Icon style={accountStyles.accountIcon} name="mail-outline" />
          </TouchableHighlight>
        </View>

        <View style={notificationStyles.notificationRow}>
          <View style={styles.cols2}>
            <Text style={accountStyles.accountHeader}>Someone sends me a ticket</Text>
          </View>
          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
            <Icon style={accountStyles.accountIconActive} name="phone-iphone" />
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
            <Icon style={accountStyles.accountIconActive} name="mail-outline" />
          </TouchableHighlight>
        </View>

      </View>
    </ScrollView>
  );
}

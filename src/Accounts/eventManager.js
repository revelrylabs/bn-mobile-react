import React from 'react';
import {Text, View, Image, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import EventManagerStyles from '../styles/account/eventManagerStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const eventManagerStyles = EventManagerStyles.createStyles()


export default function EventManager() {
  return (
    <ScrollView style={styles.containerDark}>
      <View style={[styles.paddingVerticalMedium, styles.paddingHorizontal]}>

        <Text style={eventManagerStyles.sectionHeader}>Live</Text>

        <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('AccountDetails')}>
          <View style={eventManagerStyles.rowContainer}>
            <View style={accountStyles.row}>
              <Image
                style={eventManagerStyles.img}
                source={require('../../assets/doorman-event-img.png')}
              />
              <Text style={accountStyles.accountHeader}>Taylor Swift</Text>
            </View>
            <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
          </View>
        </TouchableHighlight>

        <Text style={[eventManagerStyles.sectionHeader, styles.marginTop]}>Upcoming</Text>

      </View>
    </ScrollView>
  );
}

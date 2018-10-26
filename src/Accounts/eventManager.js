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
          <View style={eventManagerStyles.cardContainer}>
            <View style={accountStyles.row}>
              <View style={eventManagerStyles.cardImageWrapper}>
                <Image
                  style={eventManagerStyles.cardImage}
                  source={require('../../assets/doorman-event-img-3.png')}
                />
              </View>
              <View style={[styles.paddingSmall, styles.flexColumnCenter]}>
                <View style={styles.flexRowSpaceBetween}>
                  <Text numberOfLines={1} style={styles.headerSecondary}>Taylor Swift</Text>
                  <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
                </View>
                <Text numberOfLines={1} style={eventManagerStyles.cardSubHeader}>Fox Theater &bull; Oakland, CA &bull; 6/15/18</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        <Text style={eventManagerStyles.sectionHeader}>Upcoming</Text>

        <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('AccountDetails')}>
          <View style={eventManagerStyles.cardContainer}>
            <View style={accountStyles.row}>
              <Image
                style={eventManagerStyles.cardImage}
                source={require('../../assets/doorman-event-img.png')}
              />
              <View style={[styles.paddingSmall, styles.flexColumnCenter]}>
                <View style={styles.flexRowSpaceBetween}>
                  <Text numberOfLines={1} style={styles.headerSecondary}>Childish Gambino</Text>
                  <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
                </View>
                <Text numberOfLines={1} style={eventManagerStyles.cardSubHeader}>Fox Theater &bull; Oakland, CA &bull; 6/15/18</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('AccountDetails')}>
          <View style={eventManagerStyles.cardContainer}>
            <View style={accountStyles.row}>
              <Image
                style={eventManagerStyles.cardImage}
                source={require('../../assets/doorman-event-img-2.png')}
              />
              <View style={[styles.paddingSmall, styles.flexColumnCenter]}>
                <View style={styles.flexRowSpaceBetween}>
                  <Text numberOfLines={1} style={styles.headerSecondary}>Taylor Swift</Text>
                  <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
                </View>
                <Text numberOfLines={1} style={eventManagerStyles.cardSubHeader}>Fox Theater &bull; Oakland, CA &bull; 6/15/18</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('AccountDetails')}>
          <View style={eventManagerStyles.cardContainer}>
            <View style={accountStyles.row}>
              <Image
                style={eventManagerStyles.cardImage}
                source={require('../../assets/doorman-event-img-4.png')}
              />
              <View style={eventManagerStyles.cardWrapper}>
                <View style={styles.flexRowSpaceBetween}>
                  <Text numberOfLines={1} style={styles.headerSecondary}>Childish Gambino</Text>
                  <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
                </View>
                <Text numberOfLines={1} style={eventManagerStyles.cardSubHeader}>Fox Theater &bull; Oakland, CA &bull; 6/15/18</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

      </View>
    </ScrollView>
  );
}

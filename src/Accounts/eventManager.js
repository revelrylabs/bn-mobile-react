import React from 'react';
import {Text, View, Image, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import EventManagerStyles from '../styles/account/eventManagerStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const eventManagerStyles = EventManagerStyles.createStyles()

// TODO: probably should make this a class component
export default function EventManager(props) {
  const {navigation: {navigate}, screenProps: {eventManager}} = props

  const scanForEvent = (event) => {
    return () => {
      eventManager.setState({eventToScan: event}, () => {navigate('EventScanner')});
    }
  }

  const EventCard = (event) => {
    return (
      <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={scanForEvent(event)} key={event.id}>
        <View style={eventManagerStyles.cardContainer}>
          <View style={eventManagerStyles.cardImageWrapper}>
            <Image
              style={eventManagerStyles.cardImage}
              source={require('../../assets/doorman-event-img-3.png')}
            />
          </View>
          <View style={eventManagerStyles.textWrapper}>
            <Text numberOfLines={1} style={styles.headerSecondary}>{event.name}</Text>
            <Text numberOfLines={1} style={eventManagerStyles.cardSubHeader}>{event.venue.name} &bull; {event.scheduleText}</Text>
          </View>
          <Icon style={[accountStyles.accountArrow, styles.paddingTop]} name="keyboard-arrow-right" />
        </View>
      </TouchableHighlight>
    )
  }

  const loadEvents = () => {
    const {screenProps: {eventManager}} = props;

    eventManager.getEvents();
  }
  // TODO: not sure if the NavigationEvents thing is the right way to get at this data
  return (
    <ScrollView style={styles.containerDark}>
      <NavigationEvents
        onWillFocus={loadEvents}
      />
      <View style={[styles.paddingVerticalMedium, styles.paddingHorizontal]}>

        <Text style={eventManagerStyles.sectionHeader}>Live</Text>
        {/* TODO: figure out how to differentiate live vs upcoming and perhaps scope events relevant to the doorman? */}
        {eventManager.events.map(EventCard)}

        {/* <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('EventScanner')}>
          <View style={eventManagerStyles.cardContainer}>
            <View style={eventManagerStyles.cardImageWrapper}>
              <Image
                style={eventManagerStyles.cardImage}
                source={require('../../assets/doorman-event-img-3.png')}
              />
            </View>
            <View style={eventManagerStyles.textWrapper}>
              <Text numberOfLines={1} style={styles.headerSecondary}>Taylor Swift</Text>
              <Text numberOfLines={1} style={eventManagerStyles.cardSubHeader}>Fox Theater &bull; Oakland, CA &bull; 6/15/18</Text>
            </View>
            <Icon style={[accountStyles.accountArrow, styles.paddingTop]} name="keyboard-arrow-right" />
          </View>
        </TouchableHighlight> */}

        <Text style={[eventManagerStyles.sectionHeader, styles.paddingTopSmall]}>Upcoming</Text>

        {/* <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('EventScanner')}>
          <View style={eventManagerStyles.cardContainer}>
            <View style={eventManagerStyles.cardImageWrapper}>
              <Image
                style={eventManagerStyles.cardImage}
                source={require('../../assets/doorman-event-img.png')}
              />
            </View>
            <View style={eventManagerStyles.textWrapper}>
              <Text numberOfLines={1} style={styles.headerSecondary}>Childishhhhhh Gambino</Text>
              <Text numberOfLines={1} style={eventManagerStyles.cardSubHeader}>The House of Blues &bull; New Orleans, LA &bull; 6/15/18</Text>
            </View>
            <Icon style={[accountStyles.accountArrow, styles.paddingTop]} name="keyboard-arrow-right" />
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('EventScanner')}>
          <View style={eventManagerStyles.cardContainer}>
            <View style={eventManagerStyles.cardImageWrapper}>
              <Image
                style={eventManagerStyles.cardImage}
                source={require('../../assets/doorman-event-img-2.png')}
              />
            </View>
            <View style={eventManagerStyles.textWrapper}>
              <Text numberOfLines={1} style={styles.headerSecondary}>Taylor Swift</Text>
              <Text numberOfLines={1} style={eventManagerStyles.cardSubHeader}>Fox Theater &bull; Oakland, CA &bull; 6/15/18</Text>
            </View>
            <Icon style={[accountStyles.accountArrow, styles.paddingTop]} name="keyboard-arrow-right" />
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('EventScanner')}>
          <View style={eventManagerStyles.cardContainer}>
            <View style={eventManagerStyles.cardImageWrapper}>
              <Image
                style={eventManagerStyles.cardImage}
                source={require('../../assets/doorman-event-img-4.png')}
              />
            </View>
            <View style={eventManagerStyles.textWrapper}>
              <Text numberOfLines={1} style={styles.headerSecondary}>Childish Gambino</Text>
              <Text numberOfLines={1} style={eventManagerStyles.cardSubHeader}>The House of Blues &bull; New Orleans, LA &bull; 6/15/18</Text>
            </View>
            <Icon style={[accountStyles.accountArrow, styles.paddingTop]} name="keyboard-arrow-right" />
          </View>
        </TouchableHighlight> */}

      </View>
    </ScrollView>
  );
}

import React from 'react';
import {Text, View, Image, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'

const styles = SharedStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()


export default function EventScanner(props) {
  const {navigation: {navigate}} = props

  return (
    <View>
      <View style={eventDetailsStyles.backArrowWrapper}>
        <View style={eventDetailsStyles.backArrowCircleContainer}>
          <Icon
            style={eventDetailsStyles.backArrow}
            name="close"
          />
        </View>
      </View>
    </View>
  );
}

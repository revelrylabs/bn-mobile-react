import React from 'react';
import {Text, View, Image, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'

const styles = SharedStyles.createStyles()


export default function EventScanner(props) {
  const {navigation: {navigate}} = props

  return (
    <ScrollView>
      <Text>All Guests</Text>
    </ScrollView>
  );
}

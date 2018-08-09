import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import FormStyles from '../styles/shared/formStyles'

const styles = SharedStyles.createStyles()
const formStyles = FormStyles.createStyles()

export default function EventsIndex() {
  return (
    <View style={styles.container}>

      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.header}>Explore</Text>
        <View style={styles.iconLinkContainer}>
          <Image
            style={styles.iconImageSmall}
            source={require('../../assets/heart-small.png')}
          />
          <Text style={styles.iconLinkText}>NYC</Text>
          <Icon style={styles.iconLink} name="keyboard-arrow-down" />
        </View>
      </View>

      <TextInput
        style={formStyles.input}
        placeholder="Search Artists, Shows, Venues"
        disabled
      />

      <Text style={styles.sectionHeader}>Hot This Week</Text>

    </View>
  );
}

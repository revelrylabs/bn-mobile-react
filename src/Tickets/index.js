import React from 'react';
import { StyleSheet, ScrollView, Text, Button, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import FormStyles from '../styles/shared/formStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventStyles from '../styles/shared/eventStyles'

const styles = SharedStyles.createStyles()
const formStyles = FormStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventStyles = EventStyles.createStyles()


export default function MyTickets(props) {
  const {navigation: {navigate}} = props

  return (
    <ScrollView style={styles.container}>

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



      <Button
        title="View Event Ticket"
        onPress={() => navigate("EventTicket")}
      />
    </ScrollView>
  );
}

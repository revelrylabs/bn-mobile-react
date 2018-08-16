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
    <ScrollView>

      <View style={styles.headerContainer}>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.header}>My Tickets</Text>
          <View style={styles.iconLinkContainer}>
            <Image
              style={styles.iconImage}
              source={require('../../assets/heart-large.png')}
            />
          </View>
        </View>
      </View>

      <View style={styles.containerDark}>
        <View style={styles.subnavContainer}>
          <Text style={styles.subnavHeaderActive}>Upcoming Events</Text>
          <Text style={styles.subnavHeader}>Past Events</Text>
        </View>
      </View>



      <Button
        title="View Event Ticket"
        onPress={() => navigate("EventTicket")}
      />
    </ScrollView>
  );
}

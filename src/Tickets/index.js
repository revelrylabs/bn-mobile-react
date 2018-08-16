import React from 'react';
import { StyleSheet, ScrollView, Text, Button, View, Image, TouchableHighlight } from 'react-native';
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

        <TouchableHighlight>
          <View style={eventStyles.eventContainer}>
            <Image
              style={eventStyles.eventImage}
              source={require('../../assets/ticket-event.png')}
            />

            <View style={eventStyles.detailsContainer}>
              <View style={eventStyles.sectionTop}>
                <View style={eventStyles.iconLinkCircleContainerSmall}>
                  <Icon style={eventStyles.iconLinkCircleSmall} name="local-activity" />
                  x 3
                </View>
              </View>
              <View style={eventStyles.sectionBottom}>
                <Text style={slideshowStyles.header}>Explosions In The Sky</Text>
                <Text style={slideshowStyles.details}>Fox Theater | Oakland, CA</Text>
              </View>
            </View>

            <View style={eventStyles.detailsContainerBottom}>
              <Text style={eventStyles.header}>Explosions in the Sky</Text>
              <Text style={eventStyles.details}>Fox Theater | Oakland, CA</Text>
            </View>
          </View>
        </TouchableHighlight>

      </View>



      <Button
        title="View Event Ticket"
        onPress={() => navigate("EventTicket")}
      />
    </ScrollView>
  );
}

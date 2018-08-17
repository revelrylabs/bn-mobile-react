import React from 'react';
import { StyleSheet, ScrollView, Text, Button, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import FormStyles from '../styles/shared/formStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventStyles from '../styles/shared/eventStyles'
import TicketStyles from '../styles/tickets/ticketStyles'

const styles = SharedStyles.createStyles()
const formStyles = FormStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventStyles = EventStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()


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
          <View style={ticketStyles.ticketContainer}>
            <Image
              style={eventStyles.eventImage}
              source={require('../../assets/ticket-event.png')}
            />
            <View style={ticketStyles.detailsContainer}>
              <View>
                <View style={styles.iconLinkContainer}>
                  <Icon style={ticketStyles.iconTicket} name="local-activity" />
                  <Text style={ticketStyles.iconTicketText}>x 3</Text>
                </View>
              </View>
              <View>
                <Text style={slideshowStyles.header}>Explosions In The Sky</Text>
                <Text style={slideshowStyles.details}>Fox Theater | Oakland, CA</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        <View style={ticketStyles.ticketContainerBottom}>
          <View style={ticketStyles.detailsContainerBottom}>
            <View>
              <Text style={ticketStyles.detailsBottomHeader}>DATE</Text>
              <Text style={ticketStyles.detailsBottomText}>Tue, July 21st</Text>
            </View>
            <View>
              <Text style={ticketStyles.detailsBottomHeader}>BEGINS</Text>
              <Text style={ticketStyles.detailsBottomText}>7:30pm</Text>
            </View>
            <View>
              <Text style={ticketStyles.detailsBottomHeader}>ENDS</Text>
              <Text style={ticketStyles.detailsBottomText}>12:30am</Text>
            </View>
          </View>
        </View>

      </View>



      <Button
        title="View Event Ticket"
        onPress={() => navigate("EventTicket")}
      />
    </ScrollView>
  );
}

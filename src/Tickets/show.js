import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventStyles from '../styles/shared/eventStyles'
import TicketStyles from '../styles/tickets/ticketStyles'
import TicketShowStyles from '../styles/tickets/ticketShowStyles'

const styles = SharedStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventStyles = EventStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()
const ticketShowStyles = TicketShowStyles.createStyles()

export default function EventsTicket() {
  return (
    <ScrollView>
      <View style={ticketShowStyles.modalContainer}>
        <Image
          style={ticketShowStyles.modalBkgdImage}
          source={require('../../assets/modal-bkgd.jpg')}
        />

        <View style={ticketShowStyles.closeModalContainer}>
          <Icon
            style={styles.iconLinkCircle}
            name="close"
            onPress={() => {
              this.props.navigation.goBack()
            }}
          />
          <Text style={ticketShowStyles.closeModalHeader}>Ticket 1 of 3</Text>
          <Text>&nbsp;</Text>
        </View>

        <View>
          <TouchableHighlight underlayColor="#F5F6F7" onPress={() => navigate('EventTicket')}>
            <View style={ticketStyles.ticketContainer}>
              <Image
                style={eventStyles.eventImage}
                source={require('../../assets/ticket-event-2.png')}
              />
              <View style={ticketStyles.detailsContainer}>
                <View>
                  <View style={styles.iconLinkContainer}>
                    <Image
                      style={styles.iconImage}
                      source={require('../../assets/heart-white.png')}
                    />
                  </View>
                </View>
                <View>
                  <Text style={slideshowStyles.header}>Tycho</Text>
                  <Text style={slideshowStyles.details}>July 27th • 7:30pm  •  The Fillmore SF</Text>
                  <View style={styles.iconLinkContainer}>
                    <Text style={ticketShowStyles.iconLinkText}>GET DIRECTIONS</Text>
                    <Icon style={ticketShowStyles.iconLink} name="call-made" />
                  </View>
                </View>
              </View>
            </View>
          </TouchableHighlight>
          <View style={ticketStyles.ticketContainerBottom}>
            <View style={ticketShowStyles.detailsContainerBottom}>
              <View style={ticketShowStyles.avatarContainer}>
                <Image
                  style={ticketShowStyles.avatar}
                  source={require('../../assets/avatar-female.png')}
                />
              </View>
              <View>
                <Text style={ticketStyles.detailsBottomText}>Anna Behrensmeyer</Text>
                <Text style={ticketStyles.detailsBottomHeader}>GENERAL ADMISSION</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={ticketShowStyles.qrCodeContainer}>
          <Image
            style={ticketShowStyles.qrCode}
            source={require('../../assets/qr-code-placeholder.png')}
          />
        </View>

        <View style={ticketShowStyles.bottomNav}>
          <View style={ticketShowStyles.bottomNavLinkContainer}>
            <Icon style={ticketShowStyles.iconLink} name="call-made" />
            <Text style={ticketShowStyles.iconLinkText}>ADD TO WALLET</Text>
          </View>
          <View style={ticketShowStyles.bottomNavLinkContainer}>
            <Icon style={ticketShowStyles.iconLink} name="call-made" />
            <Text style={ticketShowStyles.iconLinkText}>TRANSFER TICKET</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'

const styles = SharedStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()

export default function EventsShow() {
  return (
    <ScrollView>

      <View style={eventDetailsStyles.videoContainer}>
        <Image
          style={eventDetailsStyles.videoBkgd}
          source={require('../../assets/video-bkgd.png')}
        />
        <Image
          style={eventDetailsStyles.videoBkgd}
          source={require('../../assets/video-bkgd-overlay.png')}
        />

        <View style={eventDetailsStyles.detailsContainer}>
          <View style={eventDetailsStyles.sectionTop}>
            <Icon style={styles.iconLinkCircle} name="close" />

            <View style={styles.iconLinkCircleContainer}>
              <Icon style={styles.iconLinkCircle} name="star" />
            </View>

            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={require('../../assets/avatar-male.png')}
              />
              <Image
                style={styles.avatar}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
          </View>

          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('EventsShow', {name: 'Childish Gambino'})}>
            <View style={slideshowStyles.sectionBottom}>
              <Text style={slideshowStyles.header}>Taylor Swift</Text>
              <Text style={slideshowStyles.details}>Fri, July 20 - 8:50 pm - The Warfield</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>

      <View style={styles.container}>
      </View>

    </ScrollView>
  );
}

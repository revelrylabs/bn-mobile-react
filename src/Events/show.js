import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventDetailsStyles from '../styles/shared/eventDetailsStyles'

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

        <View style={slideshowStyles.detailsContainer}>
          <View style={slideshowStyles.sectionTop}>
            <View style={styles.iconLinkStarContainer}>
              <Icon style={styles.iconLinkStar} name="star" />
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

          <View style={slideshowStyles.sectionMiddle}>
            <Icon style={slideshowStyles.slideShowIconLinkLeft} name="keyboard-arrow-left" />
            <Icon style={slideshowStyles.slideShowIconLinkRight} name="keyboard-arrow-right" />
          </View>

          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('EventsShow', {name: 'Childish Gambino'})}>
            <View style={slideshowStyles.sectionBottom}>
              <View style={styles.priceTagContainer}>
                <Text style={styles.priceTag}>$30</Text>
              </View>
              <Text style={slideshowStyles.header}>Childish Gambino</Text>
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

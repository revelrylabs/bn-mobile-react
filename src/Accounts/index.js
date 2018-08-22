import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'
import AccountStyles from '../styles/account/accountStyles'

const styles = SharedStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()
const accountStyles = AccountStyles.createStyles()

export default function Account() {
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

        <View style={eventDetailsStyles.videoDetailsContainer}>

          <View style={eventDetailsStyles.sectionTop}>
            <Icon
              style={styles.iconLinkCircle}
              name="close"
              onPress={() => {
                this.props.navigation.goBack()
              }}
            />
            <View style={eventDetailsStyles.videoActionsContainer}>
              <View style={styles.iconLinkCircleContainer}>
                <Icon style={styles.iconLinkCircle} name="star" />
              </View>
              <View style={[styles.iconLinkCircleContainer, styles.marginTopSmall]}>
                <Icon style={styles.iconLinkCircle} name="reply" />
              </View>
            </View>
          </View>

          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
            <View style={eventDetailsStyles.sectionBottom}>
              <Icon style={eventDetailsStyles.iconPlayLink} name="play-circle-outline" />
              <Text style={eventDetailsStyles.header}>Taylor Swift</Text>
              <Text style={slideshowStyles.details}>Fri, July 20 - 8:50 pm - The Warfield</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    </ScrollView>
  );
}

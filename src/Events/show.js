import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Modal, ScrollView, Text, View, Image, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'
import ImageGridStyles from '../styles/event_details/imageGridStyles'

const styles = SharedStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()
const imageGridStyles = ImageGridStyles.createStyles()

export default class EventShow extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Modal
        onRequestClose={() => {
          this.props.navigation.goBack()
        }}
      >
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

          <View style={styles.container}>

            <View style={eventDetailsStyles.eventDetailsContainer}>
              <View style={[eventDetailsStyles.eventDetailsLeft, styles.borderRight]}>
                <Text style={eventDetailsStyles.sectionHeader}>People Going To This Event</Text>
                <View style={eventDetailsStyles.avatarContainer}>
                  <Image
                    style={styles.avatar}
                    source={require('../../assets/avatar-male.png')}
                  />
                  <Image
                    style={styles.avatar}
                    source={require('../../assets/avatar-female-2.png')}
                  />
                  <Image
                    style={styles.avatar}
                    source={require('../../assets/avatar-male-2.png')}
                  />
                  <Image
                    style={styles.avatar}
                    source={require('../../assets/avatar-female-3.png')}
                  />
                  <Image
                    style={styles.avatar}
                    source={require('../../assets/avatar-female.png')}
                  />
                </View>
              </View>
              <View style={eventDetailsStyles.eventDetailsRight}>
                <Text style={eventDetailsStyles.sectionHeader}>Tickets From</Text>
                <Text style={eventDetailsStyles.ticketPrice}>$30</Text>
              </View>
            </View>

            <View style={eventDetailsStyles.eventDescriptionContainer}>
              <Text style={eventDetailsStyles.sectionHeader}>Description</Text>
              <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in lacus non magna tincidunt lacinia. Donec ut quam nec sapien tempus luctus id quis magna.</Text>
            </View>


            <View style={eventDetailsStyles.iconSectionHeaderContainer}>
              <Image
                style={eventDetailsStyles.iconYoutube}
                source={require('../../assets/icon-youtube.png')}
              />
              <Text style={eventDetailsStyles.iconSectionHeader}>Youtube</Text>
            </View>

            <View style={eventDetailsStyles.videoContainer}>
              <Image
                style={eventDetailsStyles.videoBkgd}
                source={require('../../assets/video-youtube-bkgd.png')}
              />
              <Image
                style={eventDetailsStyles.videoBkgd}
                source={require('../../assets/video-bkgd-overlay.png')}
              />
              <Icon style={eventDetailsStyles.iconPlayLink} name="play-circle-outline" />
            </View>


            <View style={eventDetailsStyles.iconSectionHeaderContainer}>
              <Image
                style={eventDetailsStyles.iconInstagram}
                source={require('../../assets/icon-instagram.png')}
              />
              <Text style={eventDetailsStyles.iconSectionHeader}>Instagram</Text>
            </View>

            <View style={imageGridStyles.imageGridContainer}>
              <Image
                style={imageGridStyles.image}
                source={require('../../assets/image-grid-1.png')}
              />
              <Image
                style={imageGridStyles.image}
                source={require('../../assets/image-grid-2.png')}
              />
              <Image
                style={imageGridStyles.image}
                source={require('../../assets/image-grid-3.png')}
              />
            </View>
            <View style={imageGridStyles.imageGridContainer}>
              <Image
                style={imageGridStyles.image}
                source={require('../../assets/image-grid-1.png')}
              />
              <Image
                style={imageGridStyles.image}
                source={require('../../assets/image-grid-2.png')}
              />
              <Image
                style={imageGridStyles.image}
                source={require('../../assets/image-grid-3.png')}
              />
            </View>


            <View style={eventDetailsStyles.iconSectionHeaderContainer}>
              <Image
                style={eventDetailsStyles.iconSpotify}
                source={require('../../assets/icon-spotify.png')}
              />
              <Text style={eventDetailsStyles.iconSectionHeader}>Spotify</Text>
            </View>

            <View style={eventDetailsStyles.imagePlaceholderContainer}>
              <Image
                style={eventDetailsStyles.imagePlaceholder}
                source={require('../../assets/spotify-placeholder.png')}
              />
              <View style={eventDetailsStyles.sliderArrowContainer}>
                <Icon style={eventDetailsStyles.slideShowIconLinkLeft} name="keyboard-arrow-left" />
                <Icon style={eventDetailsStyles.slideShowIconLinkRight} name="keyboard-arrow-right" />
              </View>
            </View>

          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Tickets</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    )
  }
}

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

  state = {
    favorite: true,
  }

  toggleFavorite = (favorite) => {

    this.setState({favorite})
  }

  render() {
    const {favorite} = this.state

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
                  <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.toggleFavorite(!favorite)}>
                    <View style={favorite ? styles.iconLinkCircleContainer : styles.iconLinkCircleContainerActive}>
                      <Icon style={favorite ? styles.iconLinkCircle : styles.iconLinkCircleActive} name="star" />
                    </View>
                  </TouchableHighlight>
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

            <View style={[styles.flexRowSpaceBetween, styles.paddingTop]}>
              <View style={eventDetailsStyles.calendarWrapper}>
                <Text style={eventDetailsStyles.calendarMonth}>sept</Text>
                <Text style={eventDetailsStyles.calendarDate}>27</Text>
              </View>
              <View>
                <Text style={eventDetailsStyles.descriptionHeader}>The Taylor Swift Reputation Tour Concert</Text>
                <Text style={eventDetailsStyles.descriptionSubHeader}>By: Public Works</Text>
              </View>
            </View>

            <View style={[styles.flexRowSpaceBetween, styles.paddingVerticalSmall]}>
              <TouchableHighlight style={eventDetailsStyles.buttonRounded}>
                <View style={styles.flexRowCenter}>
                  <Icon style={eventDetailsStyles.buttonRoundedIcon} name="star" />
                  <Text style={eventDetailsStyles.buttonRoundedText}>I&apos;m Interested</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={eventDetailsStyles.buttonRounded}>
                <View style={styles.flexRowCenter}>
                  <Icon style={eventDetailsStyles.buttonRoundedIcon} name="reply" />
                  <Text style={eventDetailsStyles.buttonRoundedText}>Share Event</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={eventDetailsStyles.eventDetailsContainer}>
              <View style={eventDetailsStyles.eventDetailsLeft}>
                <View style={eventDetailsStyles.avatarContainer}>
                  <Image
                    style={eventDetailsStyles.avatar}
                    source={require('../../assets/avatar-male.png')}
                  />
                  <Image
                    style={eventDetailsStyles.avatar}
                    source={require('../../assets/avatar-female-2.png')}
                  />
                  <Image
                    style={eventDetailsStyles.avatar}
                    source={require('../../assets/avatar-male-2.png')}
                  />
                  <Image
                    style={eventDetailsStyles.avatar}
                    source={require('../../assets/avatar-female-3.png')}
                  />
                  <Image
                    style={eventDetailsStyles.avatar}
                    source={require('../../assets/avatar-female.png')}
                  />
                  <View style={eventDetailsStyles.attendeeContainer}>
                    <Text style={eventDetailsStyles.attendeeNumber}>+327</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={eventDetailsStyles.eventDescriptionContainer}>

              <View style={eventDetailsStyles.eventDescriptionHeaderWrapper}>
                <Icon style={eventDetailsStyles.iconEventDescription} name="access-time" />
                <Text style={eventDetailsStyles.sectionHeader}>TIME AND LOCATION</Text>
              </View>

              <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
                <Text style={[styles.linkText, styles.paddingLeft]}>The Warfield</Text>
              </TouchableHighlight>
              <Text style={eventDetailsStyles.bodyText}>
                982 Market St, San Fransisco, CA 94102, USA
              </Text>
              <Text style={[eventDetailsStyles.bodyText, styles.noPaddingBottom]}>
                Thursday, September 27, 2018
              </Text>
              <Text style={eventDetailsStyles.bodyText}>
                Doors 7:00 PM PDT - Show 8:00 PM PDT
              </Text>

              <View style={eventDetailsStyles.eventDescriptionHeaderWrapper}>
                <Icon style={eventDetailsStyles.iconEventDescription} name="person-outline" />
                <Text style={eventDetailsStyles.sectionHeader}>PERFORMING ARTISTS</Text>
              </View>
              <Text style={eventDetailsStyles.bodyText}>
                Taylor Swift, Kanye West, Drake, Beyonce, Ed Sheeran, Elton John, Eminem, Paul McCartney, Flordia Georgia Line, Coldplay, Maroon 5 and Carrie Underwood.
              </Text>

              <View style={eventDetailsStyles.eventDescriptionHeaderWrapper}>
                <Icon style={eventDetailsStyles.iconEventDescription} name="error-outline" />
                <Text style={eventDetailsStyles.sectionHeader}>AGE RESTRICTIONS</Text>
              </View>
              <Text style={eventDetailsStyles.bodyText}>
                This event is for all ages.
              </Text>

              <View style={eventDetailsStyles.eventDescriptionHeaderWrapper}>
                <Icon style={eventDetailsStyles.iconEventDescription} name="music-note" />
                <Text style={eventDetailsStyles.sectionHeader}>EVENT DESCRIPTION</Text>
              </View>
              <Text style={eventDetailsStyles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in lacus non magna tincidunt lacinia. Donec ut quam nec sapien tempus luctus id quis magna.</Text>

            </View>


            <View style={eventDetailsStyles.iconSectionHeaderContainer}>
              <Image
                style={eventDetailsStyles.iconYoutube}
                source={require('../../assets/icon-youtube.png')}
              />
              <Text style={eventDetailsStyles.iconSectionHeader}>YOUTUBE</Text>
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
              <Text style={eventDetailsStyles.iconSectionHeader}>INSTAGRAM</Text>
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
              <Text style={eventDetailsStyles.iconSectionHeader}>SPOTIFY</Text>
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
          <Text style={eventDetailsStyles.priceHeader}>$30 to $55</Text>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={eventDetailsStyles.buttonRoundedSecondary}
            >
              <Text style={styles.buttonText}>Get Tickets</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </Modal>
    )
  }
}

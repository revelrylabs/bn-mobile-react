import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {Text, View, Image, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'
import ImageGridStyles from '../styles/event_details/imageGridStyles'

const styles = SharedStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()
const imageGridStyles = ImageGridStyles.createStyles()

export default class Details extends Component {
  // static propTypes = {}

  render() {
    return (
      <View style={[styles.container, eventDetailsStyles.mainBody]}>
        <View style={eventDetailsStyles.mainBodyContent}>
          <Text style={eventDetailsStyles.descriptionSubHeader}>All star promoter events presents</Text>
          <View style={styles.flexRowSpaceBetween}>
            <View>
              <Text numberOfLines={2} style={eventDetailsStyles.descriptionHeader}>The Taylor Swift Reputation Tour Concert</Text>
            </View>
            <View style={eventDetailsStyles.calendarWrapper}>
              <Text style={eventDetailsStyles.calendarMonth}>sept</Text>
              <Text style={eventDetailsStyles.calendarDate}>27</Text>
            </View>
          </View>

          <View style={[styles.flexRowSpaceBetween, styles.paddingTop]}>
            <TouchableHighlight style={[eventDetailsStyles.buttonRounded, styles.marginRightTiny]}>
              <View style={styles.flexRowCenter}>
                <Icon style={eventDetailsStyles.buttonRoundedIcon} name="star" />
                <Text style={eventDetailsStyles.buttonRoundedText}>I&apos;m Interested</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[eventDetailsStyles.buttonRounded, styles.marginLeftTiny]}>
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

          <View style={eventDetailsStyles.youtubeVideoContainer}>
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
        <View style={eventDetailsStyles.spacerFooter} />
      </View>

    )
  }
}

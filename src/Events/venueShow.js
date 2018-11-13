import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'
import LoginStyles from '../styles/login/loginStyles'
import {LinearGradient} from 'expo'
import {DateTime} from 'luxon'
import {map} from 'lodash'

const styles = SharedStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()
const loginStyles = LoginStyles.createStyles()

/*  eslint-disable camelcase */

function toSentence(arr) {
  return arr.slice(0, -2).join(', ') +
    (arr.slice(0, -2).length ? ', ' : '') +
    arr.slice(-2).join(arr.length === 2 ? ' and ' : ', and ');
}

export default class VenueShow extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired,
  }

  get artistNames() {
    const {event: {artists}} = this.props

    if (artists.length === 0) {
      return null
    }

    return toSentence(map(artists, (eventArtist) => eventArtist.artist.name))
  }

  get ageLimit() {
    const {event: {age_limit}} = this.props

    if (age_limit) {
      return `You must be ${age_limit} to enter this event.`
    }

    return 'This event is for all ages.'
  }

  render() {
    const {event} = this.props
    const {venue} = event
    const eventStart = DateTime.fromISO(event.event_start)
    const doorTime = DateTime.fromISO(event.door_time)

    return (
      <View style={[styles.container, eventDetailsStyles.mainBody]}>
        <View style={eventDetailsStyles.mainBodyContent}>
          <View>
            <Text numberOfLines={2} style={eventDetailsStyles.descriptionHeader}>The Midway</Text>
            <Text style={eventDetailsStyles.descriptionSubHeader}>600 Marin St. San Fransisco, CA 94124</Text>
          </View>

          <View style={styles.paddingTop}>
            <TouchableHighlight style={loginStyles.buttonContainer} onPress={this.logIn}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#5491CC', '#9A68B2', '#E53D96']}
                style={loginStyles.button}
              >
                <Text style={loginStyles.buttonText}>Get Directions</Text>
              </LinearGradient>
            </TouchableHighlight>
          </View>

          <Text style={eventDetailsStyles.bodyText}>
            The Midway is a new, multifaceted creative complex, located in San Fransisco's burgeoning Dogpatch neighborhood. Equal parts creative laboratory...
          </Text>

          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
            <Text style={[styles.linkText, styles.paddingBottom]}>Read More</Text>
          </TouchableHighlight>

          <View style={eventDetailsStyles.eventDescriptionContainer}>
          
          </View>

        </View>
        <View style={eventDetailsStyles.spacerFooter} />
      </View>

    )
  }
}

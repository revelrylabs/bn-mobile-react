import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'
import {DateTime} from 'luxon'
import {map} from 'lodash'

const styles = SharedStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()

/*  eslint-disable camelcase */

function toSentence(arr) {
  return arr.slice(0, -2).join(', ') +
    (arr.slice(0, -2).length ? ', ' : '') +
    arr.slice(-2).join(arr.length === 2 ? ' and ' : ', and ');
}

export default class VenueShow extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  get topLineInfo() {
    const {event: {top_line_info}} = this.props

    if (top_line_info) {
      return <Text style={eventDetailsStyles.descriptionSubHeader}>{top_line_info}</Text>
    }

    return null
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
    const {navigation: {navigate}} = this.props

    return (
      <View style={[styles.container, eventDetailsStyles.mainBody]}>
        <View style={eventDetailsStyles.mainBodyContent}>
          {this.topLineInfo}
          <View style={styles.flexRowSpaceBetween}>
            <View>
              <Text numberOfLines={2} style={eventDetailsStyles.descriptionHeader}>{event.name}</Text>
            </View>
            <View style={eventDetailsStyles.calendarWrapper}>
              <Text style={eventDetailsStyles.calendarMonth}>{eventStart.toFormat('LLL')}</Text>
              <Text style={eventDetailsStyles.calendarDate}>{eventStart.toFormat('dd')}</Text>
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

          <View style={eventDetailsStyles.eventDescriptionContainer}>

            <View style={eventDetailsStyles.eventDescriptionHeaderWrapper}>
              <Icon style={eventDetailsStyles.iconEventDescription} name="access-time" />
              <Text style={eventDetailsStyles.sectionHeader}>TIME AND LOCATION</Text>
            </View>

            <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
              <Text style={[styles.linkText, styles.paddingLeft]}>{venue.name}</Text>
            </TouchableHighlight>
            <Text style={eventDetailsStyles.bodyText}>
              {venue.address}, {venue.city}, {venue.state} {venue.postal_code}, {venue.country}
            </Text>
            <Text style={[eventDetailsStyles.bodyText, styles.noPaddingBottom]}>
              {doorTime.toFormat('DDDD')}
            </Text>
            <Text style={eventDetailsStyles.bodyText}>
              Doors {doorTime.toFormat('t ZZZZ')} - Show {eventStart.toFormat('t ZZZZ')}
            </Text>

            <View style={eventDetailsStyles.eventDescriptionHeaderWrapper}>
              <Icon style={eventDetailsStyles.iconEventDescription} name="person-outline" />
              <Text style={eventDetailsStyles.sectionHeader}>PERFORMING ARTISTS</Text>
            </View>
            <Text style={eventDetailsStyles.bodyText}>
              {this.artistNames}
            </Text>

            <View style={eventDetailsStyles.eventDescriptionHeaderWrapper}>
              <Icon style={eventDetailsStyles.iconEventDescription} name="error-outline" />
              <Text style={eventDetailsStyles.sectionHeader}>AGE RESTRICTIONS</Text>
            </View>
            <Text style={eventDetailsStyles.bodyText}>
              {this.ageLimit}
            </Text>

            <View style={eventDetailsStyles.eventDescriptionHeaderWrapper}>
              <Icon style={eventDetailsStyles.iconEventDescription} name="music-note" />
              <Text style={eventDetailsStyles.sectionHeader}>EVENT DESCRIPTION</Text>
            </View>
            <Text style={eventDetailsStyles.bodyText}>
              {event.additional_info}
            </Text>

          </View>

        </View>
        <View style={eventDetailsStyles.spacerFooter} />
      </View>

    )
  }
}

import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import EventStyles from '../styles/shared/eventStyles'
import {flatMap, min} from 'lodash'
import {DateTime} from 'luxon'

const styles = SharedStyles.createStyles()
const eventStyles = EventStyles.createStyles()

export default class EventsIndex extends Component {
  static propTypes = {
    event: PropTypes.object,
    onPress: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = {
      favorite: props.event.favorite,
    }
  }

  setFavorite = (favorite) => {
    this.setState({favorite})
  }

  get lowestPrice() {
    const {event: {ticket_types}} = this.props
    const price_points = flatMap(ticket_types, (tt) => (
      flatMap(tt.price_points, (pp) => (pp.price_in_cents))
    ))

    return min(price_points) / 100
  }

  get scheduleText() {
    const {event} = this.props

    // @TODO: toISOString might not be required... a string might be returned, not a real js date
    const time = event.door_time instanceof Date ? event.door_time.toISOString() : event.door_time

    return DateTime.fromISO(time).toFormat('ccc, LLLL d')
  }

  render() {
    const {onPress, event} = this.props
    const {favorite} = this.state

    return (
      <TouchableHighlight underlayColor="#fff" onPress={onPress}>
        <View>

          <View style={eventStyles.eventContainer}>
            <Image
              style={eventStyles.eventImage}
              source={{uri: event.promo_image_url}}
            />
            <View style={eventStyles.detailsContainer}>
              <View style={eventStyles.sectionTop}>
                <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.setFavorite(!favorite)}>
                  <View style={favorite ? eventStyles.iconLinkCircleContainerSmallActive : eventStyles.iconLinkCircleContainerSmall}>
                    <Icon style={favorite ? eventStyles.iconLinkCircleSmallActive : eventStyles.iconLinkCircleSmall} name="star" />
                  </View>
                </TouchableHighlight>
                <View style={styles.avatarContainer}>
                  {
                    null //event.avatarImages.map((source, key) => <Image style={styles.avatarSmall} source={source} key={key} />)}
                  }
                </View>
              </View>
              <View style={styles.priceTagContainer}>
                <Text style={styles.priceTag}>${this.lowestPrice}</Text>
              </View>
            </View>
          </View>

          <View style={eventStyles.detailsContainerBottom}>
            <Text style={eventStyles.header}>{event.name}</Text>
            <Text style={eventStyles.details}>{this.scheduleText}</Text>
          </View>

        </View>
      </TouchableHighlight>
    )
  }
}

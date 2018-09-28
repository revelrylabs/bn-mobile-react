import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import EventStyles from '../styles/shared/eventStyles'

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

  render() {
    const {onPress, event} = this.props
    const {favorite} = this.state

    return (
      <TouchableHighlight underlayColor="#fff" onPress={onPress}>
        <View style={eventStyles.eventContainer}>
          <Image
            style={eventStyles.eventImage}
            source={event.bgImage}
          />

          <View style={eventStyles.detailsContainer}>
            <View style={eventStyles.sectionTop}>
              <TouchableHighlight onPress={() => this.setFavorite(!favorite)}>
                <View style={favorite ? eventStyles.iconLinkCircleContainerSmallActive : eventStyles.iconLinkCircleContainerSmall}>
                  <Icon style={favorite ? eventStyles.iconLinkCircleSmallActive : eventStyles.iconLinkCircleSmall} name="star" />
                </View>
              </TouchableHighlight>
              <View style={styles.avatarContainer}>
                {event.avatarImages.map((source, key) => <Image style={styles.avatarSmall} source={source} key={key} />)}
              </View>
            </View>
            <View style={eventStyles.sectionBottom}>
              <View style={styles.priceTagContainer}>
                <Text style={styles.priceTag}>${event.priceDollars}</Text>
              </View>
            </View>
          </View>

          <View style={eventStyles.detailsContainerBottom}>
            <Text style={eventStyles.header}>{event.titleText}</Text>
            <Text style={eventStyles.details}>{event.scheduleText}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

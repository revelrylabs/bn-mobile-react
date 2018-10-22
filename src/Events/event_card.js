import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import EventCardStyles from '../styles/shared/eventCardStyles'

const styles = SharedStyles.createStyles()
const eventCardStyles = EventCardStyles.createStyles()

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
        <View>

          <View style={eventCardStyles.eventContainer}>
            <Image
              style={eventCardStyles.eventImage}
              source={event.bgImage}
            />
            <View style={eventCardStyles.detailsContainer}>
              <View style={eventCardStyles.sectionTop}>
                <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.setFavorite(!favorite)}>
                  <View style={favorite ? eventCardStyles.iconLinkCircleContainerSmallActive : eventCardStyles.iconLinkCircleContainerSmall}>
                    <Icon style={favorite ? eventCardStyles.iconLinkCircleSmallActive : eventCardStyles.iconLinkCircleSmall} name="star" />
                  </View>
                </TouchableHighlight>
                <View style={styles.avatarContainer}>
                  {event.avatarImages.map((source, key) => <Image style={styles.avatarSmall} source={source} key={key} />)}
                </View>
              </View>
              <View style={styles.priceTagContainer}>
                <Text style={styles.priceTag}>${event.priceDollars}</Text>
              </View>
            </View>
          </View>

          <View style={eventCardStyles.detailsContainerBottom}>
            <Text style={eventCardStyles.header}>{event.titleText}</Text>
            <Text style={eventCardStyles.details}>{event.scheduleText}</Text>
          </View>

        </View>
      </TouchableHighlight>
    )
  }
}

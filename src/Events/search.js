import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableHighlight,
} from 'react-native'
import SharedStyles from '../styles/shared/sharedStyles'
import FormStyles from '../styles/shared/formStyles'

const styles = SharedStyles.createStyles()
const formStyles = FormStyles.createStyles()


function SuggestedSearches({searchText, events, navigate}) {

  if (searchText === '' || events.length === 0) {
    return null
  }

  const reducer = (names, event) => {
    names.push({eventId: event.id, id: event.id, name: event.name, event})
    event.artists.forEach(({artist}) => {
      if (artist.name.toLowerCase().includes(searchText.trim().toLowerCase())) {
        names.push({
          eventId: event.id,
          id: artist.id,
          name: artist.name,
          event,
        })
      }
    })

    if (
      event.venue.name.toLowerCase().includes(searchText.trim().toLowerCase())
    ) {
      names.push({
        eventId: event.id,
        id: event.venue.id,
        name: event.venue.name,
        event,
      })
    }

    return names
  }

  const sorter = (eventA, eventB) => {
    const nameA = eventA.name.toUpperCase() // ignore upper and lowercase
    const nameB = eventB.name.toUpperCase() // ignore upper and lowercase

    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  }

  const names = events.reduce(reducer, []).sort(sorter)

  return (
    <View>
      <Text style={styles.sectionHeader}>{'Suggested Searches'}</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={names.slice(0, 3)}
        renderItem={({item, separators}) => (
          <TouchableHighlight
            style={[styles.rowContainer, styles.paddingVerticalSmall]}
            onPress={() =>
              navigate('EventsShow', {eventId: item.eventId, event: item.event})
            }
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          >
            <View>
              <Text>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  )
}

export default class EventSearch extends Component {
  get events() {
    return this.props.store.state.events
  }

  searchEvents = () => {
    if (this.props.store.state.query.length >= 3) {
      this.props.store.getEvents(true)
    }
  }

  updateSearchText = async (text) => {
    await this.props.store.setQuery(text)
    console.log("STATE", this.props.store.state);

    this.searchEvents()
  }

  render() {
    const {query} = this.props.store.state

    return (
      <View>
        <View style={formStyles.searchContainer}>
          <Image
            style={formStyles.searchIcon}
            source={require('../../assets/icon-search.png')}
          />
          <TextInput
            style={formStyles.searchInput}
            placeholder="Search artists, shows, venues..."
            searchIcon={{size: 24}}
            underlineColorAndroid="transparent"
            onChangeText={this.updateSearchText}
          />
        </View>

        {query !== '' && (
          <SuggestedSearches
            searchText={query}
            events={this.events}
            navigate={this.props.navigate}
          />
        )}

        {query !== '' && (
          <Text style={styles.sectionHeader}>
            {`Search Results for "${query}"`}
          </Text>
        )}
      </View>
    )
  }
}

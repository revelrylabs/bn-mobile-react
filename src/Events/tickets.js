import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight, ScrollView} from 'react-native'
import SharedStyles from '../styles/shared/sharedStyles'

const styles = SharedStyles.createStyles()

export default class GetTickets extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.header}>Ticket Type</Text>
          </View>
        </View>  
      </ScrollView>
    )
  }
}

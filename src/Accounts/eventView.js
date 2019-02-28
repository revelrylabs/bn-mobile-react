import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, Image, ScrollView, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {NavigationEvents} from 'react-navigation'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import qrCodeIcon from '../../assets/qr-code-small.png'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()

export default class EventView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const {
      props: {
        navigation: {navigate},
      },
    } = this

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerDark}
      >
        <View style={accountStyles.accountBkgdContainer}>
          <View style={styles.paddingVerticalMedium}>
            <TouchableHighlight
              underlayColor="rgba(0, 0, 0, 0)"
              onPress={() => navigate('EventScanner')}
            >
              <View style={accountStyles.rowContainer}>
                <View style={accountStyles.row}>
                  <Icon style={accountStyles.accountIcon} name="crop-free" />
                  <Text style={accountStyles.accountHeader}>Scan Tickets</Text>
                </View>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="rgba(0, 0, 0, 0)"
              onPress={() => navigate('Notifications')}
            >
              <View style={accountStyles.rowContainer}>
                <View style={accountStyles.row}>
                  <Text style={accountStyles.accountHeader}>Lists</Text>
                </View>
                <Icon
                  style={accountStyles.accountArrow}
                  name="keyboard-arrow-right"
                />
              </View>
            </TouchableHighlight>
            <View style={accountStyles.rowContainer}>
              <View style={accountStyles.row}>
                <Text style={accountStyles.accountHeader}>Lists</Text>
              </View>
            </View>

            <TouchableHighlight
              underlayColor="rgba(0, 0, 0, 0)"
              onPress={() => navigate('Notifications')}
            >
              <View style={accountStyles.rowContainer}>
                <View style={accountStyles.row}>
                  <Text style={accountStyles.accountHeader}>Users</Text>
                </View>
                <Icon
                  style={accountStyles.accountArrow}
                  name="keyboard-arrow-right"
                />
              </View>
            </TouchableHighlight>
            <View style={accountStyles.rowContainer}>
              <View style={accountStyles.row}>
                <Text style={accountStyles.accountHeader}>Users</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

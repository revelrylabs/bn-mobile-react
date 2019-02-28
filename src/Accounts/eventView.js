import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, ScrollView, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()

function Inventory() {
  return <></>
}

function ScanTickets({navigate}) {
  return (
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
  )
}

ScanTickets.propTypes = {
  navigate: PropTypes.func.isRequired,
}

function Lists({navigate}) {
  return (
    <>
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
    </>
  )
}

Lists.propTypes = {
  navigate: PropTypes.func.isRequired,
}

function Users({navigate}) {
  return (
    <>
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
    </>
  )
}

Users.propTypes = {
  navigate: PropTypes.func.isRequired,
}
export default class EventView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    screenProps: PropTypes.object.isRequired,
  }

  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.title}`,
  })

  constructor(props) {
    super(props)
  }

  render() {
    const {
      navigation: {navigate},
      screenProps: {
        eventManager: {
          state: {eventToScan},
        },
      },
    } = this.props

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerDark}
      >
        <View style={(styles.paddingVerticalMedium, styles.paddingHorizontal)}>
          <View style={styles.paddingVerticalMedium}>
            <Inventory />
            <ScanTickets navigate={navigate} event={eventToScan} />
            <Lists navigate={navigate} event={eventToScan} />
            <Users navigate={navigate} event={eventToScan} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image, ScrollView, TouchableHighlight} from 'react-native';
import {BarCodeScanner, Permissions} from 'expo';
import Icon from 'react-native-vector-icons/MaterialIcons'

import SharedStyles from '../styles/shared/sharedStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'
import EventScannerStyles from '../styles/account/eventScannerStyles'
import TicketWalletStyles from '../styles/tickets/ticketWalletStyles'

const styles = SharedStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()
const eventScannerStyles = EventScannerStyles.createStyles()
const ticketWalletStyles = TicketWalletStyles.createStyles()

function delay(time) {
  return new Promise(((resolve, _reject) => {
    setTimeout(() => resolve(), time);
  }));
}

export default class EventScanner extends Component {
  static propTypes = {
    onScan: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  state = {
    hasCameraPermission: null,
    read: null,
  }

  async componentWillMount() {
    const {status} = await Permissions.askAsync(Permissions.CAMERA)

    this.setState({hasCameraPermission: status === 'granted'})
  }

  debounce = false;

  handleBarCodeScanned = async ({_type, data}) => {
    const {onScan} = () => {}// this.props;

    await delay(500);

    if (this.state.read === data) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.setState({read: null})
        Vibration.vibrate(0.5);
      }, 1500);
      return;
    }
    this.setState({read: data});

    onScan(data, this);
  }

  render() {
    const {hasCameraPermission} = this.state
    const {navigation: {navigate}} = this.props

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View>
        <BarCodeScanner
          onBarCodeRead={this.handleBarCodeScanned}
          style={{position: 'absolute', top: 0, height: '100%', width: '100%'}}
        />

        <View style={eventScannerStyles.eventScannerContainer}>

          <View style={[eventScannerStyles.headerActionsWrapper, styles.flexRowSpaceBetween]}>
            <View style={eventDetailsStyles.backArrowCircleContainer}>
              <Icon
                style={eventDetailsStyles.backArrow}
                name="close"
                onPress={() => {
                  navigate('ManageEvents')
                }}
              />
            </View>
            <TouchableHighlight style={eventScannerStyles.pillContainer}>
              <View style={styles.flexRowCenter}>
                <Text style={[eventScannerStyles.pillTextWhite, styles.marginRightTiny]}>Check-in Mode:</Text>
                <Text style={eventScannerStyles.pillTextPrimary}>Manual</Text>
              </View>
            </TouchableHighlight>
            <Text>&nbsp; &nbsp; &nbsp;</Text>
          </View>

          <View>
            <View style={eventScannerStyles.headerActionsWrapper}>
              <View style={[eventScannerStyles.pillContainer, styles.marginBottom]}>
                <View style={styles.flexRowFlexStartCenter}>
                  <View style={ticketWalletStyles.avatarContainer}>
                    <Image
                      style={ticketWalletStyles.avatar}
                      source={require('../../assets/avatar-female.png')}
                    />
                  </View>
                  <View>
                    <Text style={eventScannerStyles.pillTextWhite}>Anna Behrensmeyer</Text>
                    <Text style={eventScannerStyles.pillTextSubheader}>General Admission</Text>
                  </View>
                  <Icon style={eventScannerStyles.checkIcon} name="check-circle" />
                </View>
              </View>
            </View>

            <ScrollView>
              <View style={eventScannerStyles.mainBody}>
                <View style={[eventDetailsStyles.mainBodyContent, styles.paddingBottomLarge]}>
                  <View style={styles.flexRowSpaceBetween}>
                    <Text numberOfLines={2} style={eventScannerStyles.descriptionHeader}>All Guests</Text>
                    <Icon style={eventScannerStyles.arrowUpIcon} name="arrow-upward" />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>

      </View>
    )
  }
}

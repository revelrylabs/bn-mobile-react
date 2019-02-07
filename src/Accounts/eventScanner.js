import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableHighlight} from 'react-native';
import {BarCodeScanner, Permissions} from 'expo';
import {
  MaterialIcons,
  EvilIcons,
} from '@expo/vector-icons'
import SharedStyles from '../styles/shared/sharedStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'
import EventScannerStyles from '../styles/account/eventScannerStyles'
import ManualCheckin from './guest-list-checkin'

const styles = SharedStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()
const eventScannerStyles = EventScannerStyles.createStyles()

function delay(time) {
  return new Promise(((resolve, _reject) => {
    setTimeout(() => resolve(), time);
  }));
}

const SCAN_ALERT_CONFIG = {
  success: {
    text: 'Ticket valid!',
    icon: 'check',
    style: eventScannerStyles.messageIconSuccess,
  },
  alreadyRedeemed: {
    text: 'Already redeemed.',
    icon: 'close-o',
    style: eventScannerStyles.messageIconCancel,
  },
  error: {
    icon: 'exclamation',
    style: eventScannerStyles.messageIconError,
  }
}

function getStatusAlertConfig(error) {
  if (!error) {
    return SCAN_ALERT_CONFIG.success
  }

  if (error.response) {
    const text = error.response.data.error

    if (text === 'Ticket has already been redeemed.') {
      return SCAN_ALERT_CONFIG.alreadyRedeemed
    }

    return {...SCAN_ALERT_CONFIG.error, text}
  }

  if (error.name === 'SyntaxError') {
    return {...SCAN_ALERT_CONFIG.error, text: 'QR code is not valid.'}
  }

  const {message} = error

  if (message === 'missing_redeem_key') {
    return {
      ...SCAN_ALERT_CONFIG.error,
      text: 'The guest may have pulled their tickets up before the doors were supposed to open. If the doors are open now, have them close and re-open their tickets list.',
    }
  }

  return {...SCAN_ALERT_CONFIG.error, text: error.message}
}

// TODO: this should probably use eventToScan state (see eventManager and
// eventManagerStateProvider) to validate tickets against currently selected event
export default class EventScanner extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    screenProps: PropTypes.object.isRequired,
  }

  state = {
    hasCameraPermission: null,
    read: null,
    checkInMode: 'automatic',
  }

  async componentWillMount() {
    const {status} = await Permissions.askAsync(Permissions.CAMERA)

    this.setState({hasCameraPermission: status === 'granted'})
  }

  debounce = false;

  // TODO: switch scan handler based on mode (or perhaps just remove scanner in manual mode?)
  handleBarCodeScanned = async ({_type, data}) => {
    const {screenProps: {eventManager}} = this.props;

    await delay(500);

    if (this.state.read === data) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.setState({read: null})
      }, 1500);
      return;
    }
    this.setState({read: data});

    await eventManager.redeem(data);
  }

  get statusMessage() {
    const {scanned, scanError} = this.props.screenProps.eventManager.state

    if (!scanned) {
      return null
    }

    const {text, icon, style} = getStatusAlertConfig(scanError)

    return (
      <View style={eventScannerStyles.messageContainer}>
        <EvilIcons style={style} name={icon} />
        <Text style={eventScannerStyles.messageText}>{text}</Text>
      </View>
    )
  }

  get event() {
    return this.props.screenProps.eventManager.state.eventToScan
  }

  toggleCheckInMode = async () => {
    let {checkInMode} = this.state

    checkInMode = checkInMode === 'automatic' ? 'manual' : 'automatic'

    this.setState({checkInMode})

    if (checkInMode === 'automatic') {
      return
    }
  }

  render() {
    const {hasCameraPermission, checkInMode} = this.state;
    const {navigation: {navigate}, screenProps: {eventManager}} = this.props;
    const {scanResult} = eventManager.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View>
        {checkInMode === 'automatic' && (
          <BarCodeScanner
            onBarCodeRead={this.handleBarCodeScanned}
            style={{position: 'absolute', top: 0, height: '100%', width: '100%'}}
          />
        )}

        <View style={eventScannerStyles.eventScannerContainer}>

          <View style={[eventScannerStyles.headerActionsWrapper, styles.flexRowSpaceBetween]}>
            <View style={eventDetailsStyles.backArrowCircleContainer}>
              <MaterialIcons
                style={eventDetailsStyles.backArrow}
                name="close"
                onPress={() => {
                  navigate('ManageEvents')
                }}
              />
            </View>
            {/* TODO: add a bit of state for auto/manual modes and a toggle handler */}
            <TouchableHighlight style={eventScannerStyles.pillContainer} onPress={this.toggleCheckInMode}>
              <View style={styles.flexRowCenter}>
                <Text style={[eventScannerStyles.pillTextWhite, styles.marginRightTiny]}>Check-in Mode:</Text>
                <Text style={eventScannerStyles.pillTextPrimary}>{checkInMode.toUpperCase()}</Text>
              </View>
            </TouchableHighlight>
            <Text>&nbsp; &nbsp; &nbsp;</Text>
          </View>

          {this.statusMessage}

          {checkInMode === 'manual' && (
            <ManualCheckin {...eventManager.state} searchGuestList={eventManager.searchGuestList} />
          )}

          {/* TODO: fill in guest info panel, remove whitespace style workaround */}
          <View>
            <Text>&nbsp; &nbsp; &nbsp;</Text>
          </View>
          <View>
            {/* <View style={eventScannerStyles.headerActionsWrapper}>
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
                  <MaterialIcons style={eventScannerStyles.checkIcon} name="check-circle" />
                </View>
              </View>
            </View>
          */}
            <TouchableHighlight style={eventScannerStyles.mainBody} onPress={() => navigate('GuestList')}>
              <View style={[eventDetailsStyles.mainBodyContent, styles.paddingBottomLarge]}>
                <View style={styles.flexRowSpaceBetween}>
                  <Text numberOfLines={2} style={eventScannerStyles.descriptionHeader}>All Guests</Text>
                  <MaterialIcons style={eventScannerStyles.arrowUpIcon} name="keyboard-arrow-right" />
                </View>
              </View>
            </TouchableHighlight>
          </View>

        </View>

      </View>
    )
  }
}

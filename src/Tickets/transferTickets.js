import React, {Component} from 'react';
import {PropTypes} from 'prop-types'
import {Modal, ScrollView, Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import TicketWalletStyles from '../styles/tickets/ticketWalletStyles'
import ModalStyles from '../styles/shared/modalStyles'

const styles = SharedStyles.createStyles()
const ticketWalletStyles = TicketWalletStyles.createStyles()
const modalStyles = ModalStyles.createStyles()

export default class TransferTickets extends Component {

  render() {

    return (
      <View style={ticketWalletStyles.modalContainer}>
        <Image
          style={ticketWalletStyles.modalBkgdImage}
          source={require('../../assets/modal-bkgd.jpg')}
        />
        <View style={ticketWalletStyles.closeModalContainer}>
          <Icon
            style={styles.iconLinkCircle}
            name="close"
            onPress={() => {
              navigation.goBack()
            }}
          />
        </View>

        <View style={modalStyles.contentRoundedWrapper}>
          <Text style={modalStyles.headerSecondary}>Select the ticket(s) you want to transfer</Text>
          <View style={ticketWalletStyles.qrCodeContainer}>
            <Image
              style={ticketWalletStyles.qrCode}
              source={require('../../assets/qr-code-placeholder.png')}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableHighlight style={[styles.button, modalStyles.bottomRadius]}>
              <Text style={styles.buttonText}>Transfer 2 Tickets..</Text>
            </TouchableHighlight>
          </View>
        </View>

      </View>
    )
  }
}

TransferTickets.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
}

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
      <ScrollView>
        <View style={ticketWalletStyles.modalContainer}>
          <Image
            style={ticketWalletStyles.modalBkgdImage}
            source={require('../../assets/modal-bkgd.jpg')}
          />
          <View>
            <View style={ticketWalletStyles.closeModalContainer}>
              <Icon
                style={styles.iconLinkCircle}
                name="close"
                onPress={() => {
                  navigation.goBack()
                }}
              />
            </View>
          </View>

          <View style={modalStyles.contentWrapper}>

            <View style={ticketWalletStyles.qrCodeContainer}>
              <Image
                style={ticketWalletStyles.qrCode}
                source={require('../../assets/qr-code-placeholder.png')}
              />
            </View>

            <View style={ticketWalletStyles.bottomNav}>
              <View style={[ticketWalletStyles.bottomNavLinkContainer, styles.borderRight]}>
                <Icon style={ticketWalletStyles.bottomNavIcon} name="account-balance-wallet" />
                <Text style={ticketWalletStyles.bottomNavLinkText}>ADD TO WALLET</Text>
              </View>
              <TouchableHighlight>
                <View style={ticketWalletStyles.bottomNavLinkContainer}>
                  <Text style={ticketWalletStyles.bottomNavLinkText}>TRANSFER TICKET</Text>
                  <Icon style={ticketWalletStyles.bottomNavIcon} name="launch" />
                </View>
              </TouchableHighlight>
            </View>

          </View>

        </View>
      </ScrollView>
    )
  }
}

TransferTickets.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
}

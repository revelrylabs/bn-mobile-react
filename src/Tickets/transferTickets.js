import React, {Component} from 'react';
import {PropTypes} from 'prop-types'
import {Modal, ScrollView, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import TicketWalletStyles from '../styles/tickets/ticketWalletStyles'

const styles = SharedStyles.createStyles()
const ticketWalletStyles = TicketWalletStyles.createStyles()

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

        </View>
      </ScrollView>
    )
  }
}

TransferTickets.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
}

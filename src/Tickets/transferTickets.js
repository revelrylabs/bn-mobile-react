import React, {Component} from 'react';
import {PropTypes} from 'prop-types'
import {Modal, ScrollView, Text, View, Image, TouchableHighlight} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import TicketStyles from '../styles/tickets/ticketStyles'
import TicketWalletStyles from '../styles/tickets/ticketWalletStyles'
import TicketTransferStyles from '../styles/tickets/ticketTransferStyles'
import ModalStyles from '../styles/shared/modalStyles'

const styles = SharedStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()
const ticketWalletStyles = TicketWalletStyles.createStyles()
const ticketTransferStyles = TicketTransferStyles.createStyles()
const modalStyles = ModalStyles.createStyles()

var radio_props = [
  {value: 0 },
];

export default class TransferTickets extends Component {

  render() {

    return (
      <Modal
        animationType="slide"
        transparent
      >
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
            <ScrollView>

              <Text style={modalStyles.headerSecondary}>Select the ticket(s) you want to transfer</Text>

              <View style={styles.flexRowCenter}>
                <View style={ticketTransferStyles.cardContainer}>
                  <View style={styles.flexRowFlexStart}>
                    <RadioForm
                      radio_props={radio_props}
                      initial={0}
                      formHorizontal={false}
                      labelHorizontal={true}
                      buttonColor={'#FF20B1'}
                      selectedButtonColor={'#FF20B1'}
                      buttonOuterColor={'#EBEBEB'}
                      buttonSize={15}
                      buttonOuterSize={30}
                      isSelected={true}
                      animation={true}
                      onPress={(value) => {this.setState({value:value})}}
                    />
                    <View>
                      <Text style={ticketStyles.ticketHolderHeader}>Anna Behrensmeyer</Text>
                      <Text style={ticketStyles.ticketHolderSubheader}>GENERAL ADMISSION</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={ticketTransferStyles.cardContainer}>
                <View style={styles.flexRowFlexStart}>
                  <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#FF20B1'}
                    selectedButtonColor={'#FF20B1'}
                    buttonOuterColor={'#EBEBEB'}
                    buttonSize={15}
                    buttonOuterSize={30}
                    isSelected={true}
                    animation={true}
                    onPress={(value) => {this.setState({value:value})}}
                  />
                  <View>
                    <Text style={ticketStyles.ticketHolderHeader}>Anna Behrensmeyer</Text>
                    <Text style={ticketStyles.ticketHolderSubheader}>GENERAL ADMISSION</Text>
                  </View>
                </View>
              </View>

              <View style={ticketTransferStyles.cardContainer}>
                <View style={styles.flexRowFlexStart}>
                  <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#FF20B1'}
                    selectedButtonColor={'#FF20B1'}
                    buttonOuterColor={'#EBEBEB'}
                    buttonSize={15}
                    buttonOuterSize={30}
                    isSelected={true}
                    animation={true}
                    onPress={(value) => {this.setState({value:value})}}
                  />
                  <View>
                    <Text style={ticketStyles.ticketHolderHeader}>Brittany Gay</Text>
                    <Text style={ticketStyles.ticketHolderSubheader}>GENERAL ADMISSION</Text>
                  </View>
                </View>
              </View>

              <View style={ticketTransferStyles.cardContainer}>
                <View style={styles.flexRowFlexStart}>
                  <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#FF20B1'}
                    selectedButtonColor={'#FF20B1'}
                    buttonOuterColor={'#EBEBEB'}
                    buttonSize={15}
                    buttonOuterSize={30}
                    isSelected={true}
                    animation={true}
                    onPress={(value) => {this.setState({value:value})}}
                  />
                  <View style={ticketStyles.ticketHolderWrapper}>
                    <Text numberOfLines={1} style={ticketStyles.ticketHolderHeader}>Alexandra ReallyLongLastName</Text>
                    <Text style={ticketStyles.ticketHolderSubheader}>GENERAL ADMISSION</Text>
                  </View>
                </View>
              </View>

              <View style={ticketTransferStyles.cardContainer}>
                <View style={styles.flexRowFlexStart}>
                  <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#FF20B1'}
                    selectedButtonColor={'#FF20B1'}
                    buttonOuterColor={'#EBEBEB'}
                    buttonSize={15}
                    buttonOuterSize={30}
                    isSelected={true}
                    animation={true}
                    onPress={(value) => {this.setState({value:value})}}
                  />
                  <View>
                    <Text style={ticketStyles.ticketHolderHeader}>Anna Behrensmeyer</Text>
                    <Text style={ticketStyles.ticketHolderSubheader}>GENERAL ADMISSION</Text>
                  </View>
                </View>
              </View>

              <View style={ticketTransferStyles.cardContainer}>
                <View style={styles.flexRowFlexStart}>
                  <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#FF20B1'}
                    selectedButtonColor={'#FF20B1'}
                    buttonOuterColor={'#EBEBEB'}
                    buttonSize={15}
                    buttonOuterSize={30}
                    isSelected={true}
                    animation={true}
                    onPress={(value) => {this.setState({value:value})}}
                  />
                  <View>
                    <Text style={ticketStyles.ticketHolderHeader}>Anna Behrensmeyer</Text>
                    <Text style={ticketStyles.ticketHolderSubheader}>GENERAL ADMISSION</Text>
                  </View>
                </View>
              </View>

            </ScrollView>
          </View>

          <View style={[styles.buttonContainer, styles.marginHorizontal]}>
            <TouchableHighlight style={[styles.button, modalStyles.bottomRadius]}>
              <Text style={styles.buttonText}>Transfer 2 Tickets..</Text>
            </TouchableHighlight>
          </View>

        </View>
      </Modal>
    )
  }
}

TransferTickets.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
}

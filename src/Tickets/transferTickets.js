import React, {Component} from 'react';
import {PropTypes} from 'prop-types'
import {Modal, ScrollView, Text, View, Image, TouchableHighlight} from 'react-native';
// TODO: delete the radio imports
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CircleCheckBox from 'react-native-circle-checkbox'
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

// TODO: delete this when done comparing checkbox to radio button
var radio_props = [
  {value: -1 },
];

export default class TransferTickets extends Component {
  constructor(props) {
    super(props)
    this.toggleCheck = this.toggleCheck.bind(this);

    this.state = {
      checkboxes: this.buildCheckBoxState(props.tickets)
    };
  }

  // this is made up ticket data that will need to be restructured and renamed
  // for real data
  static defaultProps = {
    tickets: [
      {id: 1, label: 'Anna Behrensmeyer', type: 'GENERAL ADMISSION'},
      // {id: 2, label: 'Anna Behrensmeyer', type: 'GENERAL ADMISSION'},
      // {id: 3, label: 'Brittany Gay', type: 'GENERAL ADMISSION'},
      // {id: 4, label: 'Alexandra ReallyLongLastName', type: 'GENERAL ADMISSION'},
    ],
  }

  buildCheckBoxState(tickets) {
    return tickets.reduce((acc, ticket) => {
      return {
        ...acc,
        [ticket.id]: false,
      };
    }, {});
  }

  toggleCheck(id) {
    return (checked) => {
      this.setState({checkboxes: {[id]: checked}});
    }
  }

  renderCheckBox(checked, ticket) {
    return (
      <View style={styles.flexRowCenter} key={ticket.id}>
        <View style={ticketTransferStyles.cardContainer}>
          <View style={styles.flexRowFlexStart}>
            <View>
              <CircleCheckBox
                checked={checked}
                onToggle={this.toggleCheck(ticket.id)}
                innerColor="#FF20B1"
                outerColor="#FF20B1"
                innerSize={15}
                outerSize={29}
              />
              <Text style={ticketStyles.ticketHolderHeader}>{ticket.label}</Text>
              <Text style={ticketStyles.ticketHolderSubheader}>{ticket.type}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  render() {
    const {navigation, tickets} = this.props
    const {checkboxes} = this.state

    return (
      <Modal>
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

              {tickets.map((ticket) => {
                return this.renderCheckBox(checkboxes[ticket.id], ticket)
              })}

              {/* // TODO: delete this old markup, just here for comparing old/new button for style purposes */}
              <View style={styles.flexRowCenter}>
                <View style={ticketTransferStyles.cardContainer}>
                  <View style={styles.flexRowFlexStart}>
                    <RadioForm
                      radio_props={radio_props}
                      initial={-1}
                      formHorizontal={false}
                      labelHorizontal={true}
                      buttonColor={'#FF20B1'}
                      selectedButtonColor={'#FF20B1'}
                      buttonOuterColor={'#EBEBEB'}
                      buttonSize={15}
                      buttonOuterSize={30}
                      isSelected={false}
                      onPress={(value) => {this.setState({value:value})}}
                    />
                    <View>
                      <Text style={ticketStyles.ticketHolderHeader}>Anna Behrensmeyer</Text>
                      <Text style={ticketStyles.ticketHolderSubheader}>GENERAL ADMISSION</Text>
                    </View>
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

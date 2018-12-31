import React, {Component} from 'react';
import {PropTypes} from 'prop-types'
import {Modal, ScrollView, Text, View, Image, TouchableHighlight} from 'react-native';
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


export default class TransferTickets extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checkboxes: this.buildCheckBoxState(this.tickets),
    };
  }

  get tickets() {
    const {
      navigation: {state: {params: {eventId}}},
      screenProps: {store: {ticketsForEvent}},
    } = this.props

    return ticketsForEvent(eventId).tickets
  }

  get firstName() {
    const {navigation: {state: {params: {firstName}}}} = this.props

    return firstName
  }

  get lastName() {
    const {navigation: {state: {params: {lastName}}}} = this.props

    return lastName
  }

  get label() {
    return `${this.firstName} ${this.lastName}`
  }

  buildCheckBoxState(tickets) {
    return tickets.reduce((acc, ticket) => {
      return {
        ...acc,
        [ticket.id]: false,
      };
    }, {});
  }

  get transferTickets() {
    const {checkboxes} = this.state
    const keys = Object.keys(checkboxes);

    return keys.filter((key) => checkboxes[key]);
  }

  toggleCheck = (id) => {
    return (checked) => {
      const {checkboxes} = this.state

      this.setState({checkboxes: {...checkboxes, [id]: checked}});
    }
  }

  transferCount = () => {
    const {checkboxes} = this.state

    return Object.keys(checkboxes).reduce((acc, id) => {
      if (checkboxes[id]) {
        return acc += 1
      }
      return acc
    }, 0)
  }

  renderCheckBox(checked, ticket) {
    return (
      <View style={styles.flexRowCenter} key={ticket.id}>
        <View style={ticketTransferStyles.cardContainer}>
          <View style={styles.flexRowFlexStart}>
            <CircleCheckBox
              checked={checked}
              onToggle={this.toggleCheck(ticket.id)}
              innerColor="#FF20B1"
              outerColor="#FF20B1"
              innerSize={15}
              outerSize={29}
              styleCheckboxContainer={styles.marginRight}
            />
            <View>
              <Text style={ticketStyles.ticketHolderHeader}>{this.label}</Text>
              <Text style={ticketStyles.ticketHolderSubheader}>{ticket.ticket_type_name}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  render() {
    const {navigation} = this.props
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
            <ScrollView showsVerticalScrollIndicator={false}>

              <Text style={modalStyles.headerSecondary}>Select the ticket(s) you want to transfer</Text>

              {this.tickets.map((ticket) => {
                return this.renderCheckBox(checkboxes[ticket.id], ticket)
              })}

            </ScrollView>
          </View>

          <View style={[styles.buttonContainer, styles.marginHorizontal]}>
            <TouchableHighlight style={[styles.button, modalStyles.bottomRadius]}>
              <Text style={styles.buttonText}>Transfer {this.transferCount()} Tickets..</Text>
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

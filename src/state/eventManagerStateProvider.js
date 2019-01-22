import {Container} from 'unstated'
import {server, apiErrorAlert, defaultEventSort} from '../constants/Server'
import * as vibe from '../vibe'

const SCAN_MESSAGE_TIMEOUT = 3000;

/* eslint-disable camelcase,space-before-function-paren */
export class EventManagerContainer extends Container {
  constructor(props = {}) {
    super(props);

    this.state = {
      loggedIn: false,
      statusMessage: '',
      statusIcon: '',
      ticketInfo: {},
      scanType: 'redeem',
      scanResult: null,
      events: [],
      eventToScan: {},
      guests: [],
      isFetchingGuests: false,
    }
  }

  get events() {
    return this.state.events
  }

  // TODO: filter by live vs upcoming?
  getEvents = async () => {
    try {

      const {data} = await server.events.index(defaultEventSort)

      this.setState({
        // lastUpdate: DateTime.local(),
        events: data.data,
        paging: data.paging,
      })
    } catch (error) {
      apiErrorAlert(error)
    }
  }

  scanForEvent = async (event) => {
    this.setState({eventToScan: event, guests: []});
  }

  prepareManualMode = async () => {
    await this.setState({isFetchingGuests: true})

    const {id} = this.state.eventToScan
    const {data: {data: guests, paging: _paging}} = await server.events.guests.index({event_id: id, query: ''})

    // Still fetching for the same event ID as when we started? (Nobody changed it yet?)
    if (this.state.eventToScan.id === id) {
      await this.setState({guests, isFetchingGuests: false})
    }
  }

  _transfer = async () => {
    try {

      const _result = await server.tickets.transfer.receive(this.state.ticketInfo);

      this.setState({scanType: '', statusMessage: 'Successfully Transferred', ticketInfo: {}});
    } catch (e) {
      this.setState({statusMessage: e.message || 'Error From Server', ticketInfo: {}});
    }
  };

  _resetScanResult = () => {
    setTimeout(() => {
      this.setState({scanResult: null});
    }, SCAN_MESSAGE_TIMEOUT)
  }

  redeem = async (json) => {
    const event_id = this.state.eventToScan.id

    let ticket = null
    try {
      ticket = JSON.parse(json)
    } catch (_e) {
      vibe.sad()
      return await this.setState({scanResult: 'serverError', ticketInfo: {}}, this._resetScanResult)
    }

    try {

      await server.events.tickets.redeem({
        event_id,
        ticket_id: ticket.data.id,
        redeem_key: ticket.data.redeem_key,
      })
      await this.setState({scanResult: 'success'}, this._resetScanResult)
      vibe.happy()
    } catch (e) {
      vibe.sad()
      if (!e.response) {
        throw e
      }

      const {error} = e.response.data

      switch (error) {
      case 'Ticket has already been redeemed.':
        return await this.setState({scanResult: 'alreadyRedeemed'}, this._resetScanResult)
      default:
        return await this.setState({scanResult: 'serverError', ticketInfo: {}}, this._resetScanResult)
      }
    }
  }
}

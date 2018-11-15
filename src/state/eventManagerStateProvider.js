import {Container} from 'unstated'
import {server} from '../constants/Server'
const SCAN_MESSAGES = {
  success: 'Ticket valid!',
  alreadyRedeemed: 'Already redeemed',
  serverError: 'We found an issue',
};
const SCAN_MESSAGE_TIMEOUT = 3000;
/* eslint-disable camelcase,space-before-function-paren, complexity */
class EventManagerContainer extends Container {
  constructor(props = {}) {
    super(props);

    this.state = {
      loggedIn: false,
      statusMessage: '',
      statusIcon: '',
      ticketInfo: {},
      scanType: 'redeem',
      events: [],
      eventToScan: {},
    }
  }

  get events() {
    return this.state.events
  }

  // TODO: filter by live vs upcoming?
  getEvents = async () => {
    const {data} = await server.events.index()

    this.setState({
      // lastUpdate: DateTime.local(),
      events: data.data,
      paging: data.paging,
    })
  }

  _transfer = async () => {
    try {
      const _result = await server.tickets.transfer.receive(this.state.ticketInfo);

      this.setState({scanType: '', statusMessage: 'Successfully Transferred', ticketInfo: {}});
    } catch (e) {
      this.setState({statusMessage: e.message || 'Error From Server', ticketInfo: {}});
    }
  };

  _resetStatusMessage = () => {
    setTimeout(() => {
      this.setState({statusMessage: ''});
    }, SCAN_MESSAGE_TIMEOUT)
  }

  _redeem = async (ticket, scanner) => {
    let message;
    try {
      const result = await server.tickets.redeem.redeem({
        ticket_id: ticket.data.id,
        redeem_key: ticket.data.redeem_key,
      });

      if (result.data.success) {
        // Redeemed
        message = SCAN_MESSAGES['success'];
      } else {
        // TODO: this is a general error message, not server; not sure if we should
        // cover it up w/ "already redeemed," but that's only thing I've seen so far
        message = SCAN_MESSAGES['alreadyRedeemed'];
      }

      this.setState({statusMessage: message, ticketInfo: {}}, this._resetStatusMessage);
    } catch (e) {
      message = SCAN_MESSAGES['serverError']
      this.setState({statusMessage: message || 'Error From Server', ticketInfo: {}}, this._resetStatusMessage);
    }

  };

  _handleScan = async (data, _scanner) => {
    // data = `{"type": 0, "data": {"redeem_key": "5ACQYCAUU", "id":"784b4dc9-9457-44be-8773-88d978a610b8", "extra": ""}}`;
    this.setState({statusMessage: '', statusIcon: ''});
    try {
      const scanData = JSON.parse(data);

      if (scanData.type === 0) {
        // Redeem
        const result = await server.tickets.redeem.read({
          ticket_id: scanData.data.id,
          redeem_key: scanData.data.redeem_key,
        })

        this.setState({scanType: 'redeem', ticketInfo: result.data});
        if (this.state.ticketInfo.status !== 'Purchased') {
          this.setState({statusMessage: 'This ticket has already been redeemed', statusIcon: 'md-warning'})
        }
      } else if (scanData.type === 1) {
        // Transfer
        this.setState({scanType: 'transfer', ticketInfo: scanData.data});
        // let result = await server.tickets.transfer.transfer(data);
        // this.setState({ticketInfo: result.data});
        // if (this.state.ticketInfo.status !== "Purchased") {
        // 	this.setState({statusMessage: "This ticket has already been redeemed", statusIcon: "md-warning"})
        // }
      }
    } catch (e) {
      // alert(e);
    }
  }
}

export {
  EventManagerContainer,
}

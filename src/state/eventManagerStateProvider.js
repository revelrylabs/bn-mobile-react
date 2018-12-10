import {Container} from 'unstated'
import {server} from '../constants/Server'

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

  _redeem = async () => {
    try {
      const result = await server.tickets.redeem.redeem({
        ticket_id: this.state.ticketInfo.id,
        redeem_key: this.state.ticketInfo.redeem_key,
      });
      let message;

      if (result.data.success) {
        // Redeemed
        message = 'Checked In';
      } else {
        message = result.data.message;
      }

      this.setState({statusMessage: message, ticketInfo: {}});
    } catch (e) {
      this.setState({statusMessage: e.message || 'Error From Server', ticketInfo: {}});
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

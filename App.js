import { Component, createElement } from 'react'
import { loadFonts } from './assets/fonts'
import navigator from './src/navigator'

export default class App extends Component {
  state = {
    isReady: false,
  }

  async componentDidMount() {
    await loadFonts()
    this.setState({ isReady: true })
  }

  render() {
    return this.state.isReady ? createElement(navigator) : null
  }
}

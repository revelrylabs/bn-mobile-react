const startTime = new Date().getTime()

import React, {Component, createElement} from 'react'
import {Provider} from 'unstated'
import {loadAssets, splashVideo, loadSplashVideo} from './assets'
import {View} from 'react-native'
import {Video} from 'expo'
import navigator from './src/navigators/navigator'
import {loadContainers} from './src/state'
import SharedStyles from './src/styles/shared/sharedStyles'
import {analyticsInit} from './src/constants/analytics'

const styles = SharedStyles.createStyles()

function Splash({onFinish}) {
  let didFinishOnce = false
  const onPlaybackStatusUpdate = ({didJustFinish}) => {
    if (!didFinishOnce && didJustFinish) {
      onFinish()
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Video
        style={styles.splashVideo}
        source={splashVideo}
        resizeMode="cover"
        shouldPlay
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
    </View>
  )
}

function Main({containers}) {
  return (
    <Provider inject={containers}>
      {createElement(navigator)}
    </Provider>
  )
}

export default class App extends Component {
  state = {
    splash: false,
    assets: false,
    navigator: false,
    containers: null,
    isSplashFinished: false,
  }

  componentDidMount() {
    analyticsInit()
    this.playSplash()
    this.loadAssets()
    this.loadContainers()
  }

  async playSplash() {
    this.setState({splash: await loadSplashVideo()})
  }

  async loadAssets() {
    this.setState({assets: await loadAssets()})
  }

  async loadContainers() {
    this.setState({containers: await loadContainers()})
  }

  get isReadyForSplash() {
    return !!this.state.splash
  }

  get isReadyForMain() {
    return this.state.isSplashFinished
      && this.state.assets
      && this.state.containers
  }

  render() {
    if (this.isReadyForMain) {
      return <Main containers={this.state.containers} />
    }

    if (this.isReadyForSplash) {
      console.log(new Date().getTime() - startTime)
      return <Splash onFinish={() => this.setState({isSplashFinished: true})} />
    }

    return null
  }
}

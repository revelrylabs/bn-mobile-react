import React, {Component, createElement} from 'react'
import {loadFonts} from './assets/fonts'
import {View} from 'react-native';
import {Video, Asset, AppLoading} from 'expo';
import navigator from './src/navigator'
import SharedStyles from './src/styles/shared/sharedStyles'

const styles = SharedStyles.createStyles()


export default class App extends Component {
  state = {
    isAppReady: false,
    isSplashReady: false,
    isSplashDone: false,
  }

  _cacheSplashResourcesAsync = async () => { // eslint-disable-line space-before-function-paren
    const video = require('./splash.mp4')

    return Asset.fromModule(video).downloadAsync()
  }

  _cacheResourcesAsync = async () => { // eslint-disable-line space-before-function-paren
    setTimeout(() => {
      this.setState({isSplashDone: true});
    }, 3000);
    await loadFonts()
    this.setState({isAppReady: true});
  }

  // eslint-disable-next-line complexity
  render() {
    if (!this.state.isSplashReady) {
      return (
        <AppLoading
          startAsync={this._cacheSplashResourcesAsync}
          onFinish={() => this.setState({isSplashReady: true})}
          onError={console.warn} // eslint-disable-line no-console
          autoHideSplash={false}
        />
      )
    }

    if (!this.state.isAppReady || !this.state.isSplashDone) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Video
            style={styles.splashVideo}
            source={require('./splash.mp4')}
            onLoad={this._cacheResourcesAsync}
            resizeMode="cover"
            shouldPlay
          />
        </View>
      );
    }

    return createElement(navigator)
  }
}

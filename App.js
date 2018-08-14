import { Component, createElement } from 'react'
import { loadFonts } from './assets/fonts'
import navigator from './src/navigator'
import Video from 'react-native-video';
import Splash from './splash.mp4';
import SharedStyles from './src/styles/shared/sharedStyles'

const styles = SharedStyles.createStyles()


export default class App extends Component {
  state = {
    isReady: false,
  }

  async componentDidMount() {
    await loadFonts()
    this.setState({ isReady: true })
  }

  render() {
    return this.state.isReady ? createElement(navigator) : null; (
      <View style={styles.container}>
        <Video style={styles.splashVideo} source={Splash}
          ref={(ref) => {
           this.player.presentFullscreenPlayer();
          }}
          resizeMode="cover"
          paused={false}
          style={styles.splashVideo}
        />
      </View>
    );
  }
}

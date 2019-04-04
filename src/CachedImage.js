import {FileSystem} from 'expo'
import React, {Component} from 'react'
import {Image} from 'react-native'
import {apiErrorAlert} from './constants/Server'

export default class CachedImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      source: null,
    }
  }

  componentDidMount() {
    this.handleImageCaching()
  }

  async handleImageCaching() {
    const {source} = this.props

    try {
      if (source.uri.startsWith('http')) {
        const splitURI = source.uri.split('/')
        const lastURIPart = splitURI[splitURI.length - 1]
        const fileSystemVersion = `${FileSystem.cacheDirectory}${lastURIPart}`

        const fileInfo = await FileSystem.getInfoAsync(fileSystemVersion, {})

        if (fileInfo.exists === false) {
          await FileSystem.downloadAsync(source.uri, fileSystemVersion)
        }

        this.setState({source: {uri: fileSystemVersion}})
      }
    } catch (e) {
      apiErrorAlert(e)
      this.setState({source})
    }
  }

  render() {
    const {_source, ...rest} = this.props

    if (this.state.source === null) {
      return <Image {...rest} />
    }

    return <Image {...rest} source={this.state.source} />
  }
}

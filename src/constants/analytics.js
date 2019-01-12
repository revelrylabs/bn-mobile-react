import {Segment} from 'expo'
import {Platform} from 'react-native'
import {iosWriteKey, androidWriteKey} from './config';

export function analyticsInit() {
  Segment.initialize({androidWriteKey, iosWriteKey})
}

export async function identify(params) {
  const {id, ...properties} = params

  if (Platform.OS === 'ios') {
    Segment.identifyWithTraits(id, ...properties)
  } else {
    // Quick Android hack. Check if this is fixed in SDK 31.
    Segment.identify(id)
  }

}

export function track(action) {
  Segment.track(action)
}


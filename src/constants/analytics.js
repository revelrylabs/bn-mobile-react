import {Segment} from 'expo'
import {iosWriteKey, androidWriteKey} from './config';

export function analyticsInit() {
  Segment.initialize({androidWriteKey, iosWriteKey})
}

export async function identify(params) {
  const {id, ...properties} = params

  Segment.identifyWithTraits(id, ...properties)
}

export function track(action) {
  Segment.track(action)
}


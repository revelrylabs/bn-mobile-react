import {DateTime} from 'luxon'

const DEFAULT_TIME_ZONE = 'America/Los_Angeles'

export function eventDateTimes({door_time, event_start, venue: {timezone}}) {
  const zone = timezone || DEFAULT_TIME_ZONE
  const toDateTime = (iso) => DateTime.fromISO(iso, {zone})
  
  return {
    door_time: toDateTime(door_time),
    event_start: toDateTime(event_start),
  }
}

export function eventIsInPast({event_start}) {
  return DateTime.fromISO(event_start) < DateTime.local()
}

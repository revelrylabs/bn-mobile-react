import {DateTime} from 'luxon'

const DEFAULT_TIME_ZONE = 'America/Los_Angeles'
const EVENT_LENGTH_IN_HOURS = 6

export function eventDateTimes({door_time, event_start, event_end}) {
  const toDateTime = iso =>
    iso ? DateTime.fromRFC2822(iso, {setZone: true}) : null

  return {
    door_time: toDateTime(door_time),
    event_start: toDateTime(event_start),
    event_end: toDateTime(event_end),
  }
}

export function eventIsInPast(event) {
  // if we have an event end, use that
  // otherwise add EVENT_LENGTH_IN_HOURS to start time
  const end_time = event.event_end
    ? event.event_end
    : DateTime.fromISO(event.event_start)
        .plus({hours: EVENT_LENGTH_IN_HOURS})
        .toISO()

  return DateTime.fromISO(end_time) < DateTime.local()
}

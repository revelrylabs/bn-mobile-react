import {DateTime} from 'luxon'

const DEFAULT_TIME_ZONE = 'America/Los_Angeles'

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
  const end_time = event.event_end
    ? event.event_end
    : DateTime.fromISO(event.event_start)
        .plus({hours: 6})
        .toISO()

  return DateTime.fromISO(end_time) < DateTime.local()
}

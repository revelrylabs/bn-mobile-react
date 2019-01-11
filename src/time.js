import {DateTime} from 'luxon'

const DEFAULT_TIME_ZONE = 'America/Los_Angeles'

export function eventDateTimes({door_time, event_start, event_end}) {
  const toDateTime = (iso) => DateTime.fromISO(iso, {setZone: true})

  console.log("TIMEEEE:", door_time, toDateTime(door_time).invalidReason);
  

  return {
    door_time: toDateTime(door_time),
    event_start: toDateTime(event_start),
    event_end: toDateTime(event_end),
  }
}

export function eventIsInPast({event_start}) {
  return DateTime.fromISO(event_start) < DateTime.local()
}

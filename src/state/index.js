import {EventsContainer} from './eventStateProvider'
import {TicketsContainer} from './ticketStateProvider'
import {CartContainer} from './cartStateProvider'
import {AuthContainer} from './authStateProvider'

export async function loadContainers() {
  const CONTAINERS = {}

  function add(key, klass, ...args) {
    CONTAINERS[key] = new klass(...args)
    CONTAINERS[key].containers = CONTAINERS
  }
  
  add('events', EventsContainer)
  add('tickets', TicketsContainer)
  add('cart', CartContainer)
  add('auth', AuthContainer)
  
  return Object.keys(CONTAINERS).map((key) => CONTAINERS[key])
}

import Bigneon from 'bn-api-node';

/* eslint-disable camelcase */
const MOCK_VENUES = [
  {
    address: '123 main St',
    city: 'San Francisco',
    country: 'US',
    created_at: new Date('2018-10-18T15:00:33'),
    id: '3',
    is_private: false,
    latitude: 30.0,
    longitude: -90.0,
    maximum_capacity: 300,
    modified_at: new Date('2018-10-18T15:00:33'),
    name: 'The Cool Venue Place',
    organization_id: null,
    phone: '555-555-1234',
    postal_code: '12345',
    region_id: null,
    state: 'CA',
  }
]

const MOCK_TT_EV1 = [
  {
    created_at: new Date('2018-10-18T15:00:33'),
    description: 'These tickets are so fancy you wouldnt even believe',
    end_date: new Date('2018-10-22T15:00:33'),
    event_id: '22',
    id: '1',
    increment: 1,
    limit: 5,
    name: 'Fancy Tickets',
    price_points: [
      {
        created_at: new Date('2018-10-18T15:00:33'),
        description: 'Early bird pricing',
        end_date: new Date('2018-10-22T15:00:33'),
        id: '1',
        name: 'Early Bird Fancy Tickets',
        price_in_cents: 10000,
        start_date: new Date('2018-10-18T15:00:33'),
        ticket_type_id: '1',
        updated_at: new Date('2018-10-18T15:00:33'),
      },
    ],
    quantity: 50,
    start_date: new Date('2018-10-18T15:00:33'),
    updated_at: new Date('2018-10-18T15:00:33'),
  },
  {
    created_at: new Date('2018-10-18T15:00:33'),
    description: 'These tickets are so normal you wouldnt even believe',
    end_date: new Date('2018-10-22T15:00:33'),
    event_id: '22',
    id: '2',
    increment: 1,
    limit: 10,
    name: 'Normal Tickets',
    price_points: [
      {
        created_at: new Date('2018-10-18T15:00:33'),
        description: 'Early bird pricing',
        end_date: new Date('2018-10-22T15:00:33'),
        id: '2',
        name: 'Early Bird Normal Tickets',
        price_in_cents: 5000,
        start_date: new Date('2018-10-18T15:00:33'),
        ticket_type_id: '2',
        updated_at: new Date('2018-10-18T15:00:33'),
      },
      {
        created_at: new Date('2018-10-18T15:00:33'),
        description: 'Normal pricing',
        end_date: new Date('2018-10-22T15:00:33'),
        id: '44',
        name: 'Normal Tickets',
        price_in_cents: 6000,
        start_date: new Date('2018-10-18T15:00:33'),
        ticket_type_id: '2',
        updated_at: new Date('2018-10-18T15:00:33'),
      },
    ],
    quantity: 200,
    start_date: new Date('2018-10-18T15:00:33'),
    updated_at: new Date('2018-10-18T15:00:33'),
  }
]

const MOCK_TT_EV2 = [
  {
    created_at: new Date('2018-10-18T15:00:33'),
    description: 'These tickets are so fancy you wouldnt even believe',
    end_date: new Date('2018-10-22T15:00:33'),
    event_id: '23',
    id: '3',
    increment: 1,
    limit: 5,
    name: 'Fancy Tickets',
    price_points: [
      {
        created_at: new Date('2018-10-18T15:00:33'),
        description: 'Early bird pricing',
        end_date: new Date('2018-10-22T15:00:33'),
        id: '3',
        name: 'Early Bird Fancy Tickets',
        price_in_cents: 10000,
        start_date: new Date('2018-10-18T15:00:33'),
        ticket_type_id: '3',
        updated_at: new Date('2018-10-18T15:00:33'),
      },
    ],
    quantity: 50,
    start_date: new Date('2018-10-18T15:00:33'),
    updated_at: new Date('2018-10-18T15:00:33'),
  },
  {
    created_at: new Date('2018-10-18T15:00:33'),
    description: 'These tickets are so normal you wouldnt even believe',
    end_date: new Date('2018-10-22T15:00:33'),
    event_id: '23',
    id: '4',
    increment: 1,
    limit: 10,
    name: 'Normal Tickets',
    price_points: [
      {
        created_at: new Date('2018-10-18T15:00:33'),
        description: 'Early bird pricing',
        end_date: new Date('2018-10-22T15:00:33'),
        id: '4',
        name: 'Early Bird Normal Tickets',
        price_in_cents: 5000,
        start_date: new Date('2018-10-18T15:00:33'),
        ticket_type_id: '4',
        updated_at: new Date('2018-10-18T15:00:33'),
      },
    ],
    quantity: 200,
    start_date: new Date('2018-10-18T15:00:33'),
    updated_at: new Date('2018-10-18T15:00:33'),
  }
]

const MOCK_EVENTS = [
  {
    additional_info: 'This is additional info',
    age_limit: 21,
    artists: [
      {
        artist_id: '1',
        created_at: new Date('2018-10-18T15:00:33'),
        event_id: '22',
        id: '1',
        rank: 5,
        set_time: new Date('2018-10-24T19:30:33'),
        updated_at: new Date('2018-10-18T15:00:33'),
      },
      {
        artist_id: '2',
        created_at: new Date('2018-10-18T15:00:33'),
        event_id: '22',
        id: '2',
        rank: 6,
        set_time: new Date('2018-10-24T20:30:33'),
        updated_at: new Date('2018-10-18T15:00:33'),
      }
    ],
    created_at: '2018-10-18 03:33:33',
    door_time: new Date('2018-10-24T18:00:00'),
    event_start: new Date('2018-10-24T19:00:00'),
    id: '22',
    name: 'Arcade Fire',
    organization: null,
    organization_id: '3',
    promo_image_url: 'https://res.cloudinary.com/bigneon-dev/image/upload/v1537952849/bigneon/euw1rhumwq4jvfoia51f.jpg',
    publish_date: new Date('2018-10-21T18:00:00'),
    status: 'Published',
    ticket_types: MOCK_TT_EV1,
    top_line_info: '',
    total_interest: 80,
    user_is_interested: true,
    venue: MOCK_VENUES[0],
    venue_id: '3',
  },
  {
    additional_info: 'This is additional info',
    age_limit: 18,
    artists: [
      {
        artist_id: '3',
        created_at: new Date('2018-10-18T15:00:33'),
        event_id: '23',
        id: '3',
        rank: 9,
        set_time: new Date('2018-10-24T19:30:33'),
        updated_at: new Date('2018-10-18T15:00:33'),
      },
      {
        artist_id: '4',
        created_at: new Date('2018-10-18T15:00:33'),
        event_id: '23',
        id: '4',
        rank: 16,
        set_time: new Date('2018-10-24T20:30:33'),
        updated_at: new Date('2018-10-18T15:00:33'),
      }
    ],
    created_at: '2018-10-18 03:33:33',
    door_time: new Date('2018-10-31T18:00:00'),
    event_start: new Date('2018-10-31T19:00:00'),
    id: '23',
    name: 'Sufjan Stevens',
    organization: null,
    organization_id: '3',
    promo_image_url: 'https://res.cloudinary.com/bigneon-dev/image/upload/v1537953516/bigneon/ksxxzgt72s6o6dphlmf4.jpg',
    publish_date: new Date('2018-10-21T18:00:00'),
    status: 'Published',
    ticket_types: MOCK_TT_EV2,
    top_line_info: '',
    total_interest: 80,
    user_is_interested: true,
    venue: MOCK_VENUES[0],
    venue_id: '3',
  }
]

const mocker = new Bigneon.Mocker({
  'events.index': {
    data: {
      data: {
        data: MOCK_EVENTS,
        paging: {
          dir: 'ASC',
          limit: 20,
          page: 1,
          sort: 'DATE',
          tags: [],
          total: 2,
        },
      },
    },
    reject: false,
  },
})

export default mocker

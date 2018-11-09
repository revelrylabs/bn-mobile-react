import Bigneon from 'bn-api-node'
import mocker from './mocker'

export const server = new Bigneon.Server({prefix: 'https://staging.bigneon.com/api'}, {}, mocker)

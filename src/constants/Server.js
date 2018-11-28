import Bigneon from 'bn-api-node'
import mocker from './mocker'

const basicAuthUsername = 'bigneon1';
const basicAuthPassword = 'tar1';

if ((typeof basicAuthUsername === 'string' && !basicAuthUsername) || (typeof basicAuthPassword === 'string' && !basicAuthPassword)) {
  throw Error('Server.js - basicAuthUsername and basicAuthPassword must either be undefined or a valid string');
}
const authString = basicAuthUsername || basicAuthPassword ? `${basicAuthUsername}:${basicAuthPassword}@` : '';


export const BASE_URL = `https://${authString}staging.bigneon.com`;

export const server = new Bigneon.Server({prefix: `${BASE_URL}/api`})// , {}, mocker)

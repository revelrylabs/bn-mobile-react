import Bigneon from 'bn-api-node'
import mocker from './mocker'

let basicAuthUsername = '';
let basicAuthPassword = '';

if ((typeof basicAuthUsername === 'string' && !basicAuthUsername) || (typeof basicAuthPassword === 'string' && !basicAuthPassword)) {
	throw Error('Server.js - basicAuthUsername and basicAuthPassword must either be undefined or a valid string');
}
let auth_string = basicAuthUsername || basicAuthPassword ? `${basicAuthUsername}:${basicAuthPassword}@` : '';


export const BASE_URL = `https://${auth_string}staging.bigneon.com`;

export const server = new Bigneon.Server({prefix: `${BASE_URL}/api`})//, {}, mocker)

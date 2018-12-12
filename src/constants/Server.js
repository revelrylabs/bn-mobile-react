import Bigneon from 'bn-api-node'
import {AsyncStorage} from 'react-native'
import mocker from './mocker'

const basicAuthUsername = 'bigneon1';
const basicAuthPassword = 'tar1';

if ((typeof basicAuthUsername === 'string' && !basicAuthUsername) || (typeof basicAuthPassword === 'string' && !basicAuthPassword)) {
  throw Error('Server.js - basicAuthUsername and basicAuthPassword must either be undefined or a valid string');
}
const authString = basicAuthUsername || basicAuthPassword ? `${basicAuthUsername}:${basicAuthPassword}@` : '';

export const BASE_URL = `https://${authString}staging.bigneon.com`;

/* eslint-disable complexity */
export function apiErrorAlert(error, defaultMsg = 'There was a problem.') {
  console.log(defaultMsg, error); // eslint-disable-line no-console

  let message = defaultMsg

  if (
    error.response &&
    error.response.data &&
    error.response.data.error
  ) {
    message = error.response.data.error;
  }

  alert(message)
}

export const server = new Bigneon.Server({prefix: `${BASE_URL}/api`})// , {}, mocker)

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');

  return JSON.parse(window.atob(base64));
}

export async function refreshCheck() {
  /* eslint-disable complexity,camelcase */
  const [userToken, refreshToken] = await AsyncStorage.multiGet(['userToken', 'refreshToken'])
  const user = (userToken && userToken[1]) ? parseJwt(userToken[1]) : false

  // if expired, refresh
  if (user && user.exp < Math.floor(Date.now() / 1000)) {
    const resp = await server.auth.refresh({refresh_token: refreshToken[1]})
    const {data: {access_token, refresh_token}} = resp

    const _setTokens = await AsyncStorage.multiSet([['userToken', access_token], ['refreshToken', refresh_token]])
    const _setAPIToken = await server.client.setToken(access_token)
  }
}
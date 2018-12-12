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

// eslint-disable-next-line complexity
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

// If the access token is expired, return true
function needsToRefresh(user) {
  return user.exp < Math.floor(Date.now() / 1000)
}

export function refresh() {
  /* eslint-disable complexity,camelcase */
  return AsyncStorage.multiGet(['userToken', 'refreshToken'])
    .then(([userToken, refreshToken]) => {
      // decode the JWT token
      const user = (userToken && userToken[1]) ? parseJwt(userToken[1]) : false

      // if expired, refresh
      if (user && needsToRefresh(user)) {
        server.auth.refresh({refresh_token: refreshToken[1]})
          .then((resp) => {
            const {data: {access_token, refresh_token}} = resp

            AsyncStorage.multiSet([['userToken', access_token], ['refreshToken', refresh_token]])
              .then(() => server.client.setToken(access_token))
              .then(() => {
                return true
              })
          }).catch((_error) => {
            return false
          })
      } else {
        return true
      }
    }).catch((_error) => {
      return false
    })
}

// refresh access token on API Calls if expired

export function refreshCheck() {
  return new Promise(function(resolve, reject) {
    if (refresh()) {
      resolve();
    } else {
      reject(Error("Refreshing Login Failed"));
    }
  })
}

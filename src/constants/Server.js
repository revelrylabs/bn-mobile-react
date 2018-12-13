import Bigneon from 'bn-api-node'
import mocker from './mocker'
import {apiURL} from './config'

export const server = new Bigneon.Server({prefix: apiURL()})// , {}, mocker)

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

import {Constants, Facebook} from 'expo'
import {server} from './constants/Server'


const appId = Constants.manifest.facebookAppId
const options = {
  permissions: ['public_profile', 'email'],
}

export async function requestFacebookAuth() {
  const {type, ...result} = await Facebook.logInWithReadPermissionsAsync(appId, options)

  if (type === 'success') {
    return result
  }

  return null
}

// https://docs.expo.io/versions/latest/sdk/facebook/#facebookloginwithreadpermissionsasyncappid-options
export async function connectFacebookToBigNeon({token: accessToken, expires: expiresIn}) {
  return await server.external.facebookLogin({accessToken, expiresIn, signedRequest: ' '})
}

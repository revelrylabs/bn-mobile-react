import {Constants, Facebook} from 'expo'

const appId = Constants.manifest.facebookAppId
const options = {
  permissions: ['public_profile', 'email'],
}

async function requestFacebook() {
  const {type, ...result} = await Facebook.logInWithReadPermissionsAsync(appId, options)

  if (type === 'success') {
    return result
  }

  return null
}

// https://docs.expo.io/versions/latest/sdk/facebook/#facebookloginwithreadpermissionsasyncappid-options
async function connectToBigNeon(facebookResponse) {
  // TODO
}

export async function facebookConnect() {
  const facebook = await requestFacebook()

  return facebook && connectToBigNeon(facebook)
}

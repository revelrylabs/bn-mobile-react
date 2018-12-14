import {Constants} from 'expo'

const basicAuthUsername = 'bigneon1'
const basicAuthPassword = 'tar1'

const authString = `${basicAuthUsername}:${basicAuthPassword}@`

const CONFIG = {
  dev: {
    apiURL: `https://${authString}staging.bigneon.com/api`,
    baseURL: `https://${authString}staging.bigneon.com`,
    stripeFormURL: `https://${authString}staging.bigneon.com`,
    timeout: 3000,
  },
  staging: {
    apiURL: `https://${authString}staging.bigneon.com/api`,
    baseURL: `https://${authString}staging.bigneon.com`,
    stripeFormURL: `https://${authString}staging.bigneon.com`,
    timeout: 3000,
  },
  production: {
    apiURL: 'https://api.bigneon.com',
    baseURL: 'https://prod-1-mobile-www.bigneon.com',
    stripeFormURL: 'https://prod-1-mobile-www.bigneon.com',
    timeout: 10000,
  },
}

function valueForField(field) {
  const {manifest: {releaseChannel}} = Constants

  switch (releaseChannel) {
  case 'staging':
    return CONFIG.staging[field] || ''
  case 'production':
    return CONFIG.production[field] || ''
  default:
    return CONFIG.dev[field] || ''
  }
}

export const apiURL = valueForField('apiURL')
export const baseURL = valueForField('baseURL')
export const stripeFormURL = valueForField('stripeFormURL')
export const timeout = valueForField('timeout')

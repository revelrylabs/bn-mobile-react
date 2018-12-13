import {Constants} from 'expo'

const basicAuthUsername = 'bigneon1'
const basicAuthPassword = 'tar1'

const authString = `${basicAuthUsername}:${basicAuthPassword}@`

const CONFIG = {
  dev: {
    apiURL: `https://${authString}staging.bigneon.com/api`,
    baseURL: `https://${authString}staging.bigneon.com`,
    stripeFormURL: `https://${authString}staging.bigneon.com`,
  },
  staging: {
    apiURL: `https://${authString}staging.bigneon.com/api`,
    baseURL: `https://${authString}staging.bigneon.com`,
    stripeFormURL: `https://${authString}staging.bigneon.com`,
  },
  production: {
    apiURL: 'https://api.bigneon.com',
    baseURL: 'https://prod-1-mobile-www.bigneon.com',
    stripeFormURL: 'https://prod-1-mobile-www.bigneon.com',
  },
}

export const apiURL = () => {
  const {manifest: {releaseChannel}} = Constants

  switch (releaseChannel) {
  case 'staging':
    return CONFIG.staging.apiURL
  case 'production':
    return CONFIG.production.apiURL
  default:
    return CONFIG.dev.apiURL
  }
}

export const baseURL = () => {
  const {manifest: {releaseChannel}} = Constants

  switch (releaseChannel) {
  case 'staging':
    return CONFIG.staging.baseURL
  case 'production':
    return CONFIG.production.baseURL
  default:
    return CONFIG.dev.baseURL
  }
}


export const stripeFormURL = () => {
  const {manifest: {releaseChannel}} = Constants

  switch (releaseChannel) {
  case 'staging':
    return CONFIG.staging.stripeFormURL
  case 'production':
    return CONFIG.production.stripeFormURL
  default:
    return CONFIG.dev.stripeFormURL
  }
}


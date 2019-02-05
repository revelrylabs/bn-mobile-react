import {Asset, Image} from 'expo'
import {loadFonts} from './fonts'

async function prefetch(image) {
  return new Promise(resolve => resolve(Image.prefetch(image)))
}

async function loadImages() {
  const IMAGES = [
    require('./account-placeholder-bkgd.png'),
    require('./appIcon.png'),
    // require('./avatar-female.png'),
    // require('./avatar-female-2.png'),
    // require('./avatar-female-3.png'),
    // require('./avatar-male.png'),
    // require('./avatar-male-2.png'),
    require('./big-neon-logo.png'),
    require('./event-img-overlay.png'),
    require('./emoji-loader.png'),
    require('./featured-1.png'),
    require('./heart-large.png'),
    require('./heart-small.png'),
    require('./heart-white.png'),
    require('./Icon-1024.png'),
    require('./icon-account-active.png'),
    require('./icon-account.png'),
    require('./icon-empty-state.png'),
    require('./icon-explore-active.png'),
    require('./icon-explore.png'),
    require('./icon-facebook.png'),
    require('./icon-instagram.png'),
    require('./icon-spotify.png'),
    require('./icon-ticket.png'),
    require('./icon-ticket-active.png'),
    require('./icon-wallet.png'),
    require('./icon-youtube.png'),
    require('./image-grid-1.png'),
    require('./image-grid-2.png'),
    require('./image-grid-3.png'),
    require('./login-bkgd.png'),
    require('./modal-bkgd.jpg'),
    // require('./qr-code-placeholder.png'),
    require('./qr-code-small.png'),
    require('./spotify-placeholder.png'),
    require('./ticket-event-2.png'),
    require('./ticket-event.png'),
    require('./video-bkgd-overlay.png'),
    require('./video-bkgd.png'),
    require('./video-youtube-bkgd.png'),
  ]
  return await Promise.all(IMAGES.map((x) => typeof image === 'string' ? prefetch(x) : Asset.loadAsync(x)))
}

export const splashVideo = require('../splash.mp4')

export async function loadSplashVideo() {
  return await Asset.loadAsync(splashVideo)
}

export async function loadAssets() {
  return Promise.all([loadFonts(), loadImages()])
}

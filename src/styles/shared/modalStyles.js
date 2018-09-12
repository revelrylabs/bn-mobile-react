import {
  textColor,
  globalFontRegular,
  containerDarkColor,
  globalPadding,
  globalPaddingLarge,
  globalPaddingJumbo,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const whiteTransparent = 'rgba(255, 255, 255, 0.10)'

export const headerFontSize = 32

const ModalStyles = {
  // CONTAINER STYLES
  modalContainer: {
    flexDirection: 'column',
    height: fullHeight,
    justifyContent: 'center',
    paddingHorizontal: globalPadding,
  },
  contentWrapper: {
    alignItems: 'center',
    backgroundColor: containerDarkColor,
    paddingHorizontal: globalPadding,
    paddingVertical: globalPaddingJumbo,
  },

  // IMAGE STYLES
  qrCode: {
    height: 250,
    width: 250,
  },

  // TEXT STYLES
  header: {
    color: textColor,
    fontFamily: globalFontRegular,
    fontSize: headerFontSize,
    paddingVertical: globalPaddingLarge,
    textAlign: 'center',
  }
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...ModalStyles, ...overrides})
}

export default {
  createStyles,
}

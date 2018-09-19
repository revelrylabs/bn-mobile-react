import {
  white,
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
export const modalBkgdColor = 'rgba(0, 0, 0, 0.5)'

export const headerFontSize = 32

const ModalStyles = {
  // CONTAINER STYLES
  modalContainer: {
    backgroundColor: modalBkgdColor,
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
  modalDropdownContainer: {
    backgroundColor: white,
    height: fullHeight,
    width: fullWidth,
  },
  rowWrapper: {
    padding: globalPadding,
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

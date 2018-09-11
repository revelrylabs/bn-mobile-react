import {
  white,
  textColor,
  containerDarkColor,
  sectionHeaderFontSize,
  bodyFontSize,
  iconFontSize,
  globalFontRegular,
  globalFontSemiBold,
  globalPadding,
  globalPaddingSmall,
  globalPaddingTiny,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const whiteTransparent = 'rgba(255, 255, 255, 0.10)'

export const headerFontSize = 38

const ModalStyles = {
  // CONTAINER STYLES
  modalContainer: {
    flexDirection: 'column',
    height: fullHeight,
    justifyContent: 'center',
    paddingHorizontal: globalPadding,
  },
  qrCodeContainer: {
    backgroundColor: containerDarkColor,
    // flexDirection: 'row',
    // justifyContent: 'center',
    padding: globalPadding,
    width: fullWidth - 43,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...ModalStyles, ...overrides})
}

export default {
  createStyles,
}

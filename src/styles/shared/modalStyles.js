import {
  white,
  textColor,
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
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...ModalStyles, ...overrides})
}

export default {
  createStyles,
}

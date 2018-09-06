import {
  primaryColor,
  white,
  borderColor,
  globalPadding,
  globalPaddingSmall,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const headerFontSize = 28
export const sectionHeaderFontSize = 24
export const bodyFontSize = 16
export const bodyFontSizeSmall = 14
export const iconFontSize = 18
export const avatarIconFontSize = 28
export const iconLargeFontSize = 56

const OrderHistoryStyles = {
  billingRowWrapper: {
    backgroundColor: white,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    paddingHorizontal: globalPadding,
    paddingVertical: globalPaddingSmall,
    width: fullWidth,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...OrderHistoryStyles, ...overrides})
}

export default {
  createStyles,
}

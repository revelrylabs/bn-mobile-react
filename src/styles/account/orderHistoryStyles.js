import {
  globalFontRegular,
  globalFontMedium,
  white,
  sectionHeaderColor,
  borderColor,
  globalPadding,
  globalPaddingSmall,
  globalPaddingTiny,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const headerFontSize = 28
export const sectionHeaderFontSize = 24
export const bodyFontSize = 18
export const bodyFontSizeSmall = 13
export const iconFontSize = 18
export const avatarIconFontSize = 28
export const iconLargeFontSize = 56

const OrderHistoryStyles = {
  historyIcon: {
    color: sectionHeaderColor,
    fontSize: iconFontSize,
    paddingRight: globalPaddingSmall,
  },
  orderHistoryDate: {
    color: sectionHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSizeSmall,
  },
  orderHistoryText: {
    fontFamily: globalFontMedium,
    fontSize: bodyFontSize,
    paddingTop: globalPaddingTiny,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...OrderHistoryStyles, ...overrides})
}

export default {
  createStyles,
}

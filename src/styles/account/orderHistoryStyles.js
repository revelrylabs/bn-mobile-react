import {
  globalFontRegular,
  globalFontMedium,
  sectionHeaderColor,
  globalPaddingSmall,
  globalPaddingTiny,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'

export const bodyFontSize = 18
export const bodyFontSizeSmall = 13
export const iconFontSize = 16

const OrderHistoryStyles = {
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  icon: {
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

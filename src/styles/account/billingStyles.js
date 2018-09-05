import {
  textColor,
  sectionHeaderColor,
  white,
  borderColor,
  containerDarkColor,
  disabledHeaderColor,
  globalFontRegular,
  globalFontMedium,
  globalPaddingLarge,
  globalPaddingMedium,
  globalPadding,
  globalPaddingSmall,
  globalPaddingTiny,
  globalMarginSmall,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const whiteTransparent = 'rgba(255, 255, 255, 0.8)'

export const headerFontSize = 28
export const sectionHeaderFontSize = 24
export const bodyFontSize = 16
export const bodyFontSizeSmall = 14
export const iconFontSize = 18
export const avatarIconFontSize = 28
export const iconLargeFontSize = 56

const BillingStyles = {
  billingRowWrapper: {
    backgroundColor: white,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    paddingHorizontal: globalPadding,
    paddingVertical: globalPaddingSmall,
    width: fullWidth,
  },
  billingRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imageWrapper: {
    width: 100,
  },
  billingImageVisa: {
    height: 10,
    width: 30,
  },
  billingImageMC: {
    height: 15,
    width: 25,
  },
  billingImageVenmo: {
    height: 25,
    width: 25,
  },
  billingInputHeader: {
    // paddingRight: globalPadding,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...BillingStyles, ...overrides})
}

export default {
  createStyles,
}

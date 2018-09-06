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

const BillingStyles = {
  rowContainer: {
    backgroundColor: white,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    paddingHorizontal: globalPadding,
    paddingVertical: globalPaddingSmall,
    width: fullWidth,
  },
  row: {
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
    paddingRight: globalPadding,
  },
  billingButtonIcon: {
    color: primaryColor,
    fontSize: iconFontSize,
    paddingRight: globalPaddingSmall,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...BillingStyles, ...overrides})
}

export default {
  createStyles,
}

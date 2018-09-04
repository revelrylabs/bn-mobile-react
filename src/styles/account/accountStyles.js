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

const AccountStyles = {
  accountBkgdContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
  },
  accountBkgd: {
    width: fullWidth,
    height: 240,
    position: 'absolute',
  },
  accountPhotoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 290,
    justifyContent: 'center',
    paddingTop: globalPadding,
    width: fullWidth,
  },
  accountPhotoText: {
    color: whiteTransparent,
    fontSize: bodyFontSizeSmall,
  },
  avatarPlaceholderContainer: {
    backgroundColor: sectionHeaderColor,
    borderColor: white,
    borderWidth: 1,
    borderRadius: 100/2,
    height: 55,
    marginTop: -50,
    padding: globalPaddingSmall,
    width: 55,
  },
  avatarIcon: {
    color: white,
    fontSize: avatarIconFontSize,
  },
  accountHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: globalPaddingSmall,
  },
  accountEmailHeader: {
    color: textColor,
    fontFamily: globalFontMedium,
    fontSize: sectionHeaderFontSize,
  },
  emailWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: globalPaddingTiny,
  },
  emailIcon: {
    color: sectionHeaderColor,
    fontSize: bodyFontSize,
    paddingRight: globalPaddingTiny,
  },
  accountEmail: {
    color: sectionHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSizeSmall,
  },
  qrCodeSmall: {
    height: 45,
    width: 45,
  },
  sectionHeader: {
    color: sectionHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    marginBottom: globalMarginSmall,
    paddingHorizontal: globalPadding,
  },
  containerDark: {
    backgroundColor: containerDarkColor,
    flexDirection: 'column',
    height: fullHeight,
    paddingVertical: globalPaddingMedium,
    width: fullWidth,
  },
  accountRow: {
    alignItems: 'center',
    backgroundColor: white,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: globalPadding,
    paddingVertical: globalPaddingSmall,
    width: fullWidth,
  },
  accountIcon: {
    color: sectionHeaderColor,
    fontSize: bodyFontSize,
    paddingRight: globalPaddingSmall,
  },
  accountHeader: {
    color: textColor,
    fontFamily: globalFontRegular,
    fontSize: iconFontSize,
  },
  accountInputHeaderDisabled: {
    color: disabledHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: iconFontSize,
    width: 120,
  },
  accountArrow: {
    color: sectionHeaderColor,
    fontSize: avatarIconFontSize,
  },
  avatarContainer: {
    width: 120,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...AccountStyles, ...overrides})
}

export default {
  createStyles,
}

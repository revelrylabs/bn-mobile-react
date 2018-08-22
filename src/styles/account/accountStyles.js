import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const primaryColor = '#FF20B1'
export const secondaryColor = '#707CED'
export const tertiaryColor = '#4EB0E5'
export const white = '#FFF'
export const errorTextColor = '#FF0000'
export const textColor = '#1E1E1E'
export const backgroundColor = white
export const inputBackgroundColor = '#FAFAFA'
export const disabledColor = '#F7F7F7'
export const helpTextColor = '#666'
export const borderColor = '#DCDCDC'
export const placeholderImageBackground = '#F6F7F5'
export const sectionHeaderColor = '#9DA3B4'
export const primaryTransparent = 'rgba(255, 34, 178, 0.5)'
export const whiteTransparent = 'rgba(255, 255, 255, 0.8)'

export const globalPaddingTiny = 5
export const globalPaddingSmall = 10
export const globalPadding = 20
export const globalPaddingMedium = 30
export const globalPaddingLarge = 40
export const globalPaddingLarger = 45
export const globalPaddingJumbo = 55
export const globalMarginSmall = 10
export const globalMargin = 20

export const globalFontRegular = 'tt_commons_regular'
export const globalFontMedium = 'tt_commons_medium'
export const globalFontSemiBold = 'tt_commons_demibold'
export const globalFontBold = 'tt_commons_bold'
export const globalFontItalic = 'tt_commons_italic'

export const headerFontSize = 28
export const sectionHeaderFontSize = 18
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
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...AccountStyles, ...overrides})
}

export default {
  createStyles,
}

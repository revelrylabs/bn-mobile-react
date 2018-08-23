import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
export const fullWidth = Dimensions.get('window').width

function wp (percentage) {
  const value = (percentage * fullWidth) / 100;

  return Math.round(value);
}

const slideWidth = wp(100);
const itemHorizontalMargin = wp(2);

export const itemWidth = slideWidth + itemHorizontalMargin * 2;

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
export const containerDarkColor = '#F5F6F7'
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
export const iconLargeFontSize = 56
export const closeModalHeaderSize = 21

const TicketShowStyles = {
  modalContainer: {
    paddingHorizontal: globalPadding,
  },
  modalBkgdImage: {
    width: fullWidth,
    position: 'absolute',
  },
  closeModalContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: globalPaddingLarge,
  },
  closeModalHeader: {
    color: white,
    fontFamily: globalFontMedium,
    fontSize: closeModalHeaderSize,
  },
  details: {
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    color: white,
    paddingVertical: globalPaddingTiny,
  },
  detailsContainerBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: globalPaddingSmall + globalPaddingTiny,
    paddingVertical: globalPaddingSmall,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingRight: globalPaddingSmall,
  },
  avatar: {
    borderColor: white,
    borderRadius: 45/2,
    borderWidth: 1,
    height: 45,
    width: 45,
  },
  iconLink: {
    backgroundColor: 'transparent',
    color: whiteTransparent,
    fontSize: bodyFontSize,
    paddingRight: globalPaddingTiny,
  },
  iconLinkText: {
    color: whiteTransparent,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSizeSmall,
    paddingRight: globalPaddingTiny,
  },
  qrCodeContainer: {
    backgroundColor: containerDarkColor,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: globalPadding,
    width: fullWidth - 43,
  },
  qrCode: {
    height: 200,
    width: 200,
  },
  bottomNav: {
    backgroundColor: white,
    borderBottomRightRadius: 20/2,
    borderBottomLeftRadius: 20/2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: fullWidth - 43,
  },
  bottomNavLinkContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: globalPaddingSmall + globalPaddingTiny,
    padding: globalPadding,
  },
  bottomNavIcon: {
    color: primaryColor,
    fontSize: iconFontSize,
    paddingHorizontal: globalPaddingTiny,
  },
  bottomNavLinkText: {
    color: sectionHeaderColor,
    fontFamily: globalFontMedium,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...TicketShowStyles, ...overrides})
}

export default {
  createStyles,
  fullWidth,
  itemWidth,
}

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
export const primaryTransparent = 'rgba(255, 34, 178, 0.5)'
export const whiteTransparent = 'rgba(255, 255, 255, 0.10)'

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

export const headerFontSize = 38
export const sectionHeaderFontSize = 21
export const bodyFontSize = 18
export const iconFontSize = 18
export const pickerItemHeight = 120
export const slideShowArrowFontSize = 32

const EventStyles = {
  eventContainer: {
    padding: globalPaddingSmall,
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 180,
  },
  detailsContainerBottom: {
    paddingBottom: globalPadding,
  },
  sectionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionBottom: {
    paddingVertical: globalPadding,
  },
  iconLinkStarContainerSmall: {
    backgroundColor: whiteTransparent,
    borderRadius: 100/2,
    height: 28,
    padding: globalPaddingTiny,
    width: 28,
  },
  iconLinkStarSmall: {
    color: white,
    fontSize: iconFontSize,
  },
  eventImage: {
    width: fullWidth - 43,
    height: 180,
    position: 'absolute',
  },
  header: {
    fontFamily: globalFontBold,
    fontSize: sectionHeaderFontSize,
    color: textColor,
  },
  details: {
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    color: textColor,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...EventStyles, ...overrides})
}

export default {
  createStyles,
}

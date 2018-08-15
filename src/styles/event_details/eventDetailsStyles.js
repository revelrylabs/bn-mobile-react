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
export const iconFontSize = 18
export const iconLargeFontSize = 56

const EventDetailsStyles = {
  videoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
  },
  videoBkgd: {
    width: fullWidth,
    height: 240,
    position: 'absolute',
  },
  videoDetailsContainer: {
    flexDirection: 'column',
    height: 290,
    justifyContent: 'space-between',
    padding: globalPaddingSmall,
    paddingTop: globalPaddingJumbo + globalPaddingTiny,
    width: fullWidth,
  },
  sectionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionBottom: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -45,
    paddingBottom: globalPaddingLarge,
  },
  videoActionsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  iconPlayLink: {
    color: whiteTransparent,
    fontSize: iconLargeFontSize,
    marginBottom: globalMargin,
  },
  header: {
    fontFamily: globalFontSemiBold,
    fontSize: headerFontSize,
    color: white,
    marginTop: globalPaddingTiny,
  },
  sectionHeader: {
    color: sectionHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: sectionHeaderFontSize,
    marginBottom: globalMargin,
  },
  eventDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: globalPadding,
  },
  eventDetailsLeft: {
    paddingRight: globalPadding,
  },
  eventDetailsRight: {
    paddingLeft: globalPadding,
  },
  eventDescriptionContainer: {
    paddingVertical: globalPadding,
    borderTopColor: borderColor,
    borderBottomColor: borderColor,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: globalPaddingSmall,
  },
  ticketPrice: {
    color: primaryColor,
    fontFamily: globalFontSemiBold,
    fontSize: headerFontSize + sectionHeaderFontSize,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...EventDetailsStyles, ...overrides})
}

export default {
  createStyles,
}

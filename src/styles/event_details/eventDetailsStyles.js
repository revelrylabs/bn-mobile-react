import {
  primaryColor,
  white,
  sectionHeaderColor,
  borderColor,
  textColor,
  globalFontRegular,
  globalFontMedium,
  globalFontSemiBold,
  globalFontBold,
  bodyFontSize,
  globalPaddingJumbo,
  globalPaddingLarge,
  globalPaddingMedium,
  globalPadding,
  globalPaddingSmall,
  globalPaddingTiny,
  globalMargin,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const whiteTransparent = 'rgba(255, 255, 255, 0.8)'

export const headerFontSize = 28
export const sectionHeaderFontSize = 18
export const iconLargeFontSize = 56
export const slideShowArrowFontSize = 28
export const attendeeFontSize = 12

const EventDetailsStyles = {
  // VIDEO STYLES
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

  // CONTAINER STYLES
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
  iconSectionHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: globalPadding,
  },

  // TEXT STYLES
  descriptionHeader: {
    fontFamily: globalFontSemiBold,
    fontSize: headerFontSize,
    color: textColor,
    marginTop: globalPaddingTiny,
  },
  descriptionSubHeader: {
    color: sectionHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: sectionHeaderFontSize,
    marginBottom: globalMargin,
  },
  header: {
    fontFamily: globalFontSemiBold,
    fontSize: headerFontSize,
    color: white,
    marginTop: globalPaddingTiny,
  },
  sectionHeader: {
    color: textColor,
    fontFamily: globalFontBold,
    fontSize: sectionHeaderFontSize,
    marginVertical: globalMargin,
  },
  bodyText: {
    backgroundColor: 'transparent',
    color: sectionHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    paddingBottom: globalPaddingSmall,
  },
  iconSectionHeader: {
    color: sectionHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: sectionHeaderFontSize,
  },
  ticketPrice: {
    color: primaryColor,
    fontFamily: globalFontSemiBold,
    fontSize: headerFontSize + sectionHeaderFontSize,
  },

  // EVENT DETAILS/DESCRIPTION STYLES
  eventDetailsContainer: {
    flexDirection: 'row',
    paddingVertical: globalPadding,
  },
  eventDetailsHeaderWrapper: {

  },
  eventDescriptionContainer: {
    paddingVertical: globalPadding,
    borderTopColor: borderColor,
    borderBottomColor: borderColor,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  eventDescriptionHeaderWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  // AVATAR STYLES
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  avatar: {
    borderColor: white,
    borderRadius: 45/2,
    borderWidth: 1,
    height: 45,
    marginRight: globalPaddingSmall,
    width: 45,
  },
  attendeeContainer: {
    borderColor: borderColor,
    borderRadius: 45/2,
    borderWidth: 1,
    height: 45,
    padding: globalPaddingTiny,
    width: 45,
  },
  attendeeNumber: {
    flexDirection: 'column',
    alignItems: 'center',
    color: primaryColor,
    fontFamily: globalFontMedium,
    fontSize: attendeeFontSize,
    letterSpacing: 1,
    padding: globalPaddingTiny,
    textAlign: 'center',
  },

  // ICON STYLES
  iconPlayLink: {
    color: whiteTransparent,
    fontSize: iconLargeFontSize,
    marginBottom: globalMargin,
  },
  iconYoutube: {
    width: 20,
    height: 15,
    marginRight: globalPaddingSmall,
  },
  iconInstagram: {
    width: 20,
    height: 20,
    marginRight: globalPaddingSmall,
  },
  iconSpotify: {
    width: 20,
    height: 20,
    marginRight: globalPaddingSmall,
  },
  iconEventDescription: {
    color: sectionHeaderColor,
    fontSize: bodyFontSize,
    paddingRight: globalPaddingSmall,
  },

  // IMAGE PLACEHOLDER STYLES
  imagePlaceholderContainer: {
    height: 100,
    paddingVertical: globalPadding,
  },
  imagePlaceholder: {
    height: 100,
    width: fullWidth - 40,
    position: 'absolute',
  },

  // SLIDER STYLES
  sliderArrowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: globalPadding,
  },
  slideShowIconLinkLeft: {
    color: textColor,
    fontSize: slideShowArrowFontSize,
    marginLeft: -23,
  },
  slideShowIconLinkRight: {
    color: textColor,
    fontSize: slideShowArrowFontSize,
    marginRight: -23,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...EventDetailsStyles, ...overrides})
}

export default {
  createStyles,
}

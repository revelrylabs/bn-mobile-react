import {
  primaryColor,
  white,
  sectionHeaderColor,
  borderColor,
  textColor,
  globalFontRegular,
  globalFontSemiBold,
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
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: globalPaddingSmall,
  },
  iconSectionHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: globalPadding,
  },
  eventDetailsHeaderWrapper: {

  },

  // TEXT STYLES
  descriptionHeader: {
    fontFamily: globalFontSemiBold,
    fontSize: headerFontSize,
    color: textColor,
    marginTop: globalPaddingTiny,
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

  // EVENT DESCRIPTION STYLES
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

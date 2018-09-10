import {
  white,
  textColor,
  globalFontRegular,
  globalFontSemiBold,
  globalPadding,
  globalPaddingSmall,
  globalPaddingTiny,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const whiteTransparent = 'rgba(255, 255, 255, 0.10)'

export const headerFontSize = 38
export const sectionHeaderFontSize = 21
export const bodyFontSize = 16
export const iconFontSize = 18

const EventStyles = {
  // CONTAINER STYLES
  eventContainer: {
    padding: globalPaddingSmall,
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 175,
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

  // TEXT STYLES
  header: {
    fontFamily: globalFontSemiBold,
    fontSize: sectionHeaderFontSize,
    color: textColor,
  },
  details: {
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    color: textColor,
  },

  // ICON STYLES
  iconLinkCircleContainerSmall: {
    backgroundColor: whiteTransparent,
    borderRadius: 100/2,
    height: 28,
    padding: globalPaddingTiny,
    width: 28,
  },
  iconLinkCircleSmall: {
    color: white,
    fontSize: iconFontSize,
  },

  // IMAGE BKGD STYLES
  eventImage: {
    height: 180,
    position: 'absolute',
    width: fullWidth - 43,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...EventStyles, ...overrides})
}

export default {
  createStyles,
}

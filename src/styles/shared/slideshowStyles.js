import {
  white,
  globalFontSemiBold,
  globalFontRegular,
  globalPaddingJumbo,
  globalPaddingLarge,
  globalPadding,
  globalPaddingSmall,
  globalPaddingTiny,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const whiteTransparent = 'rgba(225, 225, 225, 0.8)'

export const headerFontSize = 32
export const bodyFontSize = 18
export const slideShowArrowFontSize = 32

const SlideShowStyles = {
  // CONTAINER STYLES
  slideshowContainer: {
    padding: globalPadding,
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 300,
  },
  sectionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionMiddle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: globalPaddingJumbo,
  },
  sectionBottom: {
    paddingVertical: globalPaddingLarge,
  },

  // ICON STYLES
  slideShowIconLinkLeft: {
    color: white,
    fontSize: slideShowArrowFontSize,
    marginLeft: -20,
  },
  slideShowIconLinkRight: {
    color: white,
    fontSize: slideShowArrowFontSize,
    marginRight: -20,
  },

  // TEXT STYLES
  header: {
    fontFamily: globalFontSemiBold,
    fontSize: headerFontSize,
    color: white,
    marginTop: globalPaddingTiny,
  },
  details: {
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    color: whiteTransparent,
  },

  // IMAGE STYLES
  slideShowImage: {
    width: fullWidth - 43,
    height: 300,
    position: 'absolute',
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...SlideShowStyles, ...overrides})
}

export default {
  createStyles,
}

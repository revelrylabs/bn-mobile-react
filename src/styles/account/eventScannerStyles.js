import {
  primaryColor,
  white,
  textColor,
  pillContainerColor,
  sectionHeaderColor,
  successColor,
  bodyFontSize,
  subnavFontSize,
  headerSecondaryFontSize,
  globalFontSemiBold,
  globalFontRegular,
  globalPaddingTiny,
  globalPaddingSmall,
  globalPadding,
  globalPaddingLarge,
  globalMargin,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const iconFontSize = 32

const EventScannerStyles = {
  // CONTAINERS
  eventScannerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: fullHeight,
  },
  headerActionsWrapper: {
    alignItems: 'center',
    paddingHorizontal: globalPadding,
    paddingTop: globalPaddingLarge,
  },

  // MAIN BODY STYLES
  mainBody: {
    backgroundColor: 'transparent',
    paddingLeft: 0,
    paddingRight: 0,
    paddingHorizontal: 0,
  },

  // PILLS
  pillContainer: {
    alignItems: 'center',
    backgroundColor: pillContainerColor,
    borderColor: 'transparent',
    borderRadius: 100/2,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: globalMargin,
    paddingHorizontal: globalPadding,
    paddingVertical: globalPaddingSmall,
  },
  pillTextWhite: {
    color: white,
    fontFamily: globalFontSemiBold,
    fontSize: bodyFontSize,
  },
  pillTextPrimary: {
    color: primaryColor,
    fontFamily: globalFontSemiBold,
    fontSize: bodyFontSize,
  },
  pillTextSubheader: {
    color: sectionHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: subnavFontSize,
  },

  // IMAGES
  scannerBkgdImage: {
    height: fullHeight,
    width: fullWidth,
    position: 'absolute',
  },

  // ICONS
  checkIcon: {
    color: successColor,
    fontSize: iconFontSize,
    paddingHorizontal: globalPaddingSmall,
  },
  arrowUpIcon: {
    color: sectionHeaderColor,
    fontSize: bodyFontSize,
    paddingHorizontal: globalPaddingSmall,
  },


  // TEXT STYLES
  // TEXT STYLES
  descriptionHeader: {
    color: textColor,
    fontFamily: globalFontSemiBold,
    fontSize: headerSecondaryFontSize,
    width: 275,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...EventScannerStyles, ...overrides})
}

export default {
  createStyles,
}

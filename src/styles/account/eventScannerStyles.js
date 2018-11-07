import {
  primaryColor,
  white,
  textColor,
  pillContainerColor,
  sectionHeaderColor,
  successColor,
  bodyFontSize,
  subnavFontSize,
  globalFontSemiBold,
  globalFontRegular,
  globalPaddingTiny,
  globalPaddingSmall,
  globalPadding,
  globalPaddingLarge,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const iconFontSize = 32

const EventScannerStyles = {
  // CONTAINERS
  headerActionsWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: globalPadding,
    paddingVertical: globalPaddingLarge,
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
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...EventScannerStyles, ...overrides})
}

export default {
  createStyles,
}

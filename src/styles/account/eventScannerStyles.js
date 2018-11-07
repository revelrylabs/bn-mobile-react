import {
  primaryColor,
  white,
  textColor,
  pillContainerColor,
  bodyFontSize,
  globalFontSemiBold,
  globalPaddingTiny,
  globalPadding,
  globalPaddingLarge,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

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
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: globalPadding,
  },
  pillText: {
    color: white,
    fontFamily: globalFontSemiBold,
    fontSize: bodyFontSize,
  },
  pillTextPrimary: {
    color: primaryColor,
    fontFamily: globalFontSemiBold,
    fontSize: bodyFontSize,
  },

  // IMAGES
  scannerBkgdImage: {
    height: fullHeight,
    width: fullWidth,
    position: 'absolute',
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...EventScannerStyles, ...overrides})
}

export default {
  createStyles,
}

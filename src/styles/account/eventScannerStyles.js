import {
  primaryColor,
  white,
  textColor,
  pillContainerColor,
  bodyFontSize,
  globalFontSemiBold,
  globalPadding,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

const EventScannerStyles = {
  // PILLS
  pillContainer: {
    alignItems: 'center',
    backgroundColor: pillContainerColor,
    borderColor: 'transparent',
    borderRadius: 100/2,
    borderWidth: 1,
    // flex: 1,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
  },
  pillText: {
    color: white,
    fontFamily: globalFontSemiBold,
    fontSize: bodyFontSize,
    // textAlign: 'center',
  },
  pillTextPrimary: {
    color: primaryColor,
    fontFamily: globalFontSemiBold,
    fontSize: bodyFontSize,
    // textAlign: 'center',
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...EventScannerStyles, ...overrides})
}

export default {
  createStyles,
}

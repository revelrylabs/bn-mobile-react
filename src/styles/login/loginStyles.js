import {
  primaryColor,
  textColor,
  sectionHeaderColor,
  white,
  borderColor,
  containerDarkColor,
  disabledHeaderColor,
  bodyFontSize,
  iconFontSize,
  globalFontRegular,
  globalFontMedium,
  globalPaddingLarge,
  globalPaddingMedium,
  globalPadding,
  globalPaddingSmall,
  globalPaddingTiny,
  globalMarginSmall,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

const LoginStyles = {
  // SIGN UP CONTAINERS
  signupBkgdContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: fullHeight,
  },
  signupBkgd: {
    width: fullWidth,
    height: fullHeight,
    position: 'absolute',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    // height: 290,
    justifyContent: 'center',
    paddingTop: globalPadding,
    width: fullWidth,
  },

  // LOGO
  logo: {
    height: 200,
    paddingBottom: globalPadding,
    width: 100,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...LoginStyles, ...overrides})
}

export default {
  createStyles,
}

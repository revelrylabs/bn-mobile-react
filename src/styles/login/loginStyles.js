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
  sectionHeaderFontSize,
  globalFontRegular,
  globalFontMedium,
  globalFontSemiBold,
  globalPaddingJumbo,
  globalPaddingLarge,
  globalPaddingMedium,
  globalPadding,
  globalPaddingSmall,
  globalPaddingTiny,
  globalMargin,
  globalMarginSmall,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const whiteTransparent = 'rgba(255, 255, 255, 0.5)'
export const facebookColor = '#4267B2'

const LoginStyles = {
  // BACKGROUND IMAGE STYLES
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
  section: {
    alignItems: 'center',
    flexDirection: 'column',
    height: 700,
    justifyContent: 'space-between',
    paddingHorizontal: globalPadding,
    width: fullWidth,
  },

  // CONTAINERS
  container: {
    backgroundColor: white,
    flex: 1,
    flexDirection: 'column',
    height: fullHeight,
    justifyContent: 'space-between',
    paddingHorizontal: globalPadding,
    paddingVertical: globalPaddingLarge,
    width: fullWidth,
  },

  // BUTTONS
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: globalMargin,
    width: fullWidth - globalPaddingMedium,
  },
  button: {
    backgroundColor: primaryColor,
    borderColor: 'transparent',
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {
    color: white,
    fontFamily: globalFontSemiBold,
    fontSize: sectionHeaderFontSize,
    textAlign: 'center',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderColor: whiteTransparent,
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 60,
    justifyContent: 'center',
  },
  buttonSecondaryText: {
    color: whiteTransparent,
    fontFamily: globalFontRegular,
    fontSize: sectionHeaderFontSize,
    textAlign: 'center',
  },

  // TEXT STYLES
  linkTextBlue: {
    backgroundColor: 'transparent',
    color: facebookColor,
    fontFamily: globalFontMedium,
    fontSize: bodyFontSize,
  },

  // ICON STYLES
  arrowIconBlue: {
    color: facebookColor,
  },
  facebookIcon: {
    height: 15,
    marginRight: globalMarginSmall,
    width: 15,
  },
  phoneIcon: {
    fontSize: iconFontSize,
    marginRight: globalMarginSmall,
  },

  // LOGO STYLES
  logo: {
    height: 220,
    marginTop: globalPaddingJumbo,
    width: 150,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...LoginStyles, ...overrides})
}

export default {
  createStyles,
}

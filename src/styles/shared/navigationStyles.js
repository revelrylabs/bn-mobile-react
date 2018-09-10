import {
  primaryColor,
  borderColor,
  white,
  globalFontSemiBold,
  globalFontRegular,
} from './sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const headerFontSize = 16
export const iconLargeFontSize = 38

const NavigationStyles = {
  tabBarIconAccount: {
    height: 20,
    width: 18,
  },
  tabBarIconTicket: {
    height: 18,
    width: 30,
  },
  tabBarIconExplore: {
    height: 22,
    width: 25,
  },
  navigationContainer: {
    backgroundColor: white,
    borderBottomColor: borderColor,
  },
  headerTitle: {
    fontFamily: globalFontSemiBold,
    fontSize: headerFontSize,
  },
  headerLeftWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeftTitle: {
    color: primaryColor,
    fontFamily: globalFontRegular,
    fontSize: headerFontSize,
  },
  backButton: {
    color: primaryColor,
    fontSize: iconLargeFontSize,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...NavigationStyles, ...overrides})
}

export default {
  createStyles,
}

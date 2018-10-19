import {
  primaryColor,
  white,
  borderColor,
  sectionHeaderColor,
  iconFontSize,
  bodyFontSize,
  globalFontRegular,
  globalFontMedium,
  globalPadding,
  globalPaddingSmall,
  globalMarginSmall,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

const EventManagerStyles = {
  // ROW STYLES
  rowContainer: {
    alignItems: 'center',
    backgroundColor: white,
    borderColor: 'transparent',
    borderRadius: 30/2,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },

  // IMAGE STYLES
  img: {
    borderTopLeftRadius: 30/2,
    borderBottomLeftRadius: 30/2,
    height: 50,
    width: 50,
  },

  // HEADER STYLES
  sectionHeader: {
    color: sectionHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    marginBottom: globalMarginSmall,
  },
  cardSubHeader: {
    color: sectionHeaderColor,
    fontFamily: globalFontMedium,
    fontSize: bodyFontSize,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...EventManagerStyles, ...overrides})
}

export default {
  createStyles,
}

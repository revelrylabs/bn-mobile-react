import {
  white,
  boxShadowColor,
  sectionHeaderColor,
  globalFontRegular,
  bodyFontSize,
  iconFontSize,
  globalPadding,
  globalPaddingSmall,
  globalPaddingTiny,
  globalMargin,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const whiteTransparent = 'rgba(255, 255, 255, 0.8)'

export const headerFontSize = 28
export const bodyFontSizeSmall = 13

const TicketTransferStyles = {
  // CONTAINER STYLES
  cardContainer: {
    backgroundColor: white,
    borderRadius: 6,
    elevation: 8,
    // overflow: 'hidden',
    marginBottom: globalMargin,
    padding: globalPadding,
    shadowColor: boxShadowColor,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 145,
  },

  // TEXT STYLES
  header: {
    fontFamily: globalFontRegular,
    fontSize: headerFontSize,
    color: white,
    marginBottom: globalPaddingTiny,
  },
  detailsBottomHeader: {
    color: sectionHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSizeSmall,
    letterSpacing: 0.5,
  },
  detailsBottomText: {
    fontSize: bodyFontSize,
    paddingTop: globalPaddingTiny,
  },
  detailsLast: {
    textAlign: 'right',
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...TicketTransferStyles, ...overrides})
}

export default {
  createStyles,
}

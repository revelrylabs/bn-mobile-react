import {
  white,
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
  ticketContainer: {
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    overflow: 'hidden',
    marginTop: globalMargin,
    padding: globalPadding,
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 145,
  },
  ticketContainerBottom: {
    backgroundColor: white,
    marginTop: -10,
  },
  detailsContainerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: globalPaddingSmall + globalPaddingTiny,
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

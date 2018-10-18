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

const TicketStyles = {
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

  // IMAGE BKGD STYLES
  eventImage: {
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    height: 180,
    position: 'absolute',
    width: fullWidth,
  },
  eventImageOverlay: {
    height: 300,
    position: 'absolute',
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

  // ICON STYLES
  iconTicket: {
    color: white,
    fontSize: iconFontSize,
    marginRight: globalPaddingTiny,
  },
  iconTicketText: {
    color: white,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...TicketStyles, ...overrides})
}

export default {
  createStyles,
}

import {
  white,
  boxShadowColor,
  globalPaddingMedium,
  globalMargin,
  disabledColor,
  textColor,
  globalFontSize,
  globalFontRegular,
  globalPadding,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

const TicketTransferStyles = {
  // CONTAINER STYLES
  cardContainer: {
    backgroundColor: white,
    borderRadius: 6,
    elevation: 8,
    marginBottom: globalMargin,
    padding: globalPaddingMedium,
    shadowColor: boxShadowColor,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 3,
    width: fullWidth - 90,
  },
  qrCodeSmall: {
    height: 45,
    width: 45,
  },
  accountIconSmall: {
    height: 45,
    width: 45,
  },
  input: {
    color: textColor,
    alignContent: 'center',
    backgroundColor: disabledColor,
    borderColor: 'transparent',
    fontFamily: globalFontRegular,
    fontSize: globalFontSize,
    height: 50,
    paddingHorizontal: globalPadding,
    width: '80%',
    marginVertical: globalPadding,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...TicketTransferStyles, ...overrides})
}

export default {
  createStyles,
}

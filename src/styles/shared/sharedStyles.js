import {StyleSheet, Dimensions} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const primaryColor = '#FF20B1'
export const secondaryColor = '#707CED'
export const tertiaryColor = '#4EB0E5'
export const darkBlue = '#26375A'
export const white = '#FFF'
export const errorTextColor = '#FF0000'
export const textColor = '#1E1E1E'
export const backgroundColor = white
export const inputBackgroundColor = '#FAFAFA'
export const helpTextColor = '#666'
export const borderColor = '#DCDCDC'
export const primaryUnderlayColor = '#276C74'
export const secondaryUnderlayColor = '#276D90'
export const primaryTransparent = 'rgba(34, 107, 116, 0.5)'

export const createItemCameraColor = '#E3E3E3'

export const globalPaddingTiny = 5
export const globalPaddingSmall = 10
export const globalPadding = 20
export const globalPaddingMedium = 30
export const globalPaddingLarge = 40
export const globalPaddingLarger = 45
export const globalPaddingJumbo = 55
export const globalMarginSmall = 10
export const globalMargin = 20

export const globalFontRegular = 'opensans-Regular'
export const globalFontSemiBold = 'opensans-SemiBold'
export const globalFontBold = 'opensans-Bold'
export const globalFontItalic = 'opensans-Italic'

export const headerFontSize = 24
export const sectionHeaderFontSize = 18
export const bodyFontSize = 15
export const iconFontSize = 18
export const slideShowArrowFontSize = 32

const SharedStyles = {
  container: {
    backgroundColor: white,
    paddingHorizontal: globalPadding,
    paddingVertical: globalPadding,
    width: fullWidth,
    flexDirection: 'column',
  },
  halfContainer: {
    backgroundColor: white,
    paddingHorizontal: globalPaddingSmall,
    paddingVertical: globalPaddingSmall,
    width: fullWidth / 2,
    flexDirection: 'column',
  },
  halfRowContainer: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: globalPaddingSmall,
    paddingVertical: globalPadding,
    width: fullWidth / 2,
    flexDirection: 'row',
  },
  rowContainer: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: globalPaddingSmall,
    paddingVertical: globalPaddingTiny,
    width: fullWidth - globalPadding,
    flexDirection: 'column',
  },
  tinyCube: {
    width: bodyFontSize,
    height: bodyFontSize,
    marginRight: globalPaddingSmall,
    borderRadius: 3,
  },
  listArrowLink: {
    position: 'absolute',
    right: 0,
    top: 5,
  },
  chart: {
    width: fullWidth * 0.8,
    height: 130,
    resizeMode: 'cover',
  },
  paddingVerticalStandard: {
    paddingVertical: globalPadding,
  },
  scrollingContainer: {
    backgroundColor: white,
    paddingHorizontal: globalPaddingSmall,
    paddingVertical: globalPadding,
    paddingBottom: globalPadding,
    width: fullWidth,
  },
  noPaddingScrollingContainer: {
    backgroundColor: white,
    paddingHorizontal: globalPaddingSmall,
    paddingBottom: globalPadding,
    width: fullWidth,
  },
  FilterAnalyticsText: {
    flex: 1 / 4,
    marginBottom: globalPadding,
  },
  FilterAnalytics: {
    flex: 3 / 4,
  },
  AnalyticsFilterHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: globalPaddingSmall,
    width: fullWidth - 2 * globalPadding,
  },
  section: {
    paddingVertical: globalPaddingLarge,
  },
  activeNavigation: {
    backgroundColor: secondaryColor,
  },
  borderBottom: {
    flex: 1,
    flexDirection: 'column',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: globalPaddingMedium,
    paddingTop: globalPaddingMedium,
  },
  row: {
    paddingVertical: globalPadding,
  },
  paddingTopSmall: {
    paddingTop: globalPaddingSmall,
  },
  paddingVerticalSmall: {
    paddingVertical: globalPaddingSmall,
  },
  paddingBottomJumbo: {
    paddingBottom: globalPaddingJumbo,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: globalMarginSmall,
  },
  button: {
    backgroundColor: tertiaryColor,
    flex: 1,
    height: 50,
    justifyContent: 'center',
  },
  buttonSecondary: {
    backgroundColor: darkBlue,
    flex: 1,
    height: 50,
    justifyContent: 'center',
  },
  buttonTertiary: {
    backgroundColor: primaryColor,
    flex: 1,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    color: white,
    fontFamily: globalFontSemiBold,
    textAlign: 'center',
  },
  header: {
    backgroundColor: 'transparent',
    fontFamily: globalFontBold,
    fontSize: headerFontSize,
    paddingVertical: globalPadding,
    color: textColor,
  },
  headerLight: {
    backgroundColor: 'transparent',
    color: white,
    fontFamily: globalFontBold,
    fontSize: headerFontSize,
    paddingBottom: globalPadding,
  },
  sectionHeaderContainer: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: globalPaddingSmall,
  },
  lineHeight: {
    paddingBottom: globalPaddingTiny / 2,
  },
  halfColum: {
    flex: 1 / 2,
  },
  sectionHeader: {
    backgroundColor: 'transparent',
    fontFamily: globalFontSemiBold,
    fontSize: sectionHeaderFontSize,
    paddingVertical: globalPaddingSmall,
  },
  sectionHeaderLight: {
    backgroundColor: 'transparent',
    color: tertiaryColor,
    fontFamily: globalFontSemiBold,
    fontSize: sectionHeaderFontSize,
    paddingVertical: globalPadding,
  },
  bodyText: {
    backgroundColor: 'transparent',
    color: textColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    paddingBottom: globalPaddingSmall,
  },
  bodyTextLight: {
    backgroundColor: 'transparent',
    color: white,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    paddingBottom: globalPaddingSmall,
  },
  errorText: {
    backgroundColor: 'transparent',
    color: errorTextColor,
    fontFamily: globalFontItalic,
    fontSize: bodyFontSize - 2,
    marginTop: -5,
    paddingBottom: globalPadding,
  },
  errorTextLight: {
    backgroundColor: 'transparent',
    color: white,
    fontFamily: globalFontItalic,
    fontSize: bodyFontSize - 2,
    marginTop: -5,
    paddingBottom: globalPadding,
  },
  helpText: {
    backgroundColor: 'transparent',
    color: helpTextColor,
    fontFamily: globalFontItalic,
    fontSize: bodyFontSize - 2,
    marginTop: -5,
    paddingBottom: globalPaddingTiny,
  },
  iconLinkContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  iconLink: {
    backgroundColor: 'transparent',
    color: secondaryColor,
    fontSize: iconFontSize,
    paddingRight: globalPaddingTiny,
    paddingTop: globalPaddingTiny - 2,
  },
  iconLinkText: {
    color: secondaryColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
  },
  iconLinkContainerBack: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: globalPaddingLarger,
    paddingHorizontal: globalPaddingSmall,
  },
  iconLinkWhite: {
    backgroundColor: 'transparent',
    paddingRight: globalPaddingTiny,
  },
  iconLinkTextWhite: {
    color: white,
    fontFamily: globalFontSemiBold,
    fontSize: bodyFontSize,
  },
  slideShowArrowContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: globalPaddingSmall,
  },
  slideShowImage: {
    width: fullWidth - 20,
    height: 200,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...SharedStyles, ...overrides})
}

export default {
  createStyles,
}

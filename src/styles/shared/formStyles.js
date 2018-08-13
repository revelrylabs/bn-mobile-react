import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const primaryColor = '#FF20B1'
export const secondaryColor = '#707CED'
export const tertiaryColor = '#4EB0E5'
export const white = '#FFF'
export const errorTextColor = '#FF0000'
export const textColor = '#1E1E1E'
export const backgroundColor = white
export const inputBackgroundColor = '#FAFAFA'
export const disabledColor = '#F7F7F7'
export const helpTextColor = '#666'
export const borderColor = '#DCDCDC'
export const primaryTransparent = 'rgba(255, 34, 178, 0.5)'

export const globalPaddingTiny = 5
export const globalPaddingSmall = 10
export const globalPadding = 20
export const globalPaddingMedium = 30
export const globalPaddingLarge = 40
export const globalPaddingLarger = 45
export const globalPaddingJumbo = 55
export const globalMarginSmall = 10
export const globalMargin = 20

export const globalFontRegular = 'tt_commons_regular'
export const globalFontMedium = 'tt_commons_medium'
export const globalFontSemiBold = 'tt_commons_demibold'
export const globalFontBold = 'tt_commons_bold'
export const globalFontItalic = 'tt_commons_italic'

export const headerFontSize = 38
export const sectionHeaderFontSize = 21
export const bodyFontSize = 18
export const iconFontSize = 18
export const pickerItemHeight = 120

const FormStyles = {
  inputContainer: {
    paddingBottom: globalPadding,
  },
  halfInput: {
    color: textColor,
    backgroundColor: disabledColor,
    borderWidth: 1,
    borderStyle: 'solid',
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    height: 50,
    marginBottom: globalPaddingSmall + 5,
    paddingHorizontal: globalPadding,
    width: '50%',
    marginRight: globalPaddingSmall,
  },
  textAreaView: {
    alignContent: 'flex-start',
    backgroundColor: inputBackgroundColor,
    borderColor,
    borderWidth: 1,
    borderStyle: 'solid',
    height: 100,
    width: '100%',
    marginBottom: globalPaddingSmall + 5,
    paddingHorizontal: globalPaddingSmall,
    paddingTop: globalPaddingSmall,
  },
  textArea: {
    height: '100%',
    justifyContent: 'center',
    textAlignVertical: 'top',
    color: textColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
  },
  textAreaInput: {
    color: textColor,
    backgroundColor: disabledColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    flex: 1,
  },
  input: {
    color: textColor,
    alignContent: 'center',
    backgroundColor: disabledColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    height: 40,
    marginBottom: globalPaddingSmall + 5,
    paddingHorizontal: globalPadding,
    width: '100%',
  },
  inputLabel: {
    backgroundColor: 'transparent',
    color: textColor,
    fontFamily: globalFontSemiBold,
    fontSize: bodyFontSize,
    fontWeight: '500',
    paddingBottom: globalPaddingTiny,
  },
  inputText: {
    color: textColor,
    position: 'absolute',
    textAlign: 'left',
    marginTop: 0,
    paddingLeft: globalPadding,
  },
  arrowLink: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    textAlign: 'right',
    paddingRight: globalPadding,
  },
  placeholder: {
    position: 'absolute',
    textAlign: 'left',
    marginTop: -10,
    paddingLeft: globalPadding,
    color: textColor,
    opacity: 0.5,
  },
  checkboxIconContainer: {
    alignItems: 'flex-start',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxIconContainerLast: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: globalPadding,
  },
  iconLinkContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: globalPadding,
  },
  iconLinkContainerFirst: {
    alignItems: 'center',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: globalPadding,
  },
  iconLinkWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
  },
  iconLink: {
    color: inputBackgroundColor,
    fontSize: iconFontSize,
    paddingRight: globalPaddingTiny,
  },
  iconLinkText: {
    color: inputBackgroundColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize - 3,
    textAlign: 'center',
  },
  iconLinkActive: {
    color: tertiaryColor,
    fontSize: iconFontSize,
    paddingRight: globalPaddingTiny,
  },
  iconLinkTextActive: {
    color: tertiaryColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize - 3,
    textAlign: 'center',
  },
  checkBoxHelpText: {
    color: inputBackgroundColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    paddingBottom: globalPaddingTiny,
  },
  checkBoxContainer: {
    flex: 1,
    padding: 1,
    justifyContent: 'center',
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...FormStyles, ...overrides})
}

export default {
  createStyles,
}

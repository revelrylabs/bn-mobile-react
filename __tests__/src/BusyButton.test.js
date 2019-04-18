import React from 'react'
import {Text, TouchableHighlight} from 'react-native'
import {render} from 'react-native-testing-library'
import BusyButton from '../../src/BusyButton'

it('renders', () => {
  const {queryByType, queryByText} = render(
    <BusyButton>
      <Text>Hi</Text>
    </BusyButton>
  )

  expect(queryByType(TouchableHighlight)).not.toBeNull()
  expect(queryByText('Hi')).not.toBeNull()
  expect(queryByText('Loading')).toBeNull()
})

it('renders default busy content when busy', () => {
  const {queryByText} = render(
    <BusyButton isBusy>
      <Text>Hi</Text>
    </BusyButton>
  )

  expect(queryByText('Loading')).not.toBeNull()
  expect(queryByText('Hi')).toBeNull()
})

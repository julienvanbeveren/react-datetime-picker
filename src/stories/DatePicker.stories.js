import React from 'react'
import { storiesOf } from '@storybook/react'

import { DatePicker } from '../components/DatePicker'

const stories = storiesOf('DatePicker Test', module)

stories.add('DatePicker', () => {
    return <DatePicker />
})
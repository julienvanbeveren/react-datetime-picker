import React from 'react'
import { storiesOf } from '@storybook/react'

import { DatePicker } from '../components/DatePicker'

const stories = storiesOf('DatePicker Test', module)

stories.add('DatePicker', () => {
    return (
    <div style={{ 
        width: '100%', height: '100vh', backgroundColor: '#white', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
        <DatePicker />
    </div>
    )
})
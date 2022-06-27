import React from 'react'
import { storiesOf } from '@storybook/react'

import { DatePicker } from '../components/date-picker'

const stories = storiesOf('DatePicker Test', module)

stories.add('DatePicker', () => {

    function handleChange(date) {
        console.log(date)
    }


    return (
    <div style={{ 
        width: '100%', height: '100vh', backgroundColor: '#white', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
        <DatePicker submitOnChange onChange={handleChange} defaultValue={new Date()}/>
    </div>
    )
})
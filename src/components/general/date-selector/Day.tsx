import React from 'react'
import { DayType } from '../../helpers'

interface DayProps {
    data: DayType
    selected?: DayType
    handleSelectDay: (day: DayType) => any
}

export function Day({ data, selected, handleSelectDay }: DayProps) {
    

    return (
        <td 
            onClick={e => handleSelectDay(data)} 
            className={
                `rdp calendar-day 
                ${data.date.getTime() == selected?.date.getTime() ? 'selected' : ''}
                ${data.currentMonth ? '' : 'different-month'}
            `}>
            {data.date.getDate()}
        </td>
    )
}

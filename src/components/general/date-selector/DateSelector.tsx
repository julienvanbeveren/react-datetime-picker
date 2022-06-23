import { useState } from 'react'
import * as f from '../../helpers'
import { Day } from './Day'

interface DateSelectorProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function DateSelector({ open, setOpen }: DateSelectorProps) {

    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    const [selected, setSelected] = useState<f.DayType | undefined>(undefined)

    const thisMonthData = f.getMonth(2022, 1)
    const thisMonthChunks: f.DayType[][] = f.getSplittedMonthArray(thisMonthData)

    function handleSelectDay(day: f.DayType) {
        if (!selected) {
            setSelected(day)
            return
        }
        else if (selected.date.getTime() == day.date.getTime()) {
            setSelected(undefined)
        }
        else {
            setSelected(day)
        }
    }


    return (
        <div 
            className={`rdp date-picker-wrapper ${open ? 'open' : 'closed'}`}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="rdp date-picker-header">
                <div className="rdp scroll-arrow left"></div>
                <h3 className="rdp month-year"></h3>
                <div className="rdp scroll-arrow right"></div>
            </div>
            <table className="rdp date-picker table">
                    <tr>
                        {days.map((day, i) => {
                            return <th className="rdp calendar-day-title" key={i}>{day}</th>
                        })}
                    </tr>
            </table>
            <table className="rdp date-picker table">
                    {thisMonthChunks.map((row, i) => {
                        return (
                            <tr key={i}>
                                {row.map((day, i) => {
                                    return <Day selected={selected} data={day} key={i} handleSelectDay={handleSelectDay}/>
                                })}
                            </tr>
                        )
                    })}
            </table>
            <div className="rdp date-picker-buttons-wrapper">
                <button className="rdp button secondary-button">Cancel</button>
                <button onClick={e => setOpen(false)} className="rdp button primary-button">Apply</button>
            </div>
        </div>
    )
}
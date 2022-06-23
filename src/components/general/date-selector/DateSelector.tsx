import { useEffect, useState } from 'react'
import * as f from '../../helpers'
import { Day } from './Day'

interface DateSelectorProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function DateSelector({ open, setOpen }: DateSelectorProps) {

    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const [selected, setSelected] = useState<f.DayType | undefined>(undefined)
    const [months, setMonths] = useState<f.DayType[][][]>([])
    const [currentMonth, setCurrentMonth] = useState<f.DayType[][]>(f.getSplittedMonthArray(f.getMonth(2022, new Date().getMonth())))

    useEffect(() => {
        const currentMonthNumber = currentMonth[2][3].date.getMonth()
        const currentYearNumber = currentMonth[2][3].date.getFullYear()
        const previousData = f.getPreviousMonth(currentYearNumber, currentMonthNumber)
        const nextData = f.getNextMonth(currentYearNumber, currentMonthNumber)
        let chunk1 =  f.getSplittedMonthArray(f.getMonth(previousData.year, previousData.month))
        let chunk2 = currentMonth
        let chunk3 = f.getSplittedMonthArray(f.getMonth(nextData.year, nextData.month))
        setMonths([chunk1, chunk2, chunk3])
    }, [currentMonth])

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
                <h3 className="rdp month-year">
                    {monthNames[thisMonthData[15].date.getMonth()]} {thisMonthData[15].date.getFullYear()}
                </h3>
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
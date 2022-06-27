import CalendarIcon from '../../../assets/CalendarIcon'
import ArrowIcon from '../../../assets/ArrowIcon'
import { useDatePicker } from '../../date-picker'
import { getFormattedNumber } from '../../helpers'
import {useEffect, useState} from 'react'
interface PickerTriggerProps {
    children: React.ReactNode
    onClick: () => any
    open: boolean
}



export function PickerTrigger({ children, onClick, open }: PickerTriggerProps) {

    const { selected } = useDatePicker()
    return (
        <div className="rdp picker-trigger" onClick={onClick}>
            <div className="rdp picker-trigger-icon">
                <CalendarIcon />
            </div>
            <div className="rdp picker-trigger-main">
                <p className="rdp picker-select-text">
                    Select a day
                </p>
                <h2 className="rdp picker-date">
                    {selected && 
                    getFormattedNumber(selected?.date.getDate()) + '.' +
                    getFormattedNumber(selected?.date.getMonth()) + '.' +
                    selected?.date.getFullYear()}
                    &nbsp;
                </h2>
            </div>
            <div className={`rdp picker-trigger-arrow ${open ? 'open' : 'closed'}`}>
                <ArrowIcon />
            </div>
            {children}
        </div>
    )
}
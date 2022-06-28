import { createContext, useContext, useRef, useState } from "react"
import { PickerTrigger } from "../general/picker-trigger"
import { DateSelector } from "../general/date-selector"
import '../../styles.css'
import { DayType, getBaseDay } from "../helpers"

interface DatePickerProps {
    onChange?: (date: Date | undefined) => any
    minDate?: Date
    maxDate?: Date
    defaultValue?: Date
    submitOnChange?: boolean
}

const DatePickerContext = createContext<useDatePickerProps>({})

export function useDatePicker() {
    return useContext(DatePickerContext)
}

interface useDatePickerProps extends DatePickerProps {
    pickerOpen?: boolean
    setPickerOpen?: React.Dispatch<React.SetStateAction<boolean>>
    selected?: DayType | undefined
    setSelected?: React.Dispatch<React.SetStateAction<DayType | undefined>>
}

export function DatePicker({ onChange, minDate, submitOnChange, maxDate, defaultValue }: DatePickerProps) {
    
    const [pickerOpen, setPickerOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<DayType | undefined>( defaultValue && { date: getBaseDay(defaultValue) } || undefined)


    const value: useDatePickerProps = {
        pickerOpen,
        setPickerOpen,
        selected,
        setSelected,
        minDate,
        maxDate,
        defaultValue,
        submitOnChange,
    }

    return (
        <DatePickerContext.Provider value={value}>
            <PickerTrigger 
                onClick={() => setPickerOpen(prev => !prev)}
                open={pickerOpen}
            >
                <DateSelector 
                    open={pickerOpen}
                    setOpen={setPickerOpen}
                    onChange={onChange || undefined}
                />
            </PickerTrigger>
        </DatePickerContext.Provider>
    )
}
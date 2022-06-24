import { useRef, useState } from "react"
import { PickerTrigger } from "../general/picker-trigger"
import { DateSelector } from "../general/date-selector"
import '../../styles.css'
import { DayType } from "../helpers"

interface DatePickerProps {
    onChange?: (date: Date | undefined) => any
}



export function DatePicker({ onChange }: DatePickerProps) {
    
    const triggerRef = useRef<any>()
    const [pickerOpen, setPickerOpen] = useState<boolean>(false)

    return (
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
    )
}
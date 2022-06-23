import { useState } from "react"
import { PickerTrigger } from "../general/picker-trigger"
import { DateSelector } from "../general/date-selector"
import '../../styles.css'

export const DatePicker = () => {
    
    const [pickerOpen, setPickerOpen] = useState<boolean>(false)

    return (
        <PickerTrigger 
            onClick={() => setPickerOpen(prev => !prev)}
            open={pickerOpen}
        >
            <DateSelector 
                open={pickerOpen}
                setOpen={setPickerOpen}
            />
        </PickerTrigger>
    )
}
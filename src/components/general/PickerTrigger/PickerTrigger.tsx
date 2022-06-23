import calendarIcon from '../../../assets/calendar.svg'
import arrowIcon from '../../../assets/arrow.svg'


export const PickerTrigger = () => {
    return (
        <div className="rdp picker-trigger">
            <div className="rdp picker-trigger-icon">
                <img src={calendarIcon} alt="" />
            </div>
            <div className="rdp picker-trigger-main">
                <p className="rdp picker-select-text">
                    Select a day
                </p>
                <h2 className="rdp picker-date">
                    27.09.2021
                </h2>
            </div>
            <div className="rdp picker-trigger-arrow">
                <img src={arrowIcon} alt="" />
            </div>
        </div>
    )
}
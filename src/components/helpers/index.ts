export function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayInMonth(year: number, month: number) {
    return new Date(year, month, 0).getDay();
}

export function getDayObject(year: number, month: number, day: number, currentMonth: boolean) {
    return { 
        date: new Date(year, month, day),
        currentMonth: currentMonth
    }
}

export function getPreviousMonth(year: number, month: number) {
    if (month - 1 < 0) {
        return {
            month: 11,
            year: year - 1,
            days: getDaysInMonth(year - 1, 11)
        }
    }
    return { month: month - 1, year: year, days: getDaysInMonth(year, month - 1) }
}

export function getNextMonth(year: number, month: number) {
    if (month + 1 > 11) {
        return {
            month: 0,
            year: year + 1,
            days: getDaysInMonth(year + 1, 1)
        }
    }
    return { month: month + 1, year: year, days: getDaysInMonth(year, month + 1) }
}

export interface DayType {
    date: Date;
    currentMonth: boolean;
}

export function getMonth(year: number, month: number) {
    const dayCount = getDaysInMonth(year, month)
    const firstDay = getFirstDayInMonth(year, month)

    const days = []
    let previousMonth = getPreviousMonth(year, month)
    for (let i = 0; i < firstDay; i++) {
        days.unshift(getDayObject(previousMonth.year, previousMonth.month, previousMonth.days - i, false))
    }
    for (let i = 1; i < dayCount + 1; i ++) {
        days.push(getDayObject(year, month, i, true))
    }
    let daysAfterMonth = 35 - days.length
    let nextMonth = getNextMonth(year, month)
    for (let i = 1; i < daysAfterMonth + 1; i++) {
        days.push(getDayObject(nextMonth.year, nextMonth.month, i, false))
    }
    return days
}

export function getSplittedMonthArray(days: DayType[]) {
    let newDaysArray: DayType[][] = []
    for (let i = 0; i < 5; i++) {
        let tempArray: any = []
        for (let l = i * 7; l < i * 7 + 7; l++) {
            tempArray.push(days[l])
        }
        newDaysArray.push(tempArray)
    }
    return newDaysArray
}

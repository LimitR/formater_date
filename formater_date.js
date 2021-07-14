class DATEFORMATER { 
    constructor(date, day){
    switch(date){
        case 'now':
            this.date = new Date()
        break
        case 'lastDay':
            this.date = new Date(Date.now() - 86400000 * day)
        break
        
        case 'time':
            this.date = new Date(Date.now() - 3600000 * day)
        break
    }
    }
    formatNumber(string, lastDay = 0){
        var nullForDay = ""
        var nullForMonth = ""
        this.date = new Date(Date.now() - 86400000 * lastDay)
        switch(string){
            case 'DDMMYY':
                if(this.date.getMonth() < 10){
                    nullForMonth = 0
                }
                return +`${nullForDay}${this.date.getDate()}${nullForMonth}${this.date.getMonth()+1}${this.date.getFullYear().toString().slice(2)}`
            break
            case 'MMDDYY':
                if(this.date.getDate() < 10){
                    nullForDay = 0
                }
                return +`${nullForMonth}${this.date.getMonth()+1}${nullForDay}${this.date.getDate()}${this.date.getFullYear().toString().slice(2)}`
            break
            case 'DDMMYYYY':
                if(this.date.getDate() < 10){
                    nullForDay = 0
                }
                if(this.date.getMonth() < 10){
                    nullForMonth = 0
                }
                return +`${nullForDay}${this.date.getDate()}${nullForMonth}${this.date.getMonth()+1}${this.date.getFullYear()}`
            break
            case 'MMDDYYYY':
                if(this.date.getDate() < 10){
                    nullForDay = 0
                }
                if(this.date.getMonth() < 10){
                    nullForMonth = 0
                }
                return +`${nullForMonth}${this.date.getMonth()+1}${del}${nullForDay}${this.date.getDate()}${del}${this.date.getFullYear()}`
            break
        }

    }
    formatString(string, lastDay = 0, del = ''){
        this.date = new Date(Date.now() - 86400000 * lastDay)
        var nullForDay = ""
        var nullForMonth = ""
        switch(string){
            case 'DDMMYY':
                if(this.date.getDate() < 10){
                    nullForDay = 0
                }
                if(this.date.getMonth() < 10){
                    nullForMonth = 0
                }
                return `${nullForDay}${this.date.getDate()}${del}${nullForMonth}${this.date.getMonth()+1}${del}${this.date.getFullYear().toString().slice(2)}`
            break
            case 'MMDDYY':
                if(this.date.getDate() < 10){
                    nullForDay = 0
                }
                if(this.date.getMonth() < 10){
                    nullForMonth = 0
                }
                return `${nullForMonth}${this.date.getMonth()+1}${del}${nullForDay}${this.date.getDate()}${del}${this.date.getFullYear().toString().slice(2)}`
            break
            case 'DDMMYYYY':
                if(this.date.getDate() < 10){
                    nullForDay = 0
                }
                if(this.date.getMonth() < 10){
                    nullForMonth = 0
                }
                return `${nullForDay}${this.date.getDate()}${del}${nullForMonth}${this.date.getMonth()+1}${del}${this.date.getFullYear()}`
            break
            case 'MMDDYYYY':
                if(this.date.getDate() < 10){
                    nullForDay = 0
                }
                if(this.date.getMonth() < 10){
                    nullForMonth = 0
                }
                return `${nullForMonth}${this.date.getMonth()+1}${del}${nullForDay}${this.date.getDate()}${del}${this.date.getFullYear()}`
            break
        }
    }
    formatTime(string, lastHour = 0, del = ''){
        var nullForHours = ""
        var nullForMinutes = ""
        var nullForSeconds = ""
        var nullForMilliseconds = ""
        this.date = new Date(Date.now() - 3600000 * lastHour)
        if(this.date.getHours() < 10){
            nullForHours = 0
        }
        if(this.date.getMinutes() < 10){
            nullForMinutes = 0
        }
        if(this.date.getSeconds() < 10){
            nullForSeconds = 0
        }
        if(this.date.getMilliseconds() < 10){
            nullForMilliseconds = 0
        }
        switch(string){
            case 'HHMMSS':
                return `${nullForHours}${this.date.getHours()}${del}${nullForMinutes}${this.date.getMinutes()}${del}${nullForSeconds}${this.date.getSeconds()}`
        }
        switch(string){
            case 'HHMMSSMsMs':
                return `${nullForHours}${this.date.getHours()}${del}${nullForMinutes}${this.date.getMinutes()}${del}${nullForSeconds}${this.date.getSeconds()}${del}${nullForMilliseconds}${this.date.getMilliseconds()}`
        }
    }
}

module.exports = DATEFORMATER
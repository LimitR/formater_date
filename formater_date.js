class DATEFORMATER { 
    constructor(date, day){
    switch(date){
        case 'now':
            this.date = new Date()
        break
        case 'lastDay':
            this.date = new Date(Date.now() - 86400000 * day)
        break
        }
    }
    formatNumber(string, lastDay = 0){
        var nullForDay = ""
        var nullForMonth = ""
        this.date = new Date(Date.now() - 86400000 * lastDay)
        switch(string){
            case 'ru':
                if(this.date.getMonth() < 10){
                    nullForMonth = 0
                }
                return +`${nullForDay}${this.date.getDate()}${nullForMonth}${this.date.getMonth()+1}${this.date.getFullYear().toString().slice(2)}`
                break
            case 'usa':
                if(this.date.getDate() < 10){
                    nullForDay = 0
                }
                return +`${nullForMonth}${this.date.getMonth()+1}${nullForDay}${this.date.getDate()}${this.date.getFullYear().toString().slice(2)}`
                break
        }

    }
    formatString(string, lastDay = 0, del = ''){
        this.date = new Date(Date.now() - 86400000 * lastDay)
        var nullForDay = ""
        var nullForMonth = ""
        switch(string){
            case 'ru':
                if(this.date.getDate() < 10){
                    nullForDay = 0
                }
                if(this.date.getMonth() < 10){
                    nullForMonth = 0
                }
                return `${nullForDay}${this.date.getDate()}${del}${nullForMonth}${this.date.getMonth()+1}${del}${this.date.getFullYear().toString().slice(2)}`
                break
            case 'usa':
                if(this.date.getDate() < 10){
                    nullForDay = 0
                }
                if(this.date.getMonth() < 10){
                    nullForMonth = 0
                }
                return `${nullForMonth}${this.date.getMonth()+1}${del}${nullForDay}${this.date.getDate()}${del}${this.date.getFullYear().toString().slice(2)}`
                break
        }
    }
}

module.exports = DATEFORMATER
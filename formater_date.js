// Константы для использования 
const dayInMill = 86400000 // Сутки 
const oneHours = 3600000 // Час
const yearsInMill = 31536000000 // Год


class DATEFORMATER { 
    constructor(date, day){
    switch(date){
        case 'now':
            this.date = new Date()
        break
        case 'lastDay':
            this.date = new Date(Date.now() - dayInMill * day)
        break
        
        case 'time':
            this.date = new Date(Date.now() - oneHours * day)
        break
        
        case 'myValue':
            this.date = date
        break
        case undefined:
            this.date = null
        break

            
        }}


    formatNumber(text, lastDay = 0){
        let nullForDay = ""
        let nullForMonth = ""
        let nullForYear = ""
        let one = new Date(Date.now() - dayInMill * (-lastDay))
        let two = new Date(Date.now() - dayInMill * (-lastDay))
        let tree = new Date(Date.now() - dayInMill * (-lastDay))
        text = text.match(/.{1,2}/g);
    
        switch(text[0]){
            case 'DD':
                one = one.getDate()
            break
        }
        switch(text[1]){
            case 'DD':
                two = two.getDate()
                break
        }
        switch(text[2]){
            case 'DD':
                tree = tree.getDate()
                break
        }
        switch(text[0]){
            case 'MM':
                one = one.getMonth() +1
                break
        }
        switch(text[1]){
            case 'MM':
                two = two.getMonth()+1
                break
        }
        switch(text[2]){
            case 'MM':
                tree = tree.getMonth()+1
                break
        }
        switch(text[0]){
            case 'YY':
                if(text[3] != undefined){
                    one = one.getFullYear().toString()
                }else{
                    one = one.getFullYear().toString().slice(2)
                }
                break
        }
        switch(text[1]){
            case 'YY':
                if(text[3] != undefined){
                    two = two.getFullYear().toString()
                }else{
                    two = two.getFullYear().toString().slice(2)
                }
                break
        }
        switch(text[2]){
            case 'YY':
                if(text[3] != undefined){
                    tree = tree.getFullYear().toString()
                }else{
                    tree = tree.getFullYear().toString().slice(2)
                }              
                break
        }
        if(one < 10){
            nullForDay = 0
        }
        if(two < 10){
            nullForMonth = 0
        }
        if(tree < 10){
            nullForYear = 0
        }
    
        return +`${nullForDay}${one}${nullForMonth}${two}${nullForYear}${tree}`
    }
    formatString(text, del = '', lastDay = 0) {
        let nullForDay = ""
        let nullForMonth = ""
        let nullForYear = ""
        let one = new Date(Date.now() - dayInMill * (-lastDay))
        let two = new Date(Date.now() - dayInMill * (-lastDay))
        let tree = new Date(Date.now() - dayInMill * (-lastDay))
        text = text.match(/.{1,2}/g);
    
        switch(text[0]){
            case 'DD':
                one = one.getDate()
            break
        }
        switch(text[1]){
            case 'DD':
                two = two.getDate()
                break
        }
        switch(text[2]){
            case 'DD':
                tree = tree.getDate()
                break
        }
        switch(text[0]){
            case 'MM':
                one = one.getMonth() +1
                break
        }
        switch(text[1]){
            case 'MM':
                two = two.getMonth()+1
                break
        }
        switch(text[2]){
            case 'MM':
                tree = tree.getMonth()+1
                break
        }
        switch(text[0]){
            case 'YY':
                if(text[3] != undefined){
                    one = one.getFullYear().toString()
                }else{
                    one = one.getFullYear().toString().slice(2)
                }
                break
        }
        switch(text[1]){
            case 'YY':
                if(text[3] != undefined){
                    two = two.getFullYear().toString()
                }else{
                    two = two.getFullYear().toString().slice(2)
                }
                break
        }
        switch(text[2]){
            case 'YY':
                if(text[3] != undefined){
                    tree = tree.getFullYear().toString()
                }else{
                    tree = tree.getFullYear().toString().slice(2)
                }              
                break
        }
        if(one < 10){
            nullForDay = 0
        }
        if(two < 10){
            nullForMonth = 0
        }
        if(tree < 10){
            nullForYear = 0
        }
    
        return `${nullForDay}${one}${del}${nullForMonth}${two}${del}${nullForYear}${tree}`
    }
    formatTime(string, del = '', lastHour = 0){
        let nullForHours = ""
        let nullForMinutes = ""
        let nullForSeconds = ""
        let nullForMilliseconds = ""
        this.date = new Date(Date.now() - oneHours * (-lastHour))
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
            case 'hhmmss':
                return `${nullForHours}${this.date.getHours()}${del}${nullForMinutes}${this.date.getMinutes()}${del}${nullForSeconds}${this.date.getSeconds()}`
        }
        switch(string){
            case 'hhmm':
                return `${nullForHours}${this.date.getHours()}${del}${nullForMinutes}${this.date.getMinutes()}`
        }
        switch(string){
            case 'hhmmssMsMs':
                return `${nullForHours}${this.date.getHours()}${del}${nullForMinutes}${this.date.getMinutes()}${del}${nullForSeconds}${this.date.getSeconds()}${del}${nullForMilliseconds}${this.date.getMilliseconds()}`
        }
        }
        formatTimer(text, func = returnValueTrue){
            text = text.split(':');
            let hours_timer = +text[0]
            let minutes_timer = +text[1]
            let seconds_timer = +text[2]
            let sumFullTimeMillis = (hours_timer * 60 * 60 * 1000) + (minutes_timer * 60 * 1000) + (seconds_timer * 1000)
            let sumFullTimeMillisForInterval = sumFullTimeMillis

            setTimeout(() => {
                func()
            }, sumFullTimeMillisForInterval);


        }

    formatMillis(string, del = '', lastDay){
        let date = new Date(lastDay)
        let nullForDay = ""
        let nullForMonth = ""
        switch(string){
            case 'DDMMYY':
                if(date.getDate() < 10){
                    nullForDay = 0
                }
                if(date.getMonth() < 10){
                    nullForMonth = 0
                }
                return `${nullForDay}${date.getDate()}${del}${nullForMonth}${date.getMonth()+1}${del}${date.getFullYear().toString().slice(2)}`
            break
            case 'MMDDYY':
                if(date.getDate() < 10){
                    nullForDay = 0
                }
                if(date.getMonth() < 10){
                    nullForMonth = 0
                }
                return `${nullForMonth}${date.getMonth()+1}${del}${nullForDay}${date.getDate()}${del}${date.getFullYear().toString().slice(2)}`
            break
            case 'DDMMYYYY':
                if(date.getDate() < 10){
                    nullForDay = 0
                }
                if(date.getMonth() < 10){
                    nullForMonth = 0
                }
                return `${nullForDay}${date.getDate()}${del}${nullForMonth}${date.getMonth()+1}${del}${date.getFullYear()}`
            break
            case 'MMDDYYYY':
                if(date.getDate() < 10){
                    nullForDay = 0
                }
                if(date.getMonth() < 10){
                    nullForMonth = 0
                }
                return `${nullForMonth}${date.getMonth()+1}${del}${nullForDay}${date.getDate()}${del}${date.getFullYear()}`
            break
        }
        }

    formatParse(string){
        let y = new Date()
        let r
        let yearsForUser
        //Вывод из произвольной даты читаемую в нужном формате (от стандартной, до миллисекунд)
        let rTime = /0[0-9]{1}[:]0[0-9]{1}|[0-9]{2}[:][0-9]{2}/
        let rDate = /0[0-9]{1}[.]0[0-9]{1}[.]0[0-9]{1}|[0-9]{2}[.][0-9]{2}[.][0-9]{2}|0[0-9]{1}[,]0[0-9]{1}[,]0[0-9]{1}|[0-9]{2}[,][0-9]{2}[,][0-9]{2}/
        let rDays = /понедельник|вторник|среда|четверг|пятница|суббота|воскресенье/
        let mouth = [31,28,31,30,31,30,31,31,30,31,30,31]

        
        if(rDays.test(string)){
            return 'Смотришь день недели'
        }
        if(rTime.test(string)){
            return 'Смотришь время'
        }


        if(rDate.test(string)){
            let dayFotMouth = 0
            let _string = string.split('.'||',')
            for (let i =0; i < _string[1] - 1;i++){
            dayFotMouth = dayFotMouth + mouth[i]
            }
           let p = (+dayFotMouth + +_string[0]) * dayInMill

           if(+_string[2] == +y.getFullYear().toString().slice(2)){
            r = +_string[2] + 2000
             yearsForUser = (r - 1970) * yearsInMill
           }
            return yearsForUser + p + (dayInMill * 12) // Высокосные когда. Нужно исправить, дабы обновлялось автоматически
        }
    }


}


function returnValueTrue(){
    return true
}

module.exports = DATEFORMATER


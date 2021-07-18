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


    formatNumber(text1, lastDay = 0){
        let text
        let one = new Date(Date.now() - (-lastDay) * dayInMill)
        let nullForDay = ""
        let nullForMonth = ""
        let nullForYear = ""
        text = text1.match(/.{1,2}/g);
        let t = text1.match(/Y{4}/)
    
        let index_year = -1
        let index_fullYear = -1
    
        if(t == null){
            index_year = text.indexOf('YY')
        }else{
            index_fullYear = text.indexOf('YY')
        }
        if (index_year !== -1) {
            text[index_year] = one.getFullYear().toString().slice(2)
        }
        if (index_fullYear !== -1) {
            text[index_fullYear] = one.getFullYear()
            text.splice(index_fullYear + 1,1)
        }
        let index_day = text.indexOf('DD')
        let index_mes = text.indexOf('MM')
        if (index_day !== -1) {
            text[index_day] = one.getDate();
        }
        if (index_mes !== -1) {
            text[index_mes] = one.getMonth() + 1;
        }
        if(text[0] < 10){
            nullForDay = 0
        }
        if(text[1] < 10){
            nullForMonth = 0
        }
        if(text[2] < 10){
            nullForYear = 0
        }
    
    
       return +`${nullForDay}${text[0]}${nullForMonth}${text[1]}${nullForYear}${text[2]}`
    }
    formatString(text1, del = '', lastDay = 0) {
        let text
        let one = new Date(Date.now() - (-lastDay) * dayInMill)
        let nullForDay = ""
        let nullForMonth = ""
        let nullForYear = ""
        text = text1.match(/.{1,2}/g);
        let t = text1.match(/Y{4}/)
    
        let index_year = -1
        let index_fullYear = -1
    
        if(t == null){
            index_year = text.indexOf('YY')
        }else{
            index_fullYear = text.indexOf('YY')
        }
        if (index_year !== -1) {
            text[index_year] = one.getFullYear().toString().slice(2)
        }
        if (index_fullYear !== -1) {
            text[index_fullYear] = one.getFullYear()
            text.splice(index_fullYear + 1,1)
        }
        let index_day = text.indexOf('DD')
        let index_mes = text.indexOf('MM')
        if (index_day !== -1) {
            text[index_day] = one.getDate();
        }
        if (index_mes !== -1) {
            text[index_mes] = one.getMonth() + 1;
        }
        if(text[0] < 10){
            nullForDay = 0
        }
        if(text[1] < 10){
            nullForMonth = 0
        }
        if(text[2] < 10){
            nullForYear = 0
        }
    
    
       return `${nullForDay}${text[0]}${del}${nullForMonth}${text[1]}${del}${nullForYear}${text[2]}`
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
            return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    resolve(func()) 
                  }, sumFullTimeMillis);
            })
        }


    formatMillis(text1, del = '', lastDay){
        let text
        let one = new Date(lastDay)
        let nullForDay = ""
        let nullForMonth = ""
        let nullForYear = ""
        text = text1.match(/.{1,2}/g);
        let t = text1.match(/Y{4}/)
    
        let index_year = -1
        let index_fullYear = -1
    
        if(t == null){
            index_year = text.indexOf('YY')
        }else{
            index_fullYear = text.indexOf('YY')
        }
        if (index_year !== -1) {
            text[index_year] = one.getFullYear().toString().slice(2)
        }
        if (index_fullYear !== -1) {
            text[index_fullYear] = one.getFullYear()
            text.splice(index_fullYear + 1,1)
        }
        let index_day = text.indexOf('DD')
        let index_mes = text.indexOf('MM')
        if (index_day !== -1) {
            text[index_day] = one.getDate();
        }
        if (index_mes !== -1) {
            text[index_mes] = one.getMonth() + 1;
        }
        if(text[0] < 10){
            nullForDay = 0
        }
        if(text[1] < 10){
            nullForMonth = 0
        }
        if(text[2] < 10){
            nullForYear = 0
        }
        switch(text1){
            case 'hhmmss':
                if(date.getHours() < 10){
                    nullForDay = 0
                }
                if(date.getMinutes() < 10){
                    nullForMonth = 0
                }
                if(date.getSeconds() < 10){
                    nullForMonth1 = 0
                }
                if(date.getSeconds() <= 0){
                    return true
                }else{
                    return `${nullForDay}${date.getHours() - 3}${del}${nullForMonth}${date.getMinutes()}${del}${nullForMonth1}${date.getSeconds()}`
                }
            break
        }
    
       return `${nullForDay}${text[0]}${del}${nullForMonth}${text[1]}${del}${nullForYear}${text[2]}`
        
        // }
        
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
            string = string.split(':');
            let hours_timer = +string[0]
            let minutes_timer = +string[1]
            let seconds_timer = +string[2]
            let sumFullTimeMillis = (hours_timer * 60 * 60 * 1000) + (minutes_timer * 60 * 1000) + (seconds_timer * 1000)
            return sumFullTimeMillis
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
           }if(+_string[2] == +y.getFullYear().toString()){
            yearsForUser = (+_string[2] - 1970) * yearsInMill
           }
            return yearsForUser + p + (dayInMill * 12) // Высокосные года. Нужно исправить, дабы обновлялось автоматически
        }
    }


}


function returnValueTrue(){
    return true
}

module.exports = DATEFORMATER


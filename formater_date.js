// Константы для использования 
const dayInMill = 86400000      // Сутки 
const oneHours = 3600000        // Час
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
        if (text.length == 3){
            return `${nullForDay}${text[0]}${del}${nullForMonth}${text[1]}${del}${nullForYear}${text[2]}`
        }
        if (text.length == 2){
            return `${nullForDay}${text[0]}${del}${nullForMonth}${text[1]}`
        }
        if (text.length == 1){
            return `${nullForDay}${text[0]}`
        }
    
    //    return +`${nullForDay}${text[0]}${nullForMonth}${text[1]}${nullForYear}${text[2]}`
    }
    formatString(text1, del = '', lastDay = 0) {
        if(typeof(del) != 'string' && lastDay == 0){
            lastDay = del
            del = ''
        }
        if(typeof(lastDay) === 'string' && typeof(del) != 'string'){
            let y = del
            del = lastDay
            lastDay = y
        }
        let text
        if(del.length > 0){
            del = del.match(/.{1}/g)
        }else{
            del = ['','','','','']
        }
        

        if(del.length < 2 && del.length > 0){
            for(let i = 0; i < 10; i++){
                del.push(del[del.length - 1])
            }
        }if(del.length > 2){
            for(let i = 0; i < 10; i++){
                del.push(del[del.length - 1])
            }
        }
        let one = new Date(Date.now() - (-lastDay) * dayInMill)
        let nullForDay = ""
        let nullForMonth = ""
        let nullForYear = ""
        let nullForHours = ""
        let nullForMint = ""
        let nullForSec = ""

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
        let hours = text.indexOf('hh')
        let minutes = text.indexOf('mm')
        let seconds = text.indexOf('ss')
        let mill_seconds = text.indexOf('Ms')
        
        if (mill_seconds !== -1) {
            text[mill_seconds] = one.getMilliseconds()
        }
        if (hours !== -1) {
            text[hours] = one.getHours();
        }
        if (minutes !== -1) {
            text[minutes] = one.getMinutes();
        }
        if (seconds !== -1) {
            text[seconds] = one.getSeconds();
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
        if(text[3] < 10){
            nullForHours = 0
        }
        if(text[4] < 10){
            nullForMint = 0
        }
        if(text[5] < 10){
            nullForSec = 0
        }
        if (text.length == 7){
            return `${nullForDay}${text[0]}${del[0]}${nullForMonth}${text[1]}${del[1]}${nullForYear}${text[2]}${del[2]}${nullForHours}${text[3]}${del[3]}${nullForMint}${text[4]}${del[4]}${nullForSec}${text[5]}${del[5]}${nullForSec}${text[6]}`
        }
        if (text.length == 6){
            return `${nullForDay}${text[0]}${del[0]}${nullForMonth}${text[1]}${del[1]}${nullForYear}${text[2]}${del[2]}${nullForHours}${text[3]}${del[3]}${nullForMint}${text[4]}${del[4]}${nullForSec}${text[5]}`//nullForSec
        }
        if (text.length == 5){
            return `${nullForDay}${text[0]}${del[0]}${nullForMonth}${text[1]}${del[1]}${nullForYear}${text[2]}${del[2]}${nullForHours}${text[3]}${del[3]}${nullForMint}${text[4]}`
        }
        if (text.length == 4){
            return `${nullForDay}${text[0]}${del[0]}${nullForMonth}${text[1]}${del[1]}${nullForYear}${text[2]}${del[2]}${nullForHours}${text[3]}`
        }
        if (text.length == 3){
            return `${nullForDay}${text[0]}${del[0]}${nullForMonth}${text[1]}${del[1]}${nullForYear}${text[2]}`
        }
        if (text.length == 2){
            return `${nullForDay}${text[0]}${del[0]}${nullForMonth}${text[1]}`
        }
        if (text.length == 1){
            return `${nullForDay}${text[0]}`
        }

    }


    formatUsers(text1, lastDay = 0) {
        let text
        let del
        let one = new Date(Date.now() - (-lastDay) * dayInMill)
        let nullForDay = ""
        let nullForMonth = ""
        let nullForYear = ""
        let nullForHours = ""
        let nullForMint = ""
        let nullForSec = ""

        text = text1.match(/[A-Za-z]{2}/g);
        let t = text1.match(/Y{4}/)
        del = text1.match(/[-+/:.,\s]/g)
        let numb = text1.match(/\d+/g)
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
        for(let i = 0; i < 10;i++){
            if(del[i] == undefined){
                del[i] = ''
            }
        }
        if(numb == null){
            numb = ['0','0','0','0','0','0']
        }
        for(let i = 0; i < 10;i++){
            if(numb[i] == undefined){
                numb[i] = '0'
            }
        }
        let hours = text.indexOf('hh')
        let minutes = text.indexOf('mm')
        let seconds = text.indexOf('ss')
        let mill_seconds = text.indexOf('Ms')
        
        if (mill_seconds !== -1) {
            text[mill_seconds] = one.getMilliseconds()
        }
        if (hours !== -1) {
            text[hours] = one.getHours();
        }
        if (minutes !== -1) {
            text[minutes] = one.getMinutes();
        }
        if (seconds !== -1) {
            text[seconds] = one.getSeconds();
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
        if(text[3] < 10){
            nullForHours = 0
        }
        if(text[4] < 10){
            nullForMint = 0
        }
        if(text[5] < 10){
            nullForSec = 0
        }
        if (text.length == 7){
            return `${nullForDay}${text[0] - +numb[0]}${del[0]}${nullForMonth}${text[1] - +numb[1]}${del[1]}${nullForYear}${text[2] - +numb[2]}${del[2]}${nullForHours}${text[3] - +numb[3]}${del[3]}${nullForMint}${text[4] - +numb[4]}${del[4]}${nullForSec}${text[5] - +numb[5]}${del[5]}${nullForSec}${text[6] - +numb[6]}`
        }
        if (text.length == 6){
            return `${nullForDay}${text[0] - +numb[0]}${del[0]}${nullForMonth}${text[1] - +numb[1]}${del[1]}${nullForYear}${text[2] - +numb[2]}${del[2]}${nullForHours}${text[3] - +numb[3]}${del[3]}${nullForMint}${text[4] - +numb[4]}${del[4]}${nullForSec}${text[5] - +numb[5]}`//nullForSec
        }
        if (text.length == 5){
            return `${nullForDay}${text[0] - +numb[0]}${del[0]}${nullForMonth}${text[1] - +numb[1]}${del[1]}${nullForYear}${text[2] - +numb[2]}${del[2]}${nullForHours}${text[3] - +numb[3]}${del[3]}${nullForMint}${text[4] - +numb[4]}`
        }
        if (text.length == 4){
            return `${nullForDay}${text[0] - +numb[0]}${del[0]}${nullForMonth}${text[1] - +numb[1]}${del[1]}${nullForYear}${text[2] - +numb[2]}${del[2]}${nullForHours}${text[3] - +numb[3]}`
        }
        if (text.length == 3){
            return `${nullForDay}${text[0] - +numb[0]}${del[0]}${nullForMonth}${text[1] - +numb[1]}${del[1]}${nullForYear}${text[2] - +numb[2]}`
        }
        if (text.length == 2){
            return `${nullForDay}${text[0]  - +numb[0]}${del[0]}${nullForMonth}${text[1] - +numb[1]}`
        }
        if (text.length == 1){
            return `${nullForDay}${text[0]  - +numb[0]}`
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
        if(typeof(del) != 'string'){
            lastDay = del
        }
        if(typeof(lastDay) === 'string' && typeof(del) != 'string'){
            let y = del
            del = lastDay
            lastDay = y
        }
        let text
        let one = new Date(lastDay)
        let nullForDay = ""
        let nullForMonth = ""
        let nullForYear = ""
        text = text1.match(/.{1,2}/g);
        let t = text1.match(/Y{4}/)
    
        let index_year = -1
        let index_fullYear = -1
        del = text1.match(/[-+/:.,\s]/g)
        if(del === null){
            del = ['','','','','','']
        }
        if(del.length < 2){
            del = del[0]
        }if(del.length > 2){
            for(let i = 0; i < 10; i++){
                del.push(del[del.length - 1])
            }
        }
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
        let hours = text.indexOf('hh')
        let minutes = text.indexOf('mm')
        let seconds = text.indexOf('ss')
        let mill_seconds = text.indexOf('Ms')
        
        if (mill_seconds !== -1) {
            text[mill_seconds] = one.getMilliseconds()
        }
        if (hours !== -1) {
            text[hours] = one.getHours() - 3;
        }
        if (minutes !== -1) {
            text[minutes] = one.getMinutes();
        }
        if (seconds !== -1) {
            text[seconds] = one.getSeconds();
        }
        if(text[3] < 10){
            nullForHours = 0
        }
        if(text[4] < 10){
            nullForMint = 0
        }
        if(text[5] < 10){
            nullForSec = 0
        }
        if (text.length == 7){
            return `${nullForDay}${text[0]}${del[0]}${nullForMonth}${text[1]}${del[1]}${nullForYear}${text[2]}${del[2]}${nullForHours}${text[3]}${del[3]}${nullForMint}${text[4]}${del[4]}${nullForSec}${text[5]}${del[5]}${nullForSec}${text[6]}`
        }
        if (text.length == 6){
            return `${nullForDay}${text[0]}${del[0]}${nullForMonth}${text[1]}${del[1]}${nullForYear}${text[2]}${del[2]}${nullForHours}${text[3]}${del[3]}${nullForMint}${text[4]}${del[4]}${nullForSec}${text[5]}`//nullForSec
        }
        if (text.length == 5){
            return `${nullForDay}${text[0]}${del[0]}${nullForMonth}${text[1]}${del[1]}${nullForYear}${text[2]}${del[2]}${nullForHours}${text[3]}${del[3]}${nullForMint}${text[4]}`
        }
        if (text.length == 4){
            return `${nullForDay}${text[0]}${del[0]}${nullForMonth}${text[1]}${del[1]}${nullForYear}${text[2]}${del[2]}${nullForHours}${text[3]}`
        }
        if (text.length == 3){
            return `${nullForDay}${text[0]}${del[0]}${nullForMonth}${text[1]}${del[1]}${nullForYear}${text[2]}`
        }
        if (text.length == 2){
            return `${nullForDay}${text[0]}${del[0]}${nullForMonth}${text[1]}`
        }
        if (text.length == 1){
            return `${nullForDay}${text[0]}`
        }
    
    //    return `${nullForDay}${text[0]}${del}${nullForMonth}${text[1]}${del}${nullForYear}${text[2]}`
        
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


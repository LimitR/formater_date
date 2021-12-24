class DATEFORMATER { 
    #locales;
    #date;
    #time;
    #timeZone;
    #errors = [];
    
    constructor(){
        this.#locales = 'ru';
        this.#date = Date.now()
        this.#time = 0;
        this.#timeZone;
        this.#errors;
    }

    /**
     * 
     * @param {'12.12.1999'} date 
     * @param {'DD MM YYYY'} format 
     * @returns {this}
     */
    addDate(date, format){
        if(format === 'JS') {
            this.#date = new Date(date).toLocaleString(this.#locales, {timeZone: this.#timeZone})
            return this
        }
        let userDate = date.split(/\W/).filter(element => {return element.length > 0});
        let formatDate = format.split(/\W/).filter(element => {return element.length > 0});
        let result = {};
        formatDate.forEach( (element, index) => {
            switch(element){
                case 'YY':
                    result.one = +userDate[index]
                break
                case 'YYYY':
                    result.one = +userDate[index]
                break
                case 'MM':
                    result.two = +userDate[index] - 1
                break
                case 'MMMM':
                    result.two = +userDate[index]
                break
                case 'DD':
                    result.three = +userDate[index]
                break
                case 'hh':
                    result.four = +userDate[index]
                break
                case 'mm':
                    result.five = +userDate[index]
                break
                case 'ss':
                    result.six = +userDate[index]
                break
                case 'ms':
                    result.seven = +userDate[index]
                break
                default:
                    this.#errors.push('.addDate: Is not a valid argument - ' + element)
                break

            }
        })
        this.#date = Date.parse(result?.one, result?.two, result?.three, result?.four || 0, result?.five || 0, result?.six || 0, result?.seven || 0)
        return this
    }

    /** 
    *@param {'ru'|'en'} locales
    *@returns {this}
    */
    locale(locales){
        this.#locales = locales
        return this
    }

    /**
     * 
     * @param {string|'DD.MM.YYYY'} format 
     * @returns {string|Error}
     */
    format(format){
        let formatDate = format.split(/\W/).filter(element => {return element.length > 0});
        const formatSeparator = format.split(/\w/).filter(element => {return element.length > 0});

        formatDate = formatDate.map( element => {
            switch(element){
                case 'W':       return new Date(this.#date + this.#time).toLocaleString(this.#locales, { timeZone: this.#timeZone,    weekday: 'narrow'   })
                case 'WW':      return new Date(this.#date + this.#time).toLocaleString(this.#locales, { timeZone: this.#timeZone,    weekday: 'short'    })
                case 'WWW':     return new Date(this.#date + this.#time).toLocaleString(this.#locales, { timeZone: this.#timeZone,    weekday: 'long'     })
                case 'YY':      return new Date(this.#date + this.#time).toLocaleString(this.#locales, { timeZone: this.#timeZone,    year: '2-digit'     })
                case 'YYYY':    return new Date(this.#date + this.#time).toLocaleString(this.#locales, { timeZone: this.#timeZone,    year: 'numeric'     })
                case 'MM':      return new Date(this.#date + this.#time).toLocaleString(this.#locales, { timeZone: this.#timeZone,    month: '2-digit'    })
                case 'MMM':     return new Date(this.#date + this.#time).toLocaleString(this.#locales, { timeZone: this.#timeZone,    month: 'short'      })
                case 'MMMM':    return new Date(this.#date + this.#time).toLocaleString(this.#locales, { timeZone: this.#timeZone,    month: 'long'       })
                case 'DD':      return new Date(this.#date + this.#time).toLocaleString(this.#locales, { timeZone: this.#timeZone,    day: '2-digit'      })
                case 'hh':      return new Date(this.#date + this.#time).toLocaleString(this.#locales, { timeZone: this.#timeZone,    hour: '2-digit'     })
                case 'mm':      return new Date(this.#date + this.#time).toLocaleString(this.#locales, { timeZone: this.#timeZone,    minute: '2-digit'  })
                case 'ss':      return new Date(this.#date + this.#time).toLocaleString(this.#locales, { timeZone: this.#timeZone,    second: '2-digit'  })
                case 'ms':      return new Date(this.#date + this.#time).getMilliseconds()
                default: this.#errors.push('.format: Is not a valid argument - ' + element)

            }
        })
        formatDate = formatDate.map( (element, index) => {
            return element + (formatSeparator[index] === undefined ? '' : formatSeparator[index])
        })
        return formatDate.join('')
    }

    /**
     * @param {'UTC'|'Europe/Moscow'|'Europe/Kiev'|'Europe/Berlin'|'Asia/Shanghai'|'America/New_York'} time_zone
     * @returns {this}
     */
    timeZone(time_zone){
        this.#timeZone = time_zone
        return this
    }

    /**
     * 
     * @param {number} time 
     * @param {'weeks'|'days'|'hours'|'minutes'|'seconds'|'milliseconds'} keys 
     * @returns 
     */
    subtract(time, keys){
        switch(keys){
            case 'weeks':
                this.#time += time * 604800000
                return this
            case 'days':
                this.#time += time * 86400000
                return this
            case 'hours':
                this.#time += time * 3600000
                return this
            case 'minutes':
                this.#time += time * 60000
                return this
            case 'seconds':
                this.#time += time * 1000
                return this
            case 'milliseconds':
                this.#time += time
                return this
            default:
                return this
        }
    }

}



module.exports = DATEFORMATER


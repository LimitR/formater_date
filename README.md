# formater_date

formater_date служит удобным способом получить необходимую дату в нужном формате
=============
Данный файл поможет вывести дату и время в удобном формате на js и node.js. Вводите формат в любом порядке и оставляйте только нужные данные.
---

Для начала мы качаем пакет из npm 
`npm i formaster_date_and_time`

Дальше подключаем к файлу
`const DATE = require('./formater_date')`

Потом создаем новый экземпляр класса
`let x = new DATE()`

Как пользоваться? 
----

Вывод даты
===

**DD - день; MM - месяц; YY - год;**

Вы можете записывать их в нужном порядке и на выходе получить нужную дату.

`x.formatNumber('DDMMYY')` - сегодняшняя дата // 140721

`x.formatNumber('DDMMYYYY')`  // 14072021

`x.formatNumber('MMDDYY')`  // 071421

`x.formatNumber('DD', -2)`  // 12

Если необходим вывод даты, отличной от сегодняшней, то нужно дописать сколько дней нужно отнять/прибавить
`x.formatNumber('DDMMYY', -5)` - дата 5 дней назад


Вы можете вывести дату и время в одной строке, используя
`x.formatUsers('YYYY-DD.MM hh:mm:ss')` // 2021-14.07  21:59:46

Чтоб отнять определенное кол-во времени от даты, достаточно прописать
`x.formatUsers('hh0:mm10:ss')` // 21:49:46
Важно прописывать 0 перед той датой, которые находятся перед необходимой.

Вывод времени
===

**hh - часы; mm - минуты; ss - секунды; Ms - миллисекунды**

Чтоб вывести время, необходимо воспользоваться методом 
`x.formatUsers('hh:mm:ss')` // 17:05:12

Чтоб вывести миллисекунды, нужно дописать Ms 
`x.formatUsers('hh:mm:ss:Ms')` // 17:05:15:385


Перевод произвольной даты/времени в миллисекунды
===

Для вывода даты в миллисекунды, необходимо вспользоваться методом `x.formatParse('15.07.21')`
Он выдает значение в миллесекундах, которое позже можно использоваться для операций.
Можно переводить не только дату, но и время `x.formatParse('18:30:27')` // Неоходимо прописывать всё время с часами, минутами и секундами.

Когда необходимо перевести дату из миллисекунд в нашу форматированную версию, то нужно 
воспользоваться методом **formatMillis**
`x.formatMillis('DDMMYY', '.', 1626351575556)` // 15.07.21 *(Сегодняшняя дата)*

Все методы можно совмещать и выводить разные значения
`x.formatMillis('DDMMYY', '.', x.formatParse('00:30:00'))` // 1 января 1970 года + 30 минут.

Отложенные вызовы
===

Иногда нам требуется использовать таймауты, которые принимают некрасивые конструкции.
Чтоб сделать весь этот вывод чуть лучше, есть метод `x.formatTimer('00:00:00')`

Время, что вы укажите, будет точкой отсчета, перед исполнением операции. 

Варианты способа вызова есть разные, от помещения функции в метод `x.formatTimer('00:00:00', function)` // Без скобок

До привычного синтаксиса промисов 
```
x.formatTimer('00:00:03').then((res)=>{
    if(res){
        console.log('Выполнение промиса')
    }
})
```



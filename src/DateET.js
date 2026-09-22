
const dateFormattedEST = function() {  
    let dateNow = new Date();
    let yearNow = dateNow.getFullYear();
    let monthNow = dateNow.getMonth();
    let dayNow = dateNow.getDate();
    let monthNameEST = ['jaanuar ', 'veebruar ', 'märts ', 'aprill ', 'mai ', 'juuni ', 'juuli ', 'august ', 'september ', 'oktoober ', 'november ', 'detsember '];
    let weekdayNameEST = [
        'pühapäev',
        'esmaspäev',
        'teisipäev',
        'kolmapäev',
        'neljapäev',
        'reede',
        'laupäev'
    ]

    return yearNow + ' ' + dayNow + ' ' + monthNameEST[monthNow] + ' ' + weekdayNameEST[dateNow.getDay()];

}

const dayFormattedEST = function() {
    let dateNow = new Date();

    let weekdayNameEST = [
        'pühapäev',
        'esmaspäev',
        'teisipäev',
        'kolmapäev',
        'neljapäev',
        'reede',
        'laupäev'
    ];

    return weekdayNameEST[dateNow.getDay()];
};

const addLeadZero = function(numValue)  {
    if (numValue < 10) {
        numValue = '0' + numValue;
    }
    return numValue;
}

const timeFormattedEST = function() {  //current time 
    let timeNow = new Date();
    let hourNow = timeNow.getHours();
    let minuteNow = timeNow.getMinutes();
    let secondNow = timeNow.getSeconds();
    let timeString = hourNow + ':' + minuteNow + ':' + secondNow;
    return timeString;
}

//ekspordin kõik vajalikud funktsioonid koos mugavamate nimedega
module.exports = {time: timeFormattedEST, date: dateFormattedEST, addLZero: addLeadZero, day: dayFormattedEST};
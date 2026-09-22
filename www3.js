const http = require('http');
const dateET = require('./src/DateET');
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Hugo Tammiste, veevbiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>Hugo Tammiste, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna Ülikoolis</a> ning ei sisalda tõsiseltvõetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
    //res.write('Veebiserver Käivitus');
    res.write(pageHead);
    res.write(pageBody);
    res.write('\n\t<p>Täna on ' + dateET.day() + ', ' + dateET.date(Math.round(Math.random())) + ', kell oli lehe avamise hetkel: ' + dateET.time() +'.</p>');
    res.write(pageFoot);
    return res.end();
}).listen(5205);


//nadalapaev require liida moodul,   res.write ('<p>Täna on ' + dateTimeET.date + '.</p>)
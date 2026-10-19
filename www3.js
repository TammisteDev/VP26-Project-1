const http = require('http');
//moodul URL-i parsimiseks
const url = require('url');
//moodul failiteede haldamiseks
const path = require('path');
const fs = require('fs');

const dateET = require('./src/DateET');
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Hugo Tammiste, veevbiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBanner = '<img src ="pilt.png" alt="">\n';
const pageBody = '\t<h1>Hugo Tammiste, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna Ülikoolis</a> ning ei sisalda tõsiseltvõetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';

http.createServer(function(req, res){
    //vaatan URL-i
    console.log('Päring: ' + req.url);
    //parsin URL-i
    let currentURL = url.parse(req.url, true);
    console.log('Parsituna: ' + currentURL.pathname);
    if (currentURL.pathname === '/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        //res.write('Veebiserver Käivitus');
        res.write(pageHead);
        res.write(pageBanner)
        res.write(pageBody);
        res.write('\n\t<p>Täna on ' + dateET.day() + ', ' + dateET.date(Math.round(Math.random())) + ', kell oli lehe avamise hetkel: ' + dateET.time() +'.</p>');
        res.write(pageFoot);
        return res.end();
        }

        else if (currentURL.pathname === '/vanasona'){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write(pageHead);
            res.write('<h1>Tänane Eesti vanasõna</h1><p>Siin näed tänaseks päevaks loositud vanasõna.</p><hr>');
            try {
                const data = fs.readFileSync(path.join(__dirname, 'txt', 'vanasonad.txt'), 'utf8');
                let oldSayings = data.split(';').filter(function(saying){
                    return saying.trim() !== '';
                });
                let saying = oldSayings[Math.floor(Math.random() * oldSayings.length)];
                res.write('<p>' + saying + '</p>');
            } catch (err) {
                res.write('<p>Vanasõna ei leitud.</p>');
            }
            res.write(pageFoot);
            return res.end();
        }
        else if (currentURL.pathname === '/pilt.png'){
            // liidame kättesaamatu päris kataloog jms virtuaalseks failiteeks
            let bannerPath = path.join(__dirname, 'pic', 'pilt.png');
            try {
                    const data = fs.readFileSync(bannerPath);
                    res.writeHead(200, {"Content-type": "image/png"})
                    return res.end(data)
            }   catch (err) {
                        res.writeHead(404, {"Content-type": "text/plain; charset=utf-8"});
                        return res.end('Pilti ei leitud')
                }
        }

        else {
            res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
            return res.end('Viga 404! Ei leia sellist lehte!');
        }
}).listen(5205);


//nadalapaev require liida moodul,   res.write ('<p>Täna on ' + dateTimeET.date + '.</p>)
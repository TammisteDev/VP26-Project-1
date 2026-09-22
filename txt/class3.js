const fs = require('fs');
const textRef = 'txt/vanasonad.txt';

function showText(rawText){
    //console.log(rawText)
    //teeme tekstist listi (järjendi ehk masiivi ehk array)
    let oldSayings = rawText.split(';');
    oldSayings.sort();
    console.log('\x1b[32m' + oldSayings.join('\n') + '\x1b[0m');
    console.log('Järgnevalt ' + oldSayings.length + ' tuntud Eesti vanasõna:');
}
} else {
    console.log('Tänane vanasõna:' + oldSayings[Math.round(Math.random() * (oldSayings.length - 1))]);
 }
}

function readTextFile(reference) {
    let result = 'Kahjuks tekti ei leitud';
    fs.readFile(reference, 'utf8', (err, data) => { 
        if (err) {
            console.log('Viga: ' + err);
        } else {
            showText(data);
        }
    });
}

readTextFile(textRef);
console.log('Näitame Eesti vanasõnu');
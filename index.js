var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');
/*
fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});
*/

/*
//odczyt pliku
fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log(data);
});

//zapis do pliku
fs.writeFile('./text.txt', 'Tekst, który zapiszemy w pliku text.txt', function(err) {
    if (err) throw err;
    console.log('Zapisano!');
});
*/


/* polecenia z ćwiczenia - zapisywanie do pliku
fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./text.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue);
            console.log(data);
        });
    });
});
*/

//polecenie - utworz plik i zapisz w nim strukturę katalogu


fs.readdir('c:/', 'utf-8', function(err, data){
  if (err) throw err;
  var catalogs = data;
  fs.writeFile('./newFile.txt', catalogs, function(err, data){
    if (err) throw err;
    console.log('Wrote Hello World in file helloworld.txt, just check it');

  });
});

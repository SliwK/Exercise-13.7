var fs = require('fs');
//var StatMode = require('stat-mode');
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

/* odczytanie kalatogu i zapisanie go w pliku
fs.readdir('c:/', 'utf-8', function(err, data){
  if (err) throw err;
  var catalogs = data;
  fs.writeFile('./newFile.txt', catalogs, function(err, data){
    if (err) throw err;
    console.log('Wrote Hello World in file helloworld.txt, just check it');

  });
});
*/

//odczyt plików i tworzenie jednego - OPCJA Z readFileSync()
var path = './doc_files/';
fs.readdir(path, 'utf8', function(err, files){
  if(err) throw err;
  var filePath = [];
  var content = [];
//  console.log(files);
  for (var i = 0; i < files.length; i++) {
    filePath[i] = 'doc_files/' + files[i];
  }
//    console.log(filePath);

  for (x = 0; x < filePath.length; x++) {
    content[x] = fs.readFileSync(filePath[x], "utf8");

  }
  console.log(content);

fs.writeFile('./sum.txt', content, function(err){
        if (err) throw err;
        console.log("Zapisano plik sum.txt");
    });

});


/*
fs.readFileSync('./doc_files/tekst_1.txt', 'utf-8', function(err, data) {
    if (err) throw err;
    var text = data;
    fs.writeFile('./sum.txt', text, 'utf-8', function(err) {
        if (err) throw err;
        console.log('Zapisano 1!'.blue);
        fs.readFile('./doc_files/tekst_2.txt', 'utf-8', function(err, data) {
              if (err) throw err;
              var text = data;
              fs.appendFile('./sum.txt', text, 'utf-8', function(err) {
                  if (err) throw err;
                  console.log('Zapisano 2!'.blue);
                  fs.readFile('./doc_files/tekst_3.txt', 'utf-8', function(err, data) {
                      if (err) throw err;
                      var text = data;
                      fs.appendFile('./sum.txt', text, 'utf-8', function(err) {
                          if (err) throw err;
                          console.log('Zapisano 3!'.blue);
                      });
                  });
              });
          });
      });
});




/*
//odczyt plików i tworzenie jednego - OPCJA Z readFile()

fs.readFile('./doc_files/tekst_1.txt', 'utf-8', function(err, data) {
    if (err) throw err;
    var text = data;
    fs.writeFile('./sum.txt', text, 'utf-8', function(err) {
        if (err) throw err;
        console.log('Zapisano 1!'.blue);
        fs.readFile('./doc_files/tekst_2.txt', 'utf-8', function(err, data) {
              if (err) throw err;
              var text = data;
              fs.appendFile('./sum.txt', text, 'utf-8', function(err) {
                  if (err) throw err;
                  console.log('Zapisano 2!'.blue);
                  fs.readFile('./doc_files/tekst_3.txt', 'utf-8', function(err, data) {
                      if (err) throw err;
                      var text = data;
                      fs.appendFile('./sum.txt', text, 'utf-8', function(err) {
                          if (err) throw err;
                          console.log('Zapisano 3!'.blue);
                      });
                  });
              });
          });
      });
});
*/

/*
//odczytanie i przekształcenie obrazka.

var Jimp = require("jimp");

Jimp.read("./cat.jpg", function (err, cat) {
    if (err) throw err;
    cat.greyscale()
       .mirror( true, false )
       .write("./cat-1.jpg");
});
*/

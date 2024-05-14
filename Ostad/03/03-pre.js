const fs = require('fs');
let command = process.argv[2];
let fileName = process.argv[3];
let arg = process.argv[4];

let functions = {
    create: createFileController,
    delete: deleteFileController
};

functions[command](fileName, arg);

function createFileController(name, body) {
    fs.writeFile(name, body, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

function deleteFileController(name){
    fs.unlink(name, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

//====================
fs.copyFile('source.txt', 'destination.txt', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  });


  unlink('path/file.txt', (err) => {
    if (err) throw err;
    console.log('path/file.txt was deleted');
  }); 

  const fs = require('fs');

fs.writeFile("/tmp/test", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
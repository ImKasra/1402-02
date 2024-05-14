let fs = require('fs');
let data = process.argv[3];

function appendFileCallback(err) {
    if(err){
        console.log('ERR: ', err);
    }
    else{
        console.log('File saved.');
    }
}

fs.appendFile(process.argv[2], data, appendFileCallback); 
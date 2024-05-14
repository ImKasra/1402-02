let fs = require('fs');
let data = process.argv[3];

function copyFileCallback(err){
    if(err){
        console.log('ERR: ', err);
    }
    else{
        console.log('copyFile successfill')
    }
}

fs.copyFile(process.argv[2], process.argv[3], copyFileCallback); 
let fs = require('fs');
let data = process.argv[3];

function unlinkCallback(err) {
    if(err){
        if(err.code === 'EPERM'){
            fs.rmdir(process.argv[2], rmdirCallback); 
        }
        else{
            console.log('ERR: ', err)
        }
    }
    else{
        console.log("File DELETED.")
    }
}

function rmdirCallback(err){
    if(err){
        console.log('ERR: ', err);
    }
    else{
        console.log('rmdir successful')
    }
}

fs.unlink(process.argv[2], unlinkCallback); 
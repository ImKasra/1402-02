const fs = require('fs');
let file = process.argv[2];
let id = process.argv[3];
function readRecord() {
    function getArrayIndex(array, id) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id== id) {
                return i;
            }
        }
    }
    fs.readFile(file, {encoding: 'utf8'}, (err,data)=>{
        if (err) {
            console.log(err);
        }
        else {
            data = JSON.parse(data);
            if (data.person[getArrayIndex(data.person, id)] ===undefined) {
                console.log("not found");
            }
            else {
                console.log(data.person[getArrayIndex(data.person,id)]);
            }
        }
    });
    
}

function deleteRecord() {
    function getArrayIndex(array, id) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id== id) {
                return i;
            }
        }
    }
    fs.readFile(file, {encoding: 'utf8'}, (err,data)=>{
        if (err) {
            console.log(err);
        }
        else {
            data = JSON.parse(data);
                let x= data.person.splice(getArrayIndex(data.person,id),1)
                console.log(data.person[getArrayIndex(data.person,id)]);
                data=JSON.stringify(data);
                fs.writeFile('database.json',data,(err)=>{
                    if (err) {
                        console.log('err:',err );
                    }
                     else {
                        console.log('sucsses ');
                    }
                })
        }
    });
}
readRecord()
deleteRecord()

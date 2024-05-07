const fs = require('fs');
let file = process.argv[2];
let name = process.argv[3];
let family = process.argv[4];
let email = process.argv[5];
    let newData = {
        name, family, email
    }
    fs.readFile(file, { encoding: 'utf8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            data = JSON.parse(data);
            data.person.push(newData);
            data = JSON.stringify(data);
            fs.writeFile(file, data, (err) => {
                if (err) throw err;
                console.log("Record added.");
            });
        }
    })
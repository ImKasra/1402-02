const fs=require ('fs');
let file = process.argv[2];
let name=process.argv[3];
let family=process.argv[4];
let email=process.argv[5];
fs.readFile(file,(err,data)=>{
    if (err) {
        console.log(err);
    }else{
        console.log(JSON.parse(data));
    }
        const db=JSON.parse(data)
        let newData={
            name,
            family,
            email,
        }
        db.person.push(newData)
            fs.writeFile(file,JSON.stringify(db),(err)=>{
                if(err){
                    throw err
                }
                console.log('ok')
            })
    }
);
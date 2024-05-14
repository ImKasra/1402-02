console.log("process.argv", process.argv);



let array = [];

// for(let i=0; i<10 ; i++){
//     array[i] = process.argv[i + 2];
// }

// for(let i=2; i<10 ; i++){
//     if(process.argv[i] !== undefined){
//         array[i - 2] = process.argv[i];
//     }
// }

let length = process.argv.length;

for(let i = 2; i<length ; i++){
    array[i - 2] = process.argv[i];
}
    
console.log("inputs: ", array);
console.log("process.argv.length: ", length);
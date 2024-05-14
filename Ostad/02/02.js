

// function sum(a, b){
//     let result;
//     result = a+b;
//     return result;
// }

// sum(4,5);
// sum(4,"abs");
// sum(4,[1, 2, 3]);


// console.log( 1 );
// console.log( sum(4,5) );


let x = {
    x: 1,
    y: "AAAA",
    z: function (a){ return a+2; }
};

// console.log(x.x);
// console.log(x.y);
// console.log(x.z(6));
// console.log(x)

let obj = {
    aaaa: "nasser",
    bbbb: x,
    cccc: 123
}
// console.log(y);
// console.log(y.bbbb.x);
// console.log(y.bbbb.y);
// console.log(y.bbbb.z(6));

// let keyname = "aaaa";
// console.log(obj.keyname)
// console.log(obj[keyname])

// let names = ['aaaa', 'bbbb', 'cccc'];

// for(i=0; i<names.length; i++){
//     console.log("property", names[i], "of object is", obj[names[i]])
// }

// let inputs = [
//     {
//         name: nasser,
//         age: 18
//     },
//     {
//         name: reza,
//         age: 32
//     },
//     {
//         name: behrooz,
//         age: 11
//     }
// ]


let argv = process.argv;
let array = []
let j = 0;

for(i=2; i<argv.length; i+=2){
    array[j] = {
        name: argv[i],
        age: argv[i+1]
    }
    j++;
}

console.log(array);
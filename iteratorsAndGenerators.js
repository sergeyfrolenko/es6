const arr = [1,2,3];
const obj = {a: 1, b: 2, c: 3};

// simple instance for iterante array
// for(let elem of arr) {
//     console.log(elem);
// }

// try iterate obj
// for(let elem of obj) {
//     console.log(elem);
// }
// return error -> obj is not iterable

// we can use next construction
// for(let key in obj) {
//     console.log(`key-${key} : value-${obj[key]}`);
// }

// in es6 we can yourself determine how to iterate obj
function *createIterator(o) {
    for(let key in o) {
        yield o[key];
    }
}

let iterator = createIterator(obj);

for(let elem of iterator) {
    console.log(elem);
}
// For what it need? Just for use 'for of' construction...
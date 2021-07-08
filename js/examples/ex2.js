let arrExample = [1, 2, [3, 4], 5, [6, 7]];

let a = arrExample.filter(
    function (item) {
        if(Array.isArray(item)) {return true}
    }
)

let b = arrExample.filter( item => Array.isArray(item) )

console.log(a);
console.log(b);

let q = 1;

console.log(Array.isArray(q));
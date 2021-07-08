const someDemoArr = [12, 5, 8, 130, 44];

function every(arr, callback) {
    if(arr.length === 0) return true

    for(let i = 0; i <= arr.length - 1; i++) {

        if( !callback(arr[i]) ) {
            return false;
        }

    }

    return true;
}


function isOdd(arg) {
    return

}

let a = isOdd;

console.log(a(10));

every(someDemoArr, isOdd)

// let obj = {
//     name: 'Vova',
//     gender: "Dog",
// }
//
// let a = obj;
//
// let c = a;
//
// c.gender = 'male';
//
// console.log(
//     obj, a , c
// );
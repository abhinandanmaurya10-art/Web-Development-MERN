// function reverstring(str){
//     let result = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         result += str[i];
//     }
//     return result;
// }

// let result = reverstring("hello");
// console.log(result);


function reverstring2(str){
    return str.split('').reverse().join('');
}
let result = reverstring2("hello");
console.log(result);    

// Q20. Write a function in JavaScript to reverse a string.

function reverseStr(str) {
    // 1st 

    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;

    // 2nd
    // return str.split("").reverse().join("");
}

console.log(reverseStr("hello"));
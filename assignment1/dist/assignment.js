"use strict";
// problem-1
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}
const text = formatString('Hello', false);
console.log(text);

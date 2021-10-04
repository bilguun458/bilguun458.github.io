/* 
Bilguun Batnasan
Following js contains day 1 week 2 lab functions
*/
// Sum
function sum(arr) {
    if (!arr) return 0;

    return arr.reduce((a, b) => a + b);
}

//Reverse
function reverse(str) {
    if (!str) return "";

    return Array.from(str).map((_, i) => str[str.length - 1 - i]).join("");
}

// filterLongWords
function filterLongWords(arr, len) {
    if (!arr) return arr;

    return arr.filter((el) => el.length > len);
}

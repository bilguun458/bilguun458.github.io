/* 
Bilguun Batnasan
Following js contains day 5 lab functions
*/

/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    return a > b ? a : b;
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

function isVowel(char) {
    // parameter char must be character
    if (char.length !== 1) return false;

    char = char.toLowerCase();
    let vowels = ['a', 'e', 'o', 'u', 'i',];
    return vowels.includes(char);
}

console.log(
    "Expected output of isVowel('A') is true  " +
    myFunctionTest(true, isVowel("A"))
);
console.log(
    "Expected output of isVowel('a') is true  " +
    myFunctionTest(true, isVowel("a"))
);
console.log(
    "Expected output of isVowel('b') is false  " +
    myFunctionTest(false, isVowel("b"))
);

function sum(arr) {
    if (!arr) return 0;

    return arr.reduce((a, b) => a + b, 0);
}
console.log(
    "Expected output of sum([1, 2, 3, 4]) is 50  " +
    myFunctionTest(10, sum([1, 2, 3, 4]))
);

console.log(
    "Expected output of sum([1, 2, 3, 4, 5]) is 40  " + myFunctionTest(50, sum([1, 2, 3, 4, 5]))
);

function multiply(arr) {
    if (!arr) return 0;

    return arr.reduce((a, b) => a * b, 1);
}

console.log(
    "Expected output of multiply([1, 2, 3, 4]) is 24  " +
    myFunctionTest(24, multiply([1, 2, 3, 4]))
);

console.log(
    "Expected output of multiply([1, 2, 3, 4, 5]) is 120  " + myFunctionTest(120, multiply([1, 2, 3, 4, 5]))
);

//Reverse
function reverse(str) {
    if (!str) return "";

    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(
    "Expected output of reverse('bilguun') is nuuglib  " +
    myFunctionTest("nuuglib", reverse("bilguun"))
);
console.log(
    "Expected output of reverse('asdfghjkl') is 'lkjhgfdsa'  " +
    myFunctionTest("lkjhgfdsa", reverse("asdfghjkl"))
);

// findLongestWord
function findLongestWord(arr) {
    if (!arr) return 0;

    return arr.reduce((a, b) => (a.length > b.length ? a : b)).length;
}

const words = ["aa", "aaa", "aaaa", "b", "bb"];

console.log(
    "Expected output of findLongestWord(words) is 4  " +
    myFunctionTest(4, findLongestWord(words))
);

// filterLongWords
function filterLongWords(arr, len) {
    if (!arr) return arr;

    return arr.filter((el) => el.length > len);
}
// For test filterLongWords
function testFilterLongWords(expected, found) {
    if (
        expected.length === found.length &&
        expected.every((val, index) => val === found[index])
    ) return "TEST SUCCEEDED"
    else return "TEST FAILED";
}

console.log(
    "Expected output of filterLongWords(words, 3) is ['aaaa']  " +
    testFilterLongWords(
        ['aaaa'],
        filterLongWords(words, 3)
    )
);

// JS fiddle codes
const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem * 10;
});
document.writeln(b.toString() + "<br/>");
const c = a.filter(function (elem, i, array) {
    return elem === 3;
});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
document.writeln(d + "<br/>");

const d2 = a.find(function (elem) {
    return elem > 1;
}); //3
const d3 = a.findIndex(function (elem) {
    return elem > 1;
}); //1
document.writeln(d2 + "<br/>");
document.writeln(d3 + "<br/>");
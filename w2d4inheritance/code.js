/*
Bilguun Batnasan
Following js contains day 4 week 2 lab functions
*/

// String filter
String.prototype.filter = function (...rest) {

    return this.valueOf()
        .split(" ")
        .filter(s => !rest.includes(s))
        .join(" ");
};

// Array bubble sort
Array.prototype.bubbleSort = function () {
    let targetArray = this.valueOf();
    let len = targetArray.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (targetArray[j] > targetArray[j + 1]) {
                let tmp = targetArray[j];
                targetArray[j] = targetArray[j + 1];
                targetArray[j + 1] = tmp;
            }
        }
    }
    return targetArray;
};

ar = [6, 5, 4, 7, 3];
console.log(ar.bubbleSort());

//Exercise 3 
function Person() {
}

Person.prototype.setName = function (_name) {
    this.name = _name;
}

function Teacher() {
}
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
    console.log(this.name + ' is now teaching ' + subject);
};

var instructor = new Teacher();

instructor.setName("Michael");
instructor.teach("WAP");
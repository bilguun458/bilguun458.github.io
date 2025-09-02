// 1.
// var count = (function () {
//     var counter = 0;
//     return {
//         add: function () {
//             return counter += 1;
//         },
//         reset: function () {
//             counter = 0;
//             return counter;
//         },
//     }
// })()

// 2.
// Free variable of add is counter.
// Free variables are the variables used in a function that are not local variables or parameters of that function.

// 3.
var make_adder = function (inc) {
    var counter = 0;
    return function () {
        return counter += inc;
    }
}
var add5 = make_adder(5);
add5();
add5();
console.log(add5());
var add7 = make_adder(7);
add7();
add7();
console.log(add7());

// 4.
// We can wrap all these functions and variables into anonymous function and call it immediately with IIFE.
// In other words using module pattern.

// 5
const Employee = (function () {
    var name = "";
    var age = 0;
    var salary = 0;

    function getName() {
        return name;
    }

    function getAge() {
        return age;
    }

    function getSalary() {
        return salary;
    }

    function setName(_name) {
        name = _name;
    }

    function setAge(_age) {
        age = _age;
    }

    function setSalary(_salary) {
        salary = _salary;
    }

    function increaseSalary(percentage) {
        let currentSalary = getSalary();
        salary = currentSalary / 100 * percentage;
    }

    function incrementAge() {
        let currentAge = getAge();
        age = currentAge + 1;
    }

    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge,
    }
})();

// 6.
Employee.extension = (function () {
    var address;
    return {
        getAddress: function () {
            return address
        },
        setAddress: function (_address) {
            address = _address;
        }
    }
})();

Employee.extension.setAddress("100 N 4th St");
console.log(Employee.extension.getAddress());
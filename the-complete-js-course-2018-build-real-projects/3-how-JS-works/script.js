///////////////////////////////////////
// Lecture: Hoisting

// // functions
// calcAge(1992); // 26

// function calcAge(year) {
//     console.log(2018 - year);
// }


// // retirement(1956);
// var retire = function(year) {
//     console.log(65 - (2018 - year));
// }



// // variables
// console.log(age); // undefined
// var age = 23;

// function foo() {
//     console.log(age);
//     var age = 65;
//     console.log(age);
// }

// foo(); // undefined, 65
// console.log(age); // 23


///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(c);
// }




///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

// calcAge(1992);

// function calcAge(year) {
//     console.log(2018 - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);

        // function inFunc() {
        //     console.log(this);
        // }
        // inFunc();
    }
};

john.calcAge();

var mike = {
    name: "Mike",
    yearOfBirth: 1984
};

mike.calcAge = john.calcAge;
mike.calcAge();

console.log(mike);
/********
* Notes *
********/

// Everything is an object (Well, almost everything)
// Primitives: numbers, strings, booleans, undefined, null. 
// Everything else: arrays, functions, objects, dates, wrappers for Numbers, Strings, Booleans..is an object

// Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript;
// The prototype property of an object is where we put methods and properties that we want other objects to inherit;
// The Constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it;
// When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: prototype chain.




// Function constructor
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person.prototype.calculateAge = function() {
//     console.log(2016 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);




// Object.create, allows to create complex inheritance structures
// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, 
//     {
//         name: { value: 'Jane' },
//         yearOfBirth: { value: 1969 },
//         job: { value: 'designer' }
//     });




// Primitives vs objects
// Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a, b);


// Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age, obj2.age);


//Functions
// var age = 21;
// var obj = {
//     name: 'Moses',
//     city: 'Atlanta'
// };

// console.log(age);

// function change(a, b) {
//     a = 29;
//     b.city = 'Los Angeles';
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);



// Lecture: Passing functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// };

// function calculateAge(el) {
//     return 2016 - el;
// };

// function isFullAge(el) {
//     return el >= 18;
// };

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// };

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// var rates = arrayCalc(ages, maxHeartRate);
// console.log(rates);


// Lecuture: Functions returning functions
// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', please explain what UX design is?');
//         };
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log(name + ', which subject do you teach?');
//         };
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         };
//     }
// };

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');
// designerQuestion('Jane');
// designerQuestion('Mark');
// designerQuestion('Mike');

// interviewQuestion('teacher')('Mark');


// Lecture: IIFE
// Used to hide variables from the outside scope, this is good for data privacy.

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);


// Lecture: Closures
// Closure Summary - an inner function always has access to the variables and parameters of its outer function, even after the outer function has returned.
// JavaScript does the work automatically, you do NOT have to 'create' closures manually.

// function retirement(retireAge) {
//     var a = ' years left until retirement.'
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retireAge - age) + a);
//     }
// };

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementUS(1990);
// retirementIceland(1990);

// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ', please explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log(name + ', which subject do you teach?');
//         } else {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     };
// };

// interviewQuestion('teacher')('John');



// Lecture: Bind, call and apply

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     pres: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m  a ' + this.job + ', and I\'m ' + this.age + ' years old.');
//         } else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.pres('formal', 'morning');

// john.pres.call(emily, 'friendly', 'afternoon');

// john.pres.apply(emily, ['friendly', 'afternoon']);

// var johnFriendly = john.pres.bind(john, 'friendly');

// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.pres.bind(emily, 'formal');
// emilyFormal('afternoon');

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// };

// function calculateAge(el) {
//     return 2016 - el;
// };

// function isFullAge(limit, el) {
//     return el >= limit;
// };

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);



///////////////////////
// Coding Challenge #7
///////////////////////
// Part 1
// (function() {
//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     };
    
//     Question.prototype.displayQuestion = function() {
//         console.log(this.question);
    
//         for (var i = 0; i < this.answers.length; i++) {
//             console.log(i + ': ' + this.answers[i]);
//         }
//     };
    
//     Question.prototype.checkAnswer = function(ans) {
//         if (ans === this.correct) {
//             console.log('Correct answer!');
//         } else {
//             console.log('Wrong answer. Please try again.');
//         }
//     };
    
//     var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
//     var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
//     var q3 = new Question('Which best describes coding', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    
//     var questions = [q1, q2, q3];
    
//     var n = Math.floor(Math.random() * questions.length);
    
//     questions[n].displayQuestion();
    
//     var answer = parseInt(prompt('Please select the correct answer.'));
    
//     questions[n].checkAnswer(answer);
// })();


// Part 2 
// (function() {
//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     };
    
//     Question.prototype.displayQuestion = function() {
//         console.log(this.question);
    
//         for (var i = 0; i < this.answers.length; i++) {
//             console.log(i + ': ' + this.answers[i]);
//         }
//     };
    
//     Question.prototype.checkAnswer = function(ans, callback) {
//         var sc;

//         if (ans === this.correct) {
//             console.log('Correct answer!');
//             sc = callback(true);
//         } else {
//             console.log('Wrong answer. Please try again.');
//             sc = callback(false);
//         }
//         this.displayScore(sc);
//     };
    
//     Question.prototype.displayScore = function(score) {
//         console.log('Your current score is: ' + score);
//         console.log('===========================')
//     }

//     var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
//     var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
//     var q3 = new Question('Which best describes coding', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    
//     var questions = [q1, q2, q3];

//     function score() {
//         var sc = 0;
//         return function(correct) {
//             if (correct) {
//                 sc++;
//             }
//             return sc;
//         }
//     }

//     var keepScore = score();

//     function nextQuestion() {
//         var n = Math.floor(Math.random() * questions.length);
//         questions[n].displayQuestion();
//         var answer = prompt('Please select the correct answer.');

//         if (answer !== 'exit') {
//             questions[n].checkAnswer(parseInt(answer), keepScore);
//             nextQuestion();
//         }
//     };

//     nextQuestion();

// })();


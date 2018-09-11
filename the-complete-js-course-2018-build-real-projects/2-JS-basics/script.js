/*******************
* CODE CHALLENGE 1 *
*******************/

// function calBMI(mass, height) {
//     var BMI = mass / (height * height)
//     return BMI;
// }

// var markBMI = calBMI(68, 1.68);
// var johnBMI = calBMI(72, 1.72);

// console.log(markBMI, johnBMI);

// function higherBMI(oneBMI, twoBMI) {
//     var higher = oneBMI > twoBMI;
//     console.log('Is Mark\'s BMI higher than John\'s? ' + higher)
// }

// higherBMI(markBMI, johnBMI);


/*******************
* CODE CHALLENGE 2 *
*******************/

// var johnScore = [89, 120, 106];
// var mikeScore = [116, 154, 123];
// var maryScore = [110, 70, 135];

// function avgScoreCal(scores) {
//     var avgScore = (scores[0] + scores[1] + scores[2]) / scores.length;
//     return avgScore;
// }

// var johnAvg = avgScoreCal(johnScore);
// var mikeAvg = avgScoreCal(mikeScore);
// var maryAvg = avgScoreCal(maryScore);

// console.log(johnAvg, mikeAvg, maryAvg);

// function winner(playerOneAvg, playerTwoAvg, playerThreeAvg) {
//     if (playerOneAvg > playerTwoAvg && playerOneAvg > playerThreeAvg) {
//         console.log('John\'s team wins with ' + johnAvg + ' points');
//     } else if (playerTwoAvg > playerOneAvg && playerTwoAvg > playerThreeAvg) {
//         console.log('Mike\'s team wins with ' + mikeAvg + ' points');
//     } else if (playerThreeAvg > playerOneAvg && playerThreeAvg > playerTwoAvg) {
//         console.log('Mary\'s team wins with ' + maryAvg + ' points');
//     } else {
//         console.log('There is a draw.');
//     }
// }

// winner(johnAvg, mikeAvg, maryAvg);


/*******************
* CODE CHALLENGE 3 *
*******************/

// function tipCal(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else if (bill >= 200) {
//         percentage = .1;
//     } else {
//         console.log('Input error. Number must be greater than 0.')
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCal(bills[0]),
//             tipCal(bills[1]),
//             tipCal(bills[2])]

// console.log(tips);

// var total = [bills[0] + tips[0],
//             bills[1] + tips[1],
//             bills[2] + tips[2]]

// console.log(total);





/***************************
* Objects and Properties
*/

// Object Literal is an object that is created using the curly brackets
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Robert', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);



/***************************
* Objects and Methods
*/

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Jane', 'Mark', 'Robert', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);


/*******************
* CODE CHALLENGE 4 *
*******************/

// var john = {
//     fullName: 'John Smith',
//     mass: 110,
//     height: 1.95,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };

// var mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };


// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(john.fullName + ' has a higher BMI of ' + john.BMI);
// } else if (mark.BMI > john.BMI) {
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.BMI);
// } else {
//     console.log('They have the same BMI');
// }


/***************************
* Loops and Iterations
*/

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'designer', false];

// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// var i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// var john = ['John', 'Smith', 1990, 'designer', false];

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// // Loop backwards
// for (var i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }


/*******************
* CODE CHALLENGE 5 *
*******************/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i]
        
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 5, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i]
        
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAvg(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAvg(john.tips);
mark.average = calcAvg(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log('John Smith\'s family gives larger tips, with an average of ' + '$' + parseFloat(john.average).toFixed(2));
} else if (mark.average > john.average) {
    console.log('Mark Miller\'s family gives larger tips, with an average of ' + '$' + parseFloat(mark.average).toFixed(2));
}
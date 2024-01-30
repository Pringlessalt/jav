//0ppgave 1
var num = prompt("Enter a number!!");

if (num > 0) {
    alert("The number is a postive.")
}else if(num < 0){
    alert("The number is a negative")
}
else if(num == 0){
    alert("The number is 00")
}
 else {
    alert("Type A Fucking Number")
}
//oppgave 2
let userInpu = prompt("Enter a number:");
let userNumber = parseFloat(userInpu);

if (isNaN(userNumber)) {
    console.log("Please enter a valid number.");
} else {
    if (userNumber % 2 === 0) {
        console.log(`${userNumber} is even.`);
    } else {
        console.log(`${userNumber} is odd.`);
    }
}
//oppgave 3
let userInput = prompt("Enter the student's exam grade:");
let examGrade = parseFloat(userInput);

if (isNaN(examGrade)) {
    console.log("Please enter a valid exam grade.");
} else {
    if (examGrade < 0 || examGrade > 100) {
        console.log("Invalid input. Exam grade should be between 0 and 100.");
    } else if (examGrade >= 50) {
        console.log("The student has passed the exam.");
    } else {
        console.log("The student has failed the exam.");
    }
}

//oppgave5
let user = prompt("Enter a number (1 to 7):");
let dayNumber = parseInt(user);

if (!isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= 7) {
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(`Day ${dayNumber} is ${daysOfWeek[dayNumber - 1]}.`);
} else {
    console.log("Please enter a valid number between 1 and 7.");
}
 //oppgave7
 let a = parseFloat(prompt("Enter the first number:"));
let b = parseFloat(prompt("Enter the second number:"));

if (!isNaN(a) && !isNaN(b)) {
    console.log(`Addition: ${a + b}`);
    console.log(`Subtraction: ${a - b}`);
    console.log(`Multiplication: ${a * b}`);
    console.log(b !== 0 ? `Division: ${a / b}` : "Cannot perform division. The second number should not be zero.");
} else {
    console.log("Please enter valid numbers.");
}
//oppgave8
let A = parseFloat(prompt("Enter the first number:"));
let B = parseFloat(prompt("Enter the second number:"));

if (!isNaN(A) && !isNaN(B)) {
    if (A > B) console.log(`${A} is larger than ${B}.`);
    else if (A < B) console.log(`${A} is smaller than ${B}.`);
    else console.log(`${A} and ${B} are equal.`);
} else {
    console.log("Please enter valid numbers.");
}
//OPPGAVE10
let number = parseFloat(prompt("Enter a number:"));

if (!isNaN(number)) {
    if (number % 3 === 0) {
        console.log(`${number} can be divided completely by 3.`);
    } else {
        console.log(`${number} cannot be divided completely by 3.`);
    }
} else {
    console.log("Please enter a valid number.");
}

//oppgave11
let nume = parseFloat(prompt("Enter a number:"));

if (!isNaN(nume)) {
    if (number % 5 === 0) {
        console.log(`${number} can be divided completely by 5.`);
    } else {
        console.log(`${number} cannot be divided completely by 5.`);
    }
} else {
    console.log("Please enter a valid number.");
}
//oppgave12
let numbers = parseFloat(prompt("Enter a number:"));

if (!isNaN(numbers)) {
    if (numbers % 5 === 0 || numbers % 3 === 0) {
        console.log(`${numbers} can be divided completely by either 5 or 3.`);
    } else {
        console.log(`${numbers} cannot be divided completely by either 5 or 3.`);
    }
} else {
    console.log("Please enter a valid number.");
}
//oppgave14
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
let num3 = parseInt(prompt("Enter the third integer:"));

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    console.log(`The smallest of the three integers is: ${Math.min(num1, num2, num3)}`);
} else {
    console.log("Please enter valid integers.");
}
//15
let input = prompt("Enter a letter:");

if (userInput.length === 1) {
    let letter = input.toLowerCase();

    switch (letter) {
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'u':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            console.log("The letter is lowercase.");
            break;
        default:
            console.log("The letter is not lowercase.");
    }
} else {
    console.log("Please enter a single letter.");
}


// Operators, Branching, Loops
// Easy
// 1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
let add = (num1, num2,num3,num4,num5) => {
    let sum = num1+num2+num3+num4+num5;
    console.log(sum);
}

// 2. Write a program to take a number input from user and determine whether the number is odd or even.
let oddEven = (num) => {
    if (num%2==0){
        console.log(num + " is Even Number");
    } else {
        console.log(num + " is Odd Number");
    }
}


// 3. Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
let maxMin = (num1, num2) => {
    if (num1 > num2){
        console.log("Maximum: "+ num1);
        console.log("Minimum: "+ num2);
    } else if (num2> num1){
        console.log("Maximum: "+ num2);
        console.log("Minimum: "+ num1);
    } else {
        console.log("Both Number are equal");
    }
}


// 4. Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
maximumNumber = (...args) => {
    console.log(Math.max(...args));
}


// 5. Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
minimumNumber = (...args) => {
    console.log(Math.min(...args));
}


// 6. Write program to take a month as an input from the user and find out whether the month has 31 days or not.
let month31DaysCheck = (month)=> {
    let Month31 = ["january", "march", "may", "july", "august", "cctober", "december"]
    if (Month31.includes(month.toLowerCase())) {
        console.log(month + " has 31 days.")
    } else {
        console.log(month + " has not 31 days.")
    }
}



// Intermediate
// 1. Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
let Fizzbuzz = () => {
    let arr=[];
    for (let i=1; i < 101; i++){
        if (i%3==0 && i%5==0){
            arr.push("Fizzbuzz");
        } else if (i%3==0) {
            arr.push("Fizz");
        } else if (i%5==0) {
            arr.push("Buzz");
        } else {
            arr.push(i);
        }
    }
    console.log(arr);
}


// 2. Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....
let Fizzbuzz1 = () => {
    let arr=[];
    for (let i=1; i < 101; i++){
        if (i%3==0) {
            arr.push("Fizz");
        } else if (i%5==0) {
            arr.push("Buzz");
        } else {
            arr.push(i);
        }
    }
    console.log(arr);
}



// 3. Print the following star pattern :-
// *
// * *
// * * *
// * * * *
// * * * * *
let pattern = () => {
    for (let i=0; i<5; i++){
        for (let j=0; j<i+1;j++){
            document.write("*");
        }
        document.write("<br>");
    }
}


// 4. Write a program to take a number input from user and print multiplication table 12 times for that number.
let table = (num)=> {
    console.log("Table of "+ num);
    for(let i =0; i < 12; i++){
        console.log(num + " x "+(i+1) +" = " + num*(i+1));
    }
}


// 5. Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
let fibonacciSeries = (uptoPlace)=> {
    let arr= [0,1];
    if (uptoPlace > 2){
        for (let i=0; i< uptoPlace-2; i++){
           arr.push(arr[arr.length-1]+arr[arr.length-2]);
        };
        console.log(arr.join(","));
    } else if ( uptoPlace == 2){
        console.log(arr.join(","));
    } else if(uptoPlace==1) {
        console.log(arr[0])
    }
}


// 6. Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120
let factorial = (num) => {
    let facto = 1;
    for (let i=0; i< num; i++){
        facto *= (num-i);
    }
    console.log("Factorial of "+ num + " is: " + facto);
}



// 7. Write a Program to take a number input from user and find if the number is Prime or not.
let prime = (num) => {
    let arr = [];
    if (num == 1){
        console.log("1 is neither Prime nor Composite Number")
    } else if (num == 2) {
        console.log("It is a Prime Number");
    }
    else {
        for (let i=2; i <=num ; i++){
            if (num%i ==0){
                console.log("Not a Prime Number");
                break;
            } else if (i == Math.floor(num/2)) {
                console.log("It is a Prime Number");
                break;
            }
        }
    }
}



// 8. Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
let weekdayCal = (day) => {
    let arr = ["monday","tuesday","wednesday","thursday","friday","saturday"]
    if (day.toLowerCase() == "sunday"){
        console.log("Weekend");
    } else if (arr.includes(day.toLowerCase()))  {
        console.log("Weekday"); 
    } else {
        console.log("Invalid Day input please write correct day name !!")
    }
}
// Numbers
// 1. Write a program to input 2 numbers and display the sum of the numbers to the console.
// Input Number 1: 20
// Input Number 2: 40
// Sum : 60
let sum = (a,b) => a+b;


// 2. Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. 
// Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest
// Input: P=100, R=6%, T=2
// Output: 12
let simpleInterest= (p,r,t) => (p*r*t)/100; 



// 3. Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
// Formula : 0.5 * m * v * v
let kineticEnergy = (m,v) => .5*m*v*v;

// 4. Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: T = (T - 32) 9/5 
// 'T' is the temperature on the Fahrenheit scale.
// Input: 56
// Output: 13.33333
let celcius = (far)=> ((far-32)*5)/9;

// 5. Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
// Formula :
// Area: a*a
// Perimeter: 4*a
// Surface Area: 6*a*a
// Volume: a*a*a
let cube = (a)=> {
      console.log(`Area: ${a*a}`);
      console.log(`Perimeter: ${4*a}`);
      console.log(`Surface Area: ${6*a*a}`);
      console.log(`Volume: ${a*a*a}`);
    
};

// 6. Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.
// Input: CP = 1500, SP = 2000
// Output: 500 Profit
// Input: CP = 3125, SP = 1125
// Output: 2000 Loss
let profitLoss = (cp, sp) => {
    if (sp > cp){
        console.log(`Profit: ${sp-cp}`);
    } else {
        console.log(`Loss: ${cp-sp}`);
    }
}


// 7. Write a program to calculate sum of N natural digits, as input by the users?
// Enter a positive integer: 100
// Sum = 5050
let sumOfNaturalNumbers= (N)=> {
    return "Sum of N natural numbers: " + (N*(N+1))/2  
}


// 8. Write a Program to Print N Odd Number in Descending Order.
// Input : 4
// Output : 1
// 3
// 5
// 7
let oddNumbers = (N)=> {
    for (let i=0; i < N; i++){
        console.log(2*i+1);
    };
};


// 9. Write a JavaScript program to compute the sum of all digits that occur in a given string.
// Input: 1234
// Output: 1+2+3+4 = 10
let stringSum = (str)=> {
    let arr = String(str).trim().split("");
    let sum=0;
    for (let key in arr){
        sum+= Number(arr[key]);
    };
    console.log(sum);
}


// 10. Write a JavaScript program that reverses a number.
// Example:
// Input:  32243;
// Output:  34223
let reverseProgram = (num) => {
    let str = String(num).trim().split("").reverse().join("");
    console.log(Number(str));
};



// 11. Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.
// Example-
// Enter a Number : 1234
// Enter the Number of Rotations : 2
// Output : 3412
let cyclicRotation = (num, rotate)=> {
    let arr = String(num).trim().split("");
    for (let i=0; i< rotate; i++){
        let a = arr.shift();
        arr.push(a);
    };
    console.log(arr.join(""));
}


// 12. Write a Program to convert Decimal to Binary.
// Enter the number to convert: 5
// Binary of Given Number is=101
// num = 13
let binaryConversion = (num)=> {
    let quotient = Math.floor(num/2);
    let arr= [];
    while(quotient>0) {
        let rem = num%2;
        quotient= Math.floor(num/2);
        num = quotient;
        arr.push(rem);
    };
    console.log(arr.reverse().join(""));
}


// Follow up Question : Write a Program to Convert Octal to Decimal.
// Enter an octal number: 116
// Octal of Given Number = 78 in decimal
let octalToDecimal = (num) => {
    let arr = String(num).trim().split("").reverse();
    let sum=0;
    for (let i=0; i < arr.length; i++){
        sum += Number(arr[i])*Math.pow(8,i);
    }
    console.log("Decimal Number: ",sum);
};

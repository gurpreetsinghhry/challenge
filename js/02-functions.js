// EASY
// 1. Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8
let power = (a,b) => a**b;

// 2. Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
let areaOfHexagon = (len) => {
    let Area = (3*Math.sqrt(3)*Math.pow(len,2))/2;
    return Area.toFixed(2);
};

// 3. Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are alchemyst) ––> Output: 3
let noOfWords = (anyString) => {
    return String(anyString).trim().split(" ").length;
};

// 4. Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)
let findMin = (...digits) => {
    return Math.min(...digits);
};

// 5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)
let findMax = (...digits) => {
    return Math.max(...digits);
};

// 6. Given three angles of a triange, your function should return 
// if it is a scalen, isosceles, equilateral triangle or not a triangle at all.
// Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle
let typeOfTriangle = (a,b,c) => {
    if (a+b+c==180) {
        if (a==60 && b==60 && c==60){
            console.log("Equilateral Traiangle");
        } else if (a==b || b==c || c==a){
            console.log("Isosceles Traingle");
        } else {
            console.log("Scalen Traingle");
        }

    }else {
        console.log("Not a Triange");
    }
}

// MEDIUM
// 1. Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5
let arrayLength = (arr) => arr.length;

// 2. Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
let indexOf = (arr, num) => arr.indexOf(num);

// 3. Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
let replace = (arr, num1, num2) => {
    for (let i =0; i <= arr.length; i++){
        if (arr[i]==num1) {
            arr[i]=num2;
        };
    };
    return arr;
}

// 4. Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
let mergeArray = (arr1, arr2) => arr1.concat(arr2);

// 5. Given a string and an index, your function should return the character 
// present at that index in the string.
// Example:
// Input: charAt("skillsafari", 4) ––> Output: l
let charAt = (str, num) => str[num];

// 6. Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021
let minDate = (a,b) => {
   let newA = a.split("/");
   let newB = b.split("/");
   let yearA = newA[2];  
   let yearB = newB[2];  
   if (yearA== yearB ) {
       let monthA = Number(newA[1]);
       let monthB = Number(newB[1]);
       if (monthA == monthB){
           let dayA = Number(newA[0]);
           let dayB = Number(newB[0]);
           if (dayA==dayB){
               console.log("Both are same dates");
           } else if (dayA > dayB){
               return b;
           } else {
               return a;
           }
       } else if (monthA > monthB){
           return b;
       } else {
           return a;
       }
   } else if (yearA> yearB){
       return b;
   } else {
       return a;
   }
}

// Advanced
// 1. Write a function which generates a secret code from a given string,
//  by shifting characters of alphabet by N places. Example:
// Input: encodeString("skill", 2) ––> Output: umknn
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
let encodeString = (str, num) => {
    let arr = [];
    for (let i=0; i< str.length; i++){
        let newNum =  str.charCodeAt(i)+ num;
        if (newNum<123){
            arr.push(String.fromCharCode(newNum));
        } else {
            let num1 = newNum-26;
            arr.push(String.fromCharCode(num1));
        }
    }
    return arr.join("");
};
// sky code 
// Small letter:-
//  a= 97 & z= 122;

// 2. Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are alchemyst') ––> Output: We Are Alchemyst
let toSentenceCase= (str) => {
    let arr = str.trim().split(" ");
    for (let i =0; i < arr.length; i++){
        arr[i]= arr[i][0].toUpperCase() + arr[i].slice(1);
    };
    return arr.join(" ");
};

// 3.Given an array of numbers, your function should return an array 
// in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
let sortArray = (arr) => {
   return  arr.sort((a,b)=> a-b);
};


// 4. Given a sentence, your function should reverse the order of characters in each word,
//  keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are alchemyst') –––> Output: ew era tsymehcla
let reverseCharactersOfWord = (str) => {
    let arr = str.trim().split(" ");
    for (let i=0; i< arr.length; i++){
        arr[i]=arr[i].split("").reverse().join("");
    };
    return arr.join(" ");
};
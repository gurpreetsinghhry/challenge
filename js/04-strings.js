// Strings
// Beginner to Intermediate

// 1. Write a program that converts the string into uppercase
let uppercase = (str) => str.toUpperCase();

// 2. Write a program that reads two strings and append first string to
//    the second. So if first string is Good second string is Morning , 
//    the program should print MorningGood
let appendString = (str1, str2) => String(str2) + String(str1);

// 3. Program that reads string and count number of characters present in 
//    the string
let countCharactersAndWords = (str)=> {
    let words = String(str).trim().split(" ");
    console.log("Words: ", words.length);
    let char = words.join("").split("").length;
    console.log("Characters: ", char);
}

// 4. Write a program that converts string like "124" to 124
let stringToNumber = (str)=> {
    console.log(Number(str));
}


// 5. Write a program to delete all vowels from a string. Assume string is 
//    not more than 80 characters long
// monu is best in the world ( A E I O U)
let deleteVowels = (str)=> {
    let newStr = str.toLowerCase();
    let remA = newStr.split("a").join("");
    let remE = remA.split("e").join("");
    let remI = remE.split("i").join("");
    let remO = remI.split("o").join("");
    let remU = remO.split("u").join("");
    console.log(remU);
}


// 6. Write a program to check whether the string is alphanumeric or not , 
//    eg:batman@45 contains digit 45
let checkAlphanumberic = (str) => {
    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
          return false;
        }
      }
      return true;
}


// 7. A program that reads three strings and prints the longest and smallest one
let longestAndSmallest = (str1, str2, str3) => {
    let arr = [str1,str2, str3];
    arr.sort((a,b)=> a.length-b.length);
    console.log("Longest String: ",arr[2]);
    console.log("Smallest String: ",arr[0]);
}


// 8. A program that counts number of vowels and consonants in a String?
let countVowelsAndConsonants = (str) => {
    let vowels = str.match(/[aeiou]/g);
    console.log("Vowels: ",vowels.length);
    let consonants = str.trim().split(" ").join("").length - vowels.length;
    console.log("Consonants: ", consonants);
}


// 9. Write a program which receives a string str that calculates the length 
//    of a string and return true if the length is greater than 7 without using strlen()
let strlen = (str)=> {
    let len = str.length;
    console.log("Length of String: ", len);
    if (len > 7) {
        return true;
    } else {
       return false
    }
}

// 10. Write a program that takes two strings and copies smaller string into bigger string
let concatSmallIntoBig = (str1, str2) => {
    if (str1.length < str2.length){
        return str2.concat(str1);
    } else {
        return str1.concat(str2);
    }
}

// 11. Given a string, determine if it is a palindrome, considering only alphanumeric characters
let checkPalindrome = (str) => {
    str1 = String(str).split("").reverse().join("");
    if (str1 == str){
        console.log("It is a palindrome");
    } else {
        console.log("It's not a palindrome");
    }
} 

// 12. For a given input string(str), write a function to print all the possible 
//     substrings.Without using substr method
let string = (str) => {
    console.log("Possible Substrings:- ");
    for (let i=0; i< str.length; i++){
        console.log(i+1, ". ", str.slice(i));
    };
}


// 13. Write a program that removes the time from the given date string "Wed April 15, 7pm".
//     It should return only the date without the time.
let onlyDate = (str)=> {
    let date = str.split(",");
    console.log(date[0]);
}

// 14. Write a program that masks all but last four characters of the string "5565534276455423" to '#'
let maskString = (str) => {
    let len = str.length;
    let arr = str.slice(0, len-4).split("").fill("#").join("");
    console.log(arr.concat(str.slice(len-4)));
}

// 15. Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case
let convertFirstSixCharacter = (str)=> {
    let digitCount= "";
    let i = 0;
    let arr = [];
    while(digitCount.length<6) {
        if (str[i]!=" ") {
            digitCount+= str[i];
        } else {
            arr.push(i);
        }
        i++;
    }
    let upper = str.slice(0,6 + arr.length).toUpperCase();
    console.log(upper + str.slice(6+arr.length));
}


// Advance
// 1. Given an input string S and two characters c1 and c2, you need to replace every occurrence of 
// character c1 with character c2 in the given string
let stringReplace = (str, c1, c2) => {
   let arr = str.split("");
   for (let i = 0 ; i < arr.length; i++){
       if (arr[i]== c1){
           arr[i]= c2;
       } else if (arr[i]==c2){
           arr[i]=c1;
       }
   }
   console.log(arr.join(""));
};


// 2. Given an input string S that contains multiple words, you need to remove all the spaces 
// present in the input string. There can be multiple spaces present after any word
let removeSpaces = (S)=> {
    let arr = S.trim().split(" ").join("");
    console.log(arr);
}


// 3. A program that counts the value of each character and prints the most repeated character?
// gurpreet
let mostOccuringCharacter = (str)=> {
    let obj = {};
    for (let i=0; i< str.length; i++){
        if (str[i] in obj){

            if (str[i]!=" "){
                obj[str[i]]=Number(obj[str[i]])+ 1;
            }
        } else {
            
            if (str[i]!=" "){
                obj[str[i]]=1;
            }
        }
    }
    let arr = [0];
    let newStr = "";
    for (let key in obj){
        if (obj[key]>arr[0]){
            arr[0]= obj[key];
            newStr = key;
        }
    }
    // console.log(arr);
    console.log("Character "+ newStr+ " occurs: "+ arr + " times");
}


// 4. Write a program to toggle case of each character of the string
//    "good afternoon" (example: "skillsafari" ⇒ "sKiLlSaFaRi" )
let toggleCase = (str) => {
    let newStr="";
    for(let i=0; i< str.length; i++){
        if (i%2==0){
           newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    console.log(newStr);
}



// 5. Given a string "how was your day?" and a word "how", write a program that removes the 
// occurrence of the specified word from given sentence. 
// ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")
let removeSpecificWord = (str, word) => {
    let arr = str.split(" ");
    if (arr.includes(word)){
        arr.splice(arr.indexOf(word),1);
    }
    console.log(arr.join(" "));
}
// beginner - intermediate

// 1. Find sum of an array and display the output . Example [10,4,5,2,5,6,9].
// let arr = [10,4,5,2,5,6,9];
let sumOfArray = (arr) => {
    let sum = 0;
    for (let key of arr){
        sum += key;
    };
    console.log("Sum: ",sum);
};


// 2. Find average of an array and display the output.
let averageOfArray = (arr) => {
    let sum = 0;
    for (let key of arr){
        sum += key;
    };
    console.log("Average: ",(sum/arr.length).toFixed(2));
};
// 3. Find maximum and minimum of an array.
let maxAndMin = (arr)=> {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);
}

// 4. Find Median and Mode of an array.
//    Median : (N+1/2)th term.
//    Mode : Most repeating term
let medianAndMode = (arr) => {
    arr.sort((a,b)=> a-b);
    let N = arr.length;
    // MEDIAN
    let Median;
    if (N%2!=0){
        Median = (N+1)/2;
        console.log(`Median: ${arr[Median-1]}`);
    } else {
        Median = N/2;
        console.log(`Median: ${(arr[Median-1]+arr[Median])/2}`);
    }
    // MODE
    let obj = {};
    for (let i=0; i< arr.length; i++){
        if (obj[arr[i]]== undefined) {
            obj[arr[i]]= 1
        } else {
            obj[arr[i]]+= 1
        }
    }
    let frequency = [0];
    let Mode = [0];
    for (let itm in obj){
        if (obj[itm] > frequency[0]){
            frequency[0]=obj[itm];
            Mode[0] = itm; 
        }
    }
    console.log(`Mode: ${Mode[0]}`);
}

// 5. Find sum of two arrays.
//    [3,5,2,9,4] = 3+5+2+9+4 = 23
//    [6,2,8,1,3] = 6+2+8+1+3 = 20
//    Final Output : 20+23 = 43
let sumOfTwoArray = (arr1, arr2) => {
    let arr3 =arr1.concat(arr2);
    sumOfArray(arr3);
};

// 6. Find number of constants and vowels in a string.
let numberOfVowelsAndConsonants = (str) => {
    let vowels = str.match(/[aeiou]/g);
    console.log("Vowels: ",vowels.length);
    let consonants = str.trim().split(" ").join("").length - vowels.length;
    console.log("Consonants: ", consonants);
}

// 7. Shift an array by X to right.
//    Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]
let shiftArrayByX = (arr, shiftX)=> {
    for (let i =0 ;i < shiftX; i++){
        let digit = arr.pop();
        arr.unshift(digit);
    }
    console.log(arr);
}

// Advanced
// 1. Find the sum of two matrix.
a = [  
    [1, 0, 1],  
    [4, 5, 6],  
    [1, 2, 3]  
];  

// #Initialize matrix b  
b = [  
      [1, 1, 1],  
      [2, 3, 1],  
      [1, 5, 1]  
 ];  
 let sumOfMatrix = (matrix1, matrix2) => {
     let arr = [];
     for (let key of matrix1){
         arr.push(key);
     }
     for (let i=0; i< matrix2.length; i++){
         for (let k=0; k < matrix2[i].length; k++){
             arr[i][k] += matrix2[i][k];
            }
        }
        console.log("Sum of Both the matrix: ",arr);
 }

// 2. Display transpose of matrix. 
//    Explaination https://www.varsitytutors.com/linear_algebra-help/the-transpose
let transposeOfMatrix = (matrix) => {
    let arr1 = [];
    let matrixlength = matrix.length;
    for (let m=0; m< matrixlength; m++){
        arr1.push([]);
        for (let n=0; n < matrixlength; n++){
            arr1[m].push(0);
        }
    }
    for (let i=0; i< matrix.length; i++){
        for (let k=0; k < matrix[i].length; k++){
                arr1[k][i] =matrix[i][k];
           }
       }
       console.log("Transpose of Matrix: ", arr1);
}

// 3. Find Identity matrix.
//    Explanation https://www.varsitytutors.com/hotmath/hotmath_help/topics/identity-matrix
let findIdendityMatrix = (index)=> {
    let arr1 = [];
    for (let m=0; m< index; m++){
        arr1.push([]);
        for (let n=0; n < index; n++){
            if (m ==n){
                arr1[m].push(1)
            } else {
                arr1[m].push(0);
            }
        }
    }
    console.log("Identify matrix with index: ",arr1)

}
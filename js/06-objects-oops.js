// Objects and Oops

// q01
// Given an array of objects of student's marks:

const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];
// 1. Print the name and total marks of each student.
let nameAndTotalMarks = () => {
    for (let key in studentDetails){
        let eachStudent = studentDetails[key];
        let name = eachStudent["name"];
        let marks = eachStudent["maths"]+ eachStudent["science"]+ eachStudent["english"]+eachStudent["computer"];
        console.log(`${name}'s total marks is ${marks}`);
    }
}

// 2. Print the name of student whose total marks is highest.
let highestTotalMarks = () => {
    let highestUser =studentDetails.reduce((accumulator, user)=> {
        let eachStudent = user;
        let marks = eachStudent["maths"]+ eachStudent["science"]+ eachStudent["english"]+eachStudent["computer"];
        user["total"] = marks; 
        return (accumulator.total || 0) > user.total ? accumulator : user;
    },{});
    console.log(`${highestUser["name"]} has highest ${highestUser["total"]} marks`);
}

// 3. Print the name of student whose total marks is lowest.
let lowestTotalMarks = () => {
    let lowestUser =studentDetails.reduce((accumulator, user)=> {
        let eachStudent = user;
        let marks = eachStudent["maths"]+ eachStudent["science"]+ eachStudent["english"]+eachStudent["computer"];
        user["total"] = marks; 
        return (accumulator.total || 0) <= user.total ? accumulator : user ;
    },studentDetails[0]);
    console.log(`${lowestUser["name"]} has lowest ${lowestUser["total"]} marks`);
}


// 4. Print the average marks of the class in computer subject.
let averageMarks = (subject) => {
    let total = 0;
    for (let key in studentDetails){
        total += studentDetails[key][subject];
    }
    let average = total / studentDetails.length;
    console.log(`Average in subject ${subject} is ${average}`);
}

// 5. Print the grades of all students:
//    Grade A if total marks is higher than or equal to 75%,
//    Grade B if higher than or equal to 60%,
//    Grade C if higher than or equal to 35%,
//    Grade D if lower than 35%.
let studentGrades = () => {
    for (let key in studentDetails){
        let eachStudent = studentDetails[key];
        let name = eachStudent["name"];
        let marks = eachStudent["maths"]+ eachStudent["science"]+ eachStudent["english"]+eachStudent["computer"];
        let percentage = (marks / 4).toFixed(2) ;
        if (percentage >=75){
            console.log(`${name}'s grade is Group A`);
        } else if ( percentage >=60){
            console.log(`${name}'s grade is Group B`);
        } else if (percentage >= 35){
            console.log(`${name}'s grade is Group C`);
        } else {
            console.log(`${name}'s grade is Group D`);
        }
    }
}


// 6. Print the total number of students passed and their names. Pass when total marks is greater than 35%.
let studentPass = () => {
    let totalPass = [];
    let totalFail = [];
    for (let key in studentDetails){
        let eachStudent = studentDetails[key];
        let name = eachStudent["name"];
        let marks = eachStudent["maths"]+ eachStudent["science"]+ eachStudent["english"]+eachStudent["computer"];
        let percentage = (marks / 4).toFixed(2) ;
        if (percentage >=35){
            totalPass.push(name);
        } else {
            totalFail.push(name);
        }
    }
    console.log(`Total Student who passes the exam : ${totalPass.length}`);
    console.log(`Names : ${totalPass}`);
    console.log(`Total Student who fails the exam : ${totalFail.length}`);
    console.log(`Names : ${totalFail}`);
}

// q02
// Salary calculation using OOPS concept.
// 1. Create a Class using ES6 in JavaScript named Employee and assign necessary
// data members and methods such as name, id, basic salary, HRA, Allowances; 
// define getSalary method which will return the net salary.
// 2. Create two Instances of Employee with all necessary details.
// 3. Call the getSalary method of each instance and return the net salary based on your computation.
class Employee {
    constructor(name, id, salary){
        this.empname = name;
        this.empid = id;
        this.empsalary = salary;
    }
    getSalary(){
        let HRA = 1500;
        let otherAllowances = 900;
        let totalSalary = this.empsalary + HRA + otherAllowances;
        console.log(`Employee Name: ${this.empname}`);
        console.log(`ID Number: ${this.empid}`);
        console.log(`Base pay: ${this.empsalary}`);
        console.log(`Gross pay: ${totalSalary}`);
    }
}
let emp1 = new Employee("Gurpreet Singh", "#STX25236", 21000);
let emp2 = new Employee("Madhu", "#STX28288", 18000);
// emp1.getSalary();
// emp2.getSalary();

// q03
// Bank Account (Object Oriented Programming in JavaScript)

// Create a class and define data members such as name, bank account number,
// account balance, account type, ifsc and name it as BankAccount.
// Create three Instances(three customers) of BankAccount with all necessary details.
// Print the name of customers and their account balances.
// Calculate the average account balance from all the instances.
class BankAccount {
    constructor(name, bankAccountNumber, accountBalance, accountType, ifsc){
        this.username = name;
        this.bankAccountNumber = bankAccountNumber;
        this.accountBalance = accountBalance;
        this.accountType = accountType;
        this.ifsc = ifsc;
    }
    info(){
        console.log(`Customer Name: ${this.username}`);
        console.log(`Bank Account Number : ${this.bankAccountNumber}`);
        console.log(`Account Balance : ${this.accountBalance}`);
        console.log(`Account Type : ${this.accountType}`);
        console.log(`IFSC Code : ${this.ifsc}`);
    }
}
let customer1 = new BankAccount("Gurpreet Singh", 254856985475, 12000, "Saving", "SBTI0THANES");
let customer2 = new BankAccount("Monu", 254856995855, 2000, "Saving", "SBTI0THANES");
let customer3 = new BankAccount("Madhu", 254856685275, 25000, "Current", "SBTI0THANES");
let averageAccountBalance = () => {
    let total = customer1["accountBalance"]+customer2["accountBalance"]+customer3["accountBalance"];
    console.log(`Average Account Balance Of All Customer:  ${total/3}`);
}


// q04

const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];
// 1. Given an array of objects of items in cart, print:
// the total No. of items
// the total cart value
// the total discounted value(sum of dicounted values on each item) based on the given discount
// total tax amount (18% tax, calculated on total cart value)
let allCardDetails = () => {
    console.log(`Total no. of items: ${cartItems.length}`);
    let cardValue = 0;
    let discountValue = 0;
    for (let key in cartItems){
        cardValue += cartItems[key]["price"];
        discountValue+= ( cardValue*(cartItems[key]["discount"]) )/100 ;
    }
    let totalCartValue = cardValue - discountValue;
    let totalTax = (totalCartValue * 18)/100;
    console.log(`Total cart value before discount : ${cardValue.toFixed(2)}`);
    console.log(`Total discount : ${discountValue.toFixed(2)}`);
    console.log(`Total cart value after discount : ${totalCartValue.toFixed(2)}`);
    console.log(`Total Tax amount : ${totalTax.toFixed(2)}`);
}
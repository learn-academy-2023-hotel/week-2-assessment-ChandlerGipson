// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// describe ("divisibleByThree", () => {
// it ("takes on an array of numbers and returns an array with all the numbers multiplied by 3"), () => 
// //expected output: 15 is divisible by three
//    expect (divisibleByThree(object.number)).toEqual("15 is divisible by three")
// })

// const divisibleByThree = (num) => {
//     return `${num} is divisibl by three`
// }
// a) Create a test with expect statements for each of the variables provided.

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
// const divisibleByThree = (object) => {
//     const number = object.number
//         if(number % 3 === 0){
//             return `${number} is divisible by three`
//         } else  {
//             return `${number} is not divisible by three`
//         }
// }
// console.log(divisibleByThree(object1))
// console.log(divisibleByThree(object2))
// console.log(divisibleByThree(object3))

// Pseudo code:i just ran a normal fucntion with "object" as the array. used if else statments and % by 3 is stricly equal to 0. if hte number is i did string interpulation to place the answer inside the if string. another string interpulation to place inside if it is not divisible by three. than i just ran the consle log by the name of the function divisibleByThree. 

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
 
// a) Create a test with expect statements for each of the variables provided.
describe ("capitalizeWords", () => {
    it("takes the element of the array and modifies the first character", () => {
        expect(capitalizeWords(randomNouns1)).toEqual["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        expect(capitalizeWords(randomNouns2)).toEqual["Temperature", "Database", "Chopsticks", "Mango"]
    })
})
//ReferenceError: toUpper is not defined


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
const capitalizeWords = (strings) => { // takes an array as input
    return strings.map((value) => { // goes through each word in the array, capitalizes the first letter and adds the capitalized word to the function
        return value[0].toUpperCase() + value.slice(1)
    })
}      
console.log(capitalizeWords(randomNouns1)) // [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]
console.log(capitalizeWords(randomNouns2)) // [ 'Temperature', 'Database', 'Chopsticks', 'Mango' ]
// Pseudo code:i started by creating a basic function. for my return i used the built in methos toUpperCase for both arrays in order to give me back the arrays capitalized
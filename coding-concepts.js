// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

// const cohort = "Hotel 2023"
// console.log(cohort.split(" "))

// a) Your answer: "hotel, 2023"
// b) Verify and explain: looks like with the .split method being used with the space inbetween the "" the index it would loook for is the space inbetween hotel and 2023

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer:undefined
// b) Verify and explain:the string holding learn student isnt being called anywhere

// --------------------3) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: 11, 13, 15
// b) Verify and explain: using the .filter method to go over each number in the array and using % to see if the number is able to divid into itsself with ni remainder. if there is a remainder it will be added back to the array

// --------------------4) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: "Javascript"
// b) Verify and explain:the console.log is only asking for the language portion of the class while the array is asking for 0 or the first position in the index.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:student "George" cohort: "Hotel" year: 2023
// b) Verify and explain: (honestly studied my notes for this one) i knew it was asking for students name first cohort second and the year third based off of how theyre in on the "class". the const at the buttom

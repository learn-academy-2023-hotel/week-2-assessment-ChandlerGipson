// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

function findFirstVowelIndex(str) {
    const firstVowelIndex = str.search(/[aeiouAEIOU]/);
    if (firstVowelIndex !== -1){
        console.log(`the first vowel is at index ${firstVowelIndex}`);
    } else {
        console.log("no vowels found in the string.");
    }
    return firstVowelIndex;
}
const inputString = "Hello, World!";
console.log(inputString)
// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

//One of the things i liked that chatcpt did was it used the if, else statements. i also const firstVowelIndex which is said to equl str with a search method. i dont think we have been taught about the search method so im not sure if that is correct. but it lists out the vowel in lowercase and upper case which is correct. i wouldnt have taken this approach, i dont even belive it is giving the right output. i learned dont turst everthing from AI tools 
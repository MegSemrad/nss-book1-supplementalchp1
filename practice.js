/* ------------------------------ Introduction : Age In Dog Years ------------------------------ */

/* 
- Paramter is a variable that will hold the value of the input
- A pure function means a function that does its job and RETURNS a value
- MUST HAVE: return & a variable to catch the result of the invoked function
*/

const  calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson/7
    return ageInDogYears
};

const dogAge = calculateAgeInDogYears(22);
console.log(dogAge);




/* ------------------------------- Practice : Best In Show ------------------------------------ */

/*
- Do not forget the === triple equal sign when using if statements
*/

const favoritePet = (petString) => {
    if(petString === "meow") {
        return "I like cats"
    }
    else {
        return `My favorite dog breed is ${petString}.`
    }
;}

const myFavorite = favoritePet("rottweiler");
console.log("When it comes to pets, " + myFavorite);







/* ---------------------------------- Practice : Addition --------------------------------------*/

/*
- Note: moving paramaters around in order do nothing in this example to the returned result
- Also Note: moving the variables around within the function does not effect returned result
*/

const add = (number2, number3, number1) => {
    const addedNumbers = number3 + number1 + number2
    return addedNumbers
};

const finalAddedNumbers = add(17, 4, 11);
console.log(finalAddedNumbers);







/* ------------------------------- Practice : Self-Driving Cars ------------------------------ */

/*
- As moving along, remember to check on spelling
- Remember if passing a string into function as argument add the ""
*/

const go = (direction, speed) => {
    let carDirectionAndSpeed = ""
    if(speed > 75) {
        carDirectionAndSpeed = `The car is moving ${direction} at ${speed} mph. SLOW DOWN!`
    }
    else {
        carDirectionAndSpeed = `The car is moving ${direction} at ${speed} mph.`
    }
    return carDirectionAndSpeed
};

const highSpeed = go("forwards", 85);
const lowSpeed = go("backwards", 8);
const mediumSpeed = go("in circles", 12);

console.log(highSpeed);
console.log(lowSpeed);
console.log(mediumSpeed);






/* ---------------------------------- Practice : Evens or Odds ---------------------------------- */

/*
- DO NOT FINISH THIS SECTION!!!!!!!!!!!
*/

const digits = [14, 15, 21, 30, 11]

// const evenOrOdd = (numbers) => {
//     for(const number of numbers) {
//         if(number % 2 === 0) {
//             return "Even"
//         }
//         else {
//             return "Odd"
//         }
//     }
// };

const evenOrOdd = (numbers) => {
    for(var i = 0; i < digits.length; i++) {
        if (i % 2 === 0) {
            return "Even"
        }
        else {
            return "Odd"
        }
    }
}

const result = evenOrOdd(digits);
console.log(result);








/* ------------------------------------ Practice : Double Functions ------------------------------*/

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
];


const filterByLetter = (words) => {
    const wantedWords = [];
    const unwantedWords = [];

    for(const word of words) {
        if(word.startsWith("k")) {
            unwantedWords.push(word)
        }
        else {
            wantedWords.push(word)
        }
    } 
    return wantedWords
};


const wantedWordsString = (wantedWords) => {
    const joingingWordString = wantedWords.join(" ")
    return joingingWordString
};


const filteredWords = filterByLetter(words);
const completedString = wantedWordsString(filteredWords);


console.log(completedString);




/* ----------------------- Practice : You Can Tune a Piano, but You Can't.... --------------------------*/
/*
- To have a random number picked for you = Math.random() method by defaults returns 
  a number between 0 and 1. Multiple that by 2 and then it will be a number btween 
  0 and 2. This simulates a coin flip. 
    - Math.random() * 2
*/

const catchFish = () => {
    let chanceOfCatchingFish = Math.random() * 3
    if(chanceOfCatchingFish === 0.33) {
        console.log("Sven hooked a tuna! :)")
    }
    else {
        console.log("Sven came up empty-handed. :(")
    }
    return chanceOfCatchingFish;
};

catchFish();

/* Introduction : Age In Dog Years */

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




/* Practice : Best In Show */

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
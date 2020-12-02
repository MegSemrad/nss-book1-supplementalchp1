/* 
Paramter is a variable that will hold the value of the input

A pure function means a function that does its job and RETURNS a value

MUST HAVE: return & a variable to catch the result of the invoked function
*/

const  calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson/7
    return ageInDogYears
};

const dogAge = calculateAgeInDogYears(22);
console.log(dogAge);
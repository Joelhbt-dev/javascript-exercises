const findTheOldest = function(arr) {

    const getAge = (person)=>{

        const death = person.yearOfDeath || new Date().getFullYear();
        return death - person.yearOfBirth;
    };

    return arr.reduce((oldestSoFar,currentPerson)=>
    {

        const oldestAge = getAge(oldestSoFar);
        const currentAge = getAge(currentPerson);

        return currentAge > oldestAge ? currentPerson : oldestSoFar;
    })



};



// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function(peopleList) {
    const CURRENT_YEAR = new Date().getFullYear();
    const modifiedPeopleList = peopleList.map(
        people => {
            people.yearOfDeath ??= CURRENT_YEAR;
            people.age = people.yearOfDeath - people.yearOfBirth;
            return people;
        }
    );
    
    modifiedPeopleList.sort(
        (a, b) => {
            return a.age - b.age;
        }
    ).reverse();

    return modifiedPeopleList[0];

};

// Do not edit below this line
module.exports = findTheOldest;

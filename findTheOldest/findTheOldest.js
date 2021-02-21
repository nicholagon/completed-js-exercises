let findTheOldest = function(persons) {
    const oldestSort = persons.sort((a, b) => {
        let ageOfA, ageOfB;

        if(!a.yearOfDeath)
           ageOfA = getAge(a.yearOfBirth, new Date().getFullYear());
        else
            ageOfA = getAge(a.yearOfBirth, a.yearOfDeath);

        if(!b.yearOfDeath)
            ageOfB = getAge(b.yearOfBirth, new Date().getFullYear());
        else
            ageOfB = getAge(b.yearOfBirth, b.yearOfDeath);
        
        if(ageOfA > ageOfB) return -1;
        if(ageOfA < ageOfB) return 1;        
    })

    return oldestSort[0];
}

function getAge(startYear, endYear) {
    return endYear - startYear;
}

module.exports = findTheOldest

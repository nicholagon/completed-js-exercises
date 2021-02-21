let findTheOldest = function(persons) {
    const oldestSort = persons.sort((a, b) => {
        let ageOfA, ageOfB;

        ageOfA = getAge(a.yearOfBirth, a.yearOfDeath);
        ageOfB = getAge(b.yearOfBirth, b.yearOfDeath);
        
        if(ageOfA > ageOfB) return -1;
        if(ageOfA < ageOfB) return 1;        
    })

    return oldestSort[0];
}

function getAge(startYear, endYear) {
    if(!endYear)
        return new Date().getFullYear() - startYear;
    return endYear - startYear;
}

module.exports = findTheOldest

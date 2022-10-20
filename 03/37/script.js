

const calcAge = function(birthYeah) {
    return 2022 - birthYeah;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    // return retirement;
    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} retired ${retirement * -1} years ago`;
    }
    
}

console.log(yearsUntilRetirement(1992, 'James'));
console.log(yearsUntilRetirement(2001, 'Giannis'));
console.log(yearsUntilRetirement(1950, 'SteveJobs'));
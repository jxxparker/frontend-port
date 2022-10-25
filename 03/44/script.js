const jihun = {
    firstName: 'Jihun',
    lastName: 'Park',
    birthYear: 1992,
    job: 'Programmer',
    friends: ['Jordan', 'Mike', 'Shaq'],
    hasDrivers: false,

    //   calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    //   }
    //   calcAge: function () {
    //     // console.log(this);
    //     return 2022 - this.birthYear;
    //   }
    calcAge: function() {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} - years old ${jihun.job}, and he has ${this.hasDrivers ? 'a' : 'no'} drivers license.`
    }
};

console.log(jihun.calcAge());
console.log(`${jihun.age} is my age`);

// console.log(jihun['calcAge'](1991));


// Challenge
// Jihjun is 46 years old teacher. 
console.log(jihun.getSummary());













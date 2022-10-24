const jihun = {
    firstName: 'Jihun',
    lastName: 'Park',
    birthYear: 1992,
    job: 'Programmer',
    friends: ['Jordan', 'Mike', 'Shaq'],
    hasDrivers: true,

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
        
    }
};

console.log(jihun.calcAge());
console.log(`${jihun.age} is my age`);

// console.log(jihun['calcAge'](1991));


// Challenge
// Jihjun is 46 years old teacher. 















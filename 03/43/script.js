
const jihun = {
  firstName: 'Jihun',
  lastName: 'Park',
  age: 2022 - 1992,
  job: 'Programmer',
  friends: ['Jordan', 'Mike', 'Shaq'],
};

console.log(jihun);
console.log(jihun.lastName);
console.log(jihun['lastName']); // both works from above.

const nameKey = 'Name';
console.log(jihun['first' + nameKey]);
console.log(jihun['last' + nameKey]);

// ----

// const answer = prompt('What do you want to know about Jihun?');

// if (jihun[answer]) {
//     console.log(jihun[answer]);
// } else {
//     console.log('Wrong prompt request');
// }

jihun.location = 'Korea';
jihun['instagram'] = '@jihunypark';
console.log(jihun);

console.log(`${jihun.firstName} has ${jihun.friends.length} friends, and his best friend is ${jihun.friends[0]}`)






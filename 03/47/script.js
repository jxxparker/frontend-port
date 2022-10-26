// Looping arrays, breaking and continuing

const jihunArray = [
    'Jihun',
    'Park',
    2022- 1992,
    'Programmer',
    ['Jihun', 'Jordan', 'Mike'],
    true,
];

const types = [];
for (let i = 0; i < jihunArray.length; i++) {
    console.log(jihunArray[i], typeof jihunArray[i]);

    // types[i] = typeof jihunArray[i];
    types.push(typeof jihunArray[i]);
}
// console.log(types);
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

const years = [1991, 2001, 2010, 2015, 2022];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);


// continue and break
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
for (let i = 0; i < jihunArray.length; i++) {
    if (typeof jihunArray[i] !== 'string') continue;

    console.log(jihunArray[i], typeof jihunArray[i]);
}

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
for (let i = 0; i < jihunArray.length; i++) {
  if (typeof jihunArray[i] !== 'string') break;

  console.log(jihunArray[i], typeof jihunArray[i]);
}
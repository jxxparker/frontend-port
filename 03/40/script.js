// Basic Array operations ( Methods )

// Add Elements
const friends = ['Jihun', 'Jordan', 'Mike'];
const newLength = friends.push('Kobe');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);


// Remove Elements
friends.pop();
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// friends.shift();
console.log(friends);
console.log(friends.indexOf('Jihun'));
console.log(friends.includes('Bob'));
console.log(friends.includes('John'));
friends.push(23);
console.log(friends);
const user = {
  name: 'Tom',
  age: 32
}


console.log({
  age: 88,
  ...user,
  location: 'Carignan' 
});

console.log(user);

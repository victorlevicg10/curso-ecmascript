const user = {username :'gndx',age:34,country:'PE'};
const {username,...values}=user;

console.log(username);
console.table(values);
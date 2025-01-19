function cartvalues(...values){
  return values
}
let comingValue= cartvalues(100,150,589)
console.log(comingValue);

//passing object in function

const myObject ={
  username:"thegaiwad18",
  password:"omkar9919"
}
function userCredentials(anyobject){
  return `the username is ${anyobject.username} and the password is ${anyobject.password}`
}

let chalpeint = userCredentials(myObject)
console.log(chalpeint);

//passing array in function

const myarray = ["omkar", 1,55,"hero"]

function arraypassing(anyarray){
  return `the name in array is ${anyarray[0]} and he is a ${anyarray[3]} and his favourite number form list is ${anyarray[1]}`
}
let ghechap =arraypassing(myarray)
console.log(ghechap);

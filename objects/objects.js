// object litearls
const mysym = Symbol("key")
const myobj = {
  name: "omkar",
   "fullname":"omkar gaikwad",
  [mysym]:"mykey1",
  age:18,
  identity:"hero",
  isloggedin: false,
  lastloginday:["sunday","friday"]
}
// console.log(myobj[mysym])
// myobj.age=20
// Object.freeze(myobj)
// myobj.age=22
// console.log(myobj)
// console.log(typeof mysym)




//this is singleton object


const instauser = new Object() 
console.log(instauser);
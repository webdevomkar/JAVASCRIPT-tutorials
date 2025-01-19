const myobj = {
  ishuman: true,
  canfly: false,
}
const secobj = {
  name:"omkar",
  lastname:"gaikwad"
}
secobj.__proto__=myobj//this is old way of writting 

Object.setPrototypeOf(secobj,myobj)
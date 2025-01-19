// explicit return-> need tp write curly braces and return keyword
const addtwo = (num1,num2)=>{
  return num1+num2
}
//console.log(addtwo(50,50))

//implicit return -> no need tp write curly braces and return keyword

const twoadd = (num1,num2) => (num1+num2)
//console.log(addtwo(50,50))


//returning object in arrow function

const myObj1 = () => ({username: "omkar", password: 9919});
console.log(myObj1());



const myObj2 = (nav, namber) => ({username: nav, password: namber})
console.log(myObj2("sam",8878))

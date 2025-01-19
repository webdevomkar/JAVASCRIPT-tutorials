const myarray = [0,1,2,3,4,5,6,7]
/*
myarray.push("gaikwad")
myarray.push("bhai")
myarray.unshift(121) //add element to start
myarray.shift() // remove the starting element
console.log(myarray.includes("bhai"))
console.log(myarray.indexOf("bhai"))qw
console.log(myarray)
console.log(myarray.length)
*/

let newarray =    myarray.slice(5,7)
console.log(newarray);

let newarray2 = myarray.splice(1,3) 
console.log(newarray2)
console.log(myarray)

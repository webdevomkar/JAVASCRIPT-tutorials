function one (){
  console.log("one executed");
  three()
}
function two (){
  console.log("two executed");
}
function three (){
  console.log("three executed");
  
  two()
}

one()

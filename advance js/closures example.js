// document.querySelector("#red").addEventListener('click',()=>{
//   document.body.style.backgroundColor="red"
// })

// document.querySelector("#green").addEventListener('click',()=>{
//   document.body.style.backgroundColor="green"
// })

//but we cant do this if we have 500 colors to display

function colorhandler(color){
       function abcd(){
      document.body.style.backgroundColor=`${color}`
    }
  return abcd
}
document.querySelector("#red").addEventListener('click',colorhandler("red"))



document.querySelector("#green").addEventListener('click',colorhandler("green")) 

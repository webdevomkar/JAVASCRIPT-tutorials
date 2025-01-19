document.querySelector('#start').addEventListener('click',startchangingcolor)

document.querySelector('#stop').addEventListener('click',stopchangingcolor)
let intervalId;
function startchangingcolor(){

  if(intervalId==null){
  function changingcolors(){
    
      document.body.style.backgroundColor=randomcolor();
      }
  intervalId=setInterval(changingcolors,1000)
    
    } 
}

function stopchangingcolor(){
   if(intervalId){
    clearInterval(intervalId)
   intervalId=null
   }
   
}

const randomcolor = function (){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for(let i=0;i<6;i++){
      color = color + hex[parseInt(Math.random()*16)]
      
  }
  console.log(color)
  return color;
  
}

const changeclr = document.querySelectorAll('.aaa')
const main = document.querySelector('#main')
changeclr.forEach((aaa)=>{
  //console.log(aaa)
  aaa.addEventListener('click',(e)=>{
     //console.log(e)
     //console.log(e.target)
     console.log(e.target.id)
     if(e.target.id==='red'){
      main.style.backgroundColor=e.target.id
     }
     if(e.target.id==='orange'){
      main.style.backgroundColor=e.target.id
     }
     if(e.target.id==='yellow'){
      main.style.backgroundColor=e.target.id
     }
     if(e.target.id==='blue'){
      main.style.backgroundColor=e.target.id
     }
  })
})
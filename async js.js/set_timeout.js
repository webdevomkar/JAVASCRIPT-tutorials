//direct using 

setTimeout(()=>{
    console.log("it took fivee second to print")
},4000)

//through reference

const throughref = (()=>{
  console.log("it took three second to print")
  
})

setTimeout(throughref,2000)

const changetext = function(){
 const textin = document.querySelector('h1')
 textin.innerHTML="studyinf async js"
}
const stopme = setTimeout(changetext,5000)


document.querySelector('#stop').addEventListener('click',()=>{
    clearTimeout(stopme)
})


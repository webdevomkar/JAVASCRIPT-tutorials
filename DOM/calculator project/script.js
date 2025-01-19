let mystring = ''
let buttons=document.querySelectorAll('.btn')
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(event)=>{
   
    if(event.target.innerHTML=='='){
       
      mystring=eval(mystring)
      document.querySelector('#entryspot').value = mystring
    }
    else if(event.target.innerHTML=='AC') {
      mystring=''
      document.querySelector('#entryspot').value = mystring
    }
    else if (event.target.innerHTML === 'C') {
      mystring = mystring.slice(0, -1); // Remove the last character
      document.querySelector('#entryspot').value = mystring;
    }
    else{
      console.log(event.target);
      mystring = mystring + event.target.innerHTML
      document.querySelector('#entryspot').value = mystring
    }




      
      
  })
})
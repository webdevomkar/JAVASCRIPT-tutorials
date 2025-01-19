const form= document.querySelector('form')


form.addEventListener('submit',(e)=>{
   e.preventDefault()
   const weight = parseInt(document.querySelector('#weight').value);
   const height = parseInt(document.querySelector('#height').value);
   const results = document.querySelector('#results')

   if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`please give valid weight ${weight} is not valid`
   }
   else if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`please give valid height ${height} is not valid`
   }
   else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    
    if(bmi<18.6){
      results.innerHTML=`your BMI is ${bmi} and it is underweight`
    }
    else if(bmi>24.9){
      results.innerHTML=`your BMI is ${bmi} and it is overweight`
    }
    else{
      results.innerHTML=`your BMI is ${bmi} and it is in normal range`
    }


   }

   



})
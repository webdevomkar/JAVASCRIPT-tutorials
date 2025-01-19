
function substring_it (string1,maxlength){
  if(string1.length>maxlength){

    return (string1.substring(0,maxlength)+`...`).split(" ").join("");

    //let cuted=string1.substring(0,maxlength)+`...`;
    //console.log(cuted.split(" ").join(""));
  }  
  else{

    return string1+`...`

   // let cuted2=string1+`...`
   // console.log(cuted2.split(" ").join(""));
  }
}

console.log(substring_it("omkar sanjay gaikwad",10)); 




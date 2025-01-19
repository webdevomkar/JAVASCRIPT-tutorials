const  myarr=["o","m","k","a","r"]
myarr.forEach( (arr,index,item)=>{
  console.log(arr,index,item)
} )

//return number greater than 4 from given array using foreach

const numarr=[1,2,3,4,5,6,7,8,9,10];
const newarr=[]
numarr.forEach( (item) => {
  if(item>4){
    newarr.push(item)
    console.log(item)
  }
})
console.log(newarr)
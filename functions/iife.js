//immediately invoked functins (iife)

//many problem occurs due to the pollution(variable declaration etc) of global scope hence to remove or eliminate that problems  IIFE is used

(function chai()
{
  console.log(`chai and code`);
} 
)();

( (name)=>{
  console.log(`the name of the hero is ${name}`);
} 
)("omkar")
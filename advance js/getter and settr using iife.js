
//iife

const ans = (function (){
  var privateval = "omkar private";

  return {
    getter: function(){
      console.log(privateval)
    },
    setter: function(changed){
      privateval=changed
    }("okkk public")
  }
})()

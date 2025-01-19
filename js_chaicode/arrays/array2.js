let marvel = ["thor","ironman","hulk"]
let dc =  ["flash","shazam","wonderwoman"]
let allhero = [...marvel,...dc]  // spread is done two arrays are merged
console.log(allhero);
let separatedarray =  allhero.flat(Infinity) //it separates the com bined array
console.log(separatedarray)
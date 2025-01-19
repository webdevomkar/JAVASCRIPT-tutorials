//CALL

const myobj1 = {
  name: "omkar",
  age: 20,
  printdetails: function (state, country) {
    console.log(this.age, state, country, this.name);
  },
};

const myobj2 = {
  name: "Nraj",
  age: 18,
};
myobj1.printdetails.call(myobj1, "bhopal", "us");
myobj1.printdetails.call(myobj2, "kerla", "usa");

// apply

const obj1 = {
  name: "omkar",
  age: 20,
  printdetails: function (state, country) {
    console.log(this.age, state, country, this.name);
  },
};

const obj2 = {
  name: "Nraj",
  age: 18,
};
//obj1.printdetails.apply(obj1,["delhi","us"])
//obj1.printdetails.apply(obj2,["maharashtra","india"])

//bind

//let binded= obj1.printdetails.bind(obj2,"maharashtra","india")
//binded()

function xy() {
  console.log(this);
}
let x = {
  name: "omkar",
};

xy.call(x.name);

const arr=[1,2,3]
const summ=arr.reduce( (acc,curr) => {
  //console.log(`value of acc is ${acc} || value of curr is ${curr}`)
  return acc+curr
},0)
//console.log(summ);

//total bill calculation

const books = [
  {
      bookName: "The Great Gatsby",
      price: 10.99
  },
  {
      bookName: "To Kill a Mockingbird",
      price: 8.99
  },
  {
      bookName: "1984",
      price: 9.99
  },
  {
      bookName: "Pride and Prejudice",
      price: 7.99
  },
  {
      bookName: "The Catcher in the Rye",
      price: 11.99
  },
  {
      bookName: "The Hobbit",
      price: 12.99
  },
  {
      bookName: "Moby Dick",
      price: 6.99
  },
  {
      bookName: "War and Peace",
      price: 14.99
  }
];

const totalbill = books.reduce( (acc,bkprice)=>{
   return acc+bkprice.price
},0 )
console.log(totalbill);

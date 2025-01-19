//return number greater than 4 from given array using filter

const numarr=[1,2,3,4,5,6,7,8,9,10];
const storenum =numarr.filter((num)=>{
  return num>4
})
//console.log(storenum)

const books = [
  {
      bookName: "The Great Gatsby",
      publishYear: 1925,
      editionYear: 2004,
      authorName: "F. Scott Fitzgerald"
  },
  {
      bookName: "To Kill a Mockingbird",
      publishYear: 1960,
      editionYear: 2006,
      authorName: "Harper Lee"
  },
  {
      bookName: "1984",
      publishYear: 1949,
      editionYear: 2013,
      authorName: "George Orwell"
  },
  {
      bookName: "Pride and Prejudice",
      publishYear: 1813,
      editionYear: 2008,
      authorName: "Jane Austen"
  },
  {
      bookName: "The Catcher in the Rye",
      publishYear: 1951,
      editionYear: 2010,
      authorName: "J.D. Salinger"
  },
  {
      bookName: "The Hobbit",
      publishYear: 1937,
      editionYear: 2012,
      authorName: "J.R.R. Tolkien"
  },
  {
      bookName: "Moby Dick",
      publishYear: 1851,
      editionYear: 1992,
      authorName: "Herman Melville"
  },
  {
      bookName: "War and Peace",
      publishYear: 1869,
      editionYear: 2007,
      authorName: "Leo Tolstoy"
  }
];

const booksfilter = books.filter( (bk)=>{
  return bk.editionYear>1900 && bk.authorName==="Herman Melville"
} )
console.log(booksfilter);
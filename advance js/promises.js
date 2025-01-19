const promise1 = new Promise((resolve,reject)=>{
    let error = true
    if(!error){
      resolve("everything is smooth")
    }
    else{
      reject("something went wrong")
    }
})

promise1
.then((message)=>{
 // console.log(message)
})
.catch((message)=>{
  //console.log(message)
})
.finally((message)=>{
  //console.log(message)
})


//then looping

const promise2 = new Promise((resolve,reject)=>{
  resolve({'username': 'omkar','password':111 })
  reject("error")
})
// promise2
// .then((data)=>{
//   console.log(data)
//   return data.password
// })
// .then((password)=>{
//   console.log(password)
// })
// .catch(()=>{
//   console.log("error");
// })
// .finally(()=>{
//   console.log("default");
// })


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


// async and await


// A function that returns a Promise
function fetchToy() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const toyArrived = true; // Change this to false to simulate the toy not arriving
          if (toyArrived) {
              resolve("Toy has arrived!");
          } else {
              reject("Toy is out of stock.");
          }
      }, 2000); // Simulate a delay of 2 seconds
  });
}

// Async function to handle the Promise
async function playWithToy() {
  try {
      console.log("Waiting for the toy...");
      const message = await fetchToy();
      console.log(message); // This runs if the Promise is resolved
  } catch (error) {
      console.log(error); // This runs if the Promise is rejected
  } finally {
      console.log("Done waiting for the toy."); // This runs no matter what
  }
}

// Call the async function
playWithToy();



async function getAllUsers(){
      try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users')
          const data = await response.json()
          console.log(data);
      } catch (error) {
          console.log("E: ", error);
      }
  }
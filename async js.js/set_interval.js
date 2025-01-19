let intervalId


document.querySelector('#start').addEventListener('click',()=>{
  if (!intervalId) {
    document.querySelector('h1').innerHTML="start is clicked"
    intervalId = setInterval(function() {
        console.log('Hi');
    }, 1000);
}
});


document.querySelector('#stop').addEventListener('click',()=>{
  if (intervalId) {
    document.querySelector('h1').innerHTML="stop is clicked"
    clearInterval(intervalId);
    intervalId = null;
}
});
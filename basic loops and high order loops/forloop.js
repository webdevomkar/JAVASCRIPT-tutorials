for (let i = 0; i < 10; i++) {
  console.log(`outer loop value is ${i}`);
    for (let j = 0; j < 10; j++) {
    console.log(`inner loop value is ${j} and outer loop value is ${i}`);
    
    }
  
}
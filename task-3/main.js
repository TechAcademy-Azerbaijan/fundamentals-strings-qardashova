const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
  let n = result.input;
  let a = n.split(',')[0];
  let count2 = 0;
  let count5 = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] == "2") {
      count2++
    }
    if (n[i] == "5") {
      count5++
    }
  }
  if (count2 > count5) {
    console.log("2");
  }else if (count5 > count2) {
    console.log("5");
  }
  else{
    console.log("=");
  }
  
});

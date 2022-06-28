const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
     let n = result.input;
    let count = 1;
    for (let i = 0; i < n.length; i++) {
      if (n[i] == n[i+1] ) {
        count++
      }
    }
    console.log(count);
  
});

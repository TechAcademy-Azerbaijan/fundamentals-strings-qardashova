const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
         let n = result.input;
    let a = n.split(',')[0];
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] == "+" || a[i] == "-" || a[i] == "*") {
        count++
      }
    }  
    console.log(count);
  
});

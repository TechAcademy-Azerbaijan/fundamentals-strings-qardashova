const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
      var n = result.input;
    var array = [];
    var nope = -1;
    var count = 0;
    for (let i = 0; i < n.length; i++) {
      if (n[i] == ' ') {
        array.push(i);
      }
     else{
        count++;
        if (count == n.length) {
          console.log(nope);
        }
     }
    }
    if (array.length > 1) {
      console.log(Math.min(...array));
      console.log(Math.max(...array));
    }
});

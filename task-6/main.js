const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
      let n = result.input;
    let array = n.split(" ");
    console.log(array);
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] != "") {
        count++;
      }   
    }
    console.log(count);
  
});

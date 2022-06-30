const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
    var n = result.input;
    var array = n.split("");

    for (let i = 0; i < array.length; i++) {
      if (i == 0 ) {
        array[i] = array[i].toUpperCase();
      }
      else if( array[i] == " "){
        array[i+1] = array[i+1].toUpperCase();
      }
    }
    console.log(array.join(''));
  
});

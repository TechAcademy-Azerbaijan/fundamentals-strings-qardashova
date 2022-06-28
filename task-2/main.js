const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
    let n = result.input;
  let a = n.split(',')[0];
  let birinci = a[0];
  let ikinci = a[a.length-1];
  if (birinci > ikinci) {
    console.log(birinci);
  }else if (ikinci > birinci) {
    console.log(ikinci);
  }
  else{
    console.log("=");
  }
});

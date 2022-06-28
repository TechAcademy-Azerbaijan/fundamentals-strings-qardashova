const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
   let n =  result.input;
  let a = parseInt(n.split(',')[0])
  let b = parseInt(n.split(',')[1])
  let c = parseInt(n.split(',')[2])
  //console.log(Math.min(a,Math.min(b,c)));
  console.log(Math.min(a,c,b));
  
});

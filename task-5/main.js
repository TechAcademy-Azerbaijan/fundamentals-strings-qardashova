const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
      let n = result.input;
    let a = n.split(',')[0];
    let count = 0;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    for (let i = 0; i < a.length; i++) {
      
      if (a[i] == "+") {
        count1++
        console.log(a[i]);
        if(count1 == 2){
          count1 = count1-1
        }
      }
      if (a[i] == "-") {
        count2++
        console.log(a[i]);
        if(count2 == 2){
          count2 = count2-1
          console.log(count2);
        }
      }
      if (a[i] == "*") {
        count3++
        console.log(a[i]);
        if(count3 == 2){
          count3 = count3-1
        }
      }
      if (a[i] == ":") {
        count4++
        console.log(a[i]);
        if(count4 == 2){
          count4 = count4-1
        }
      }
    }
    count = count1 + count2 + count3 + count4;
    console.log(count);
  
});

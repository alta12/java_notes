// not working for now
//will work now!

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };




  function makeList(arr) {
    var failureItems = [];


    for (let i=0; i<arr.length; i++) {
        var temp = `<li class="text-warning">${result[i]}</li>`;
        failureItems[i]=temp;   
     }  
     
    return failureItems;
  }
  console.log(makeList(result.failure));







  
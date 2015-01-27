// UNIT TESTING

var assert = function(a,b) {
   if(a === b) {
     console.log('Test passed!', a, 'equals', b);
   }
   else {
     console.error('Failed! Expected', a, 'to equal', b);
   }
 };

/////////////////////////////////////////////////////////

var firstReverse = function(s){
	var reversed = "";
  for (var i=s.length-1; i>=0; i--){
    reversed += s[i];
  }
  return reversed;
};

assert(firstReverse("hello"),"olleh");
assert(firstReverse("hellocopter"),"retpocolleh");

////////////////////////////////////////////////////////

var swapCase = function(s){
  var swapped = "";
  var alpha = /[a-zA-Z]/;
  for(var i=0; i<s.length; i++){
    if (alpha.test(s[i])){

      if (s[i] === s[i].toLowerCase()){
        swapped += s[i].toUpperCase();
      }
      else{
        swapped += s[i].toLowerCase();
      }
    }
    else{
      swapped += s[i];
    }
  }
  return swapped;
};

assert(swapCase("Hello!!"),"hELLO!!");
assert(swapCase("1 2 BUCKLE my SHOE!"),"1 2 buckle MY shoe!");

////////////////////////////////////////////////////////
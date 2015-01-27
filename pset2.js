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

var letterCount = function(s){
  var mostRepeated = -1;
  var mostLetterRepeats  = 1;

  // Split the string into an array of words
  var str = s.split(" ");

  // Loop over each word in the string
  for (var i = 0; i < str.length; i++){

    // Create a dictionary of its letters
    dict = {};

    // Loop over each letter in a word
    for (var j = 0; j < str[i].length; j++){

      
      if (!(str[i][j] in dict)){

        dict[str[i][j]] = 1;
        // console.log(dict);
      }
      else{
        dict[str[i][j]] += 1;
      }
      
    }

    // Check dictionary to see if it has more repeated
    // letters than the word with the current most repeated
    // letters; update the global variables if so
    for(var key in dict){

      if (dict[key] > mostLetterRepeats){

        mostLetterRepeats = dict[key];
        mostRepeated = str[i]; 
      }
    }
  }

  return mostRepeated;

};

assert(letterCount("Today, is the greatest day ever!"),"greatest");
assert(letterCount("aaa eee fff ggg"),"aaa");
assert(letterCount("aaa eeee fff ggg"),"eeee");
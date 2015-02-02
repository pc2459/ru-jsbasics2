var assert = function(a,b){
  if(a === b) return console.log("Passed! Was: " + a + " | Expected: " + b);
  if(a !== b) return console.log("Failed! Was: " + a + " | Expected: " + b);
};

var palindrome = function(str){

    for (var i = 0; i < str.length/2; i++){
      if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
        return false;
      }
    }
    return true;
};

assert(palindrome("racecar"),true);
assert(palindrome("Kayak"),true);
assert(palindrome("aa"),true);
assert(palindrome("aaaaaa"),true);
assert(palindrome("abaksfj"),false);
assert(palindrome("IAmNoTAPalIndromE"),false);


var dashInsert = function(num){
  var digits = num.toString();
  var dashed = "";
  for (var i = 0; i < digits.length; i++){
    var j = i+1;
    if (Number(digits[i]) % 2 !== 0 && 
        Number(digits[j]) % 2 !== 0 && 
        digits[j] !== undefined) {
      dashed += digits[i] + "-";
    }
    else{
      dashed += digits[i];
    }
  }
  return dashed;
};

assert(dashInsert(454793),"4547-9-3");
assert(dashInsert(888888),"888888");
assert(dashInsert(777777),"7-7-7-7-7-7");


var caesarCipher = function(str, num){

  var alphabet = {
    1 : "a",
    2 : "b",
    3 : "c",
    4 : "d",
    5 : "e",
    6 : "f",
    7 : "g",
    8 : "h",
    9 : "i",
    10 : "j",
    11 : "k",
    12 : "l",
    13 : "m",
    14 : "n",
    15 : "o",
    16 : "p",
    17 : "q",
    18 : "r",
    19 : "s",
    20 : "t",
    21 : "u",
    22 : "v",
    23 : "w",
    24 : "x",
    25 : "y",
    26 : "z"
  };
  var ciphered = "";

  for (var i = 0; i < str.length; i++){
    // Check for spaces and non-letters
    var regex = /[^a-zA-Z]/;
    if (regex.test(str[i])){
      ciphered += str[i];
    }
    else{ 
        // Get the index for the letter
        var letterIndex;
        for (var letter in alphabet){
          if (alphabet[letter] === str[i].toLowerCase()){
            letterIndex = Number(letter);
          }
        }
        // Increment the index by 2
        var cipherIndex = letterIndex + num;
        // Deal with overflow
        if (cipherIndex > 26){
          cipherIndex = cipherIndex % 26;
         if (cipherIndex === 0){
            cipherIndex = 26;
          }
        }

        // Check for case 
        if (str[i] === alphabet[letterIndex]){
          ciphered += alphabet[cipherIndex];  
        }
        else {
          ciphered += alphabet[cipherIndex].toUpperCase();
        }
      }
    }

  return ciphered;
};

assert(caesarCipher("Caesar Cipher",2),"Ecguct Ekrjgt");
assert(caesarCipher("AaAaA",1),"BbBbB");
assert(caesarCipher("ZZZ",26),"ZZZ");
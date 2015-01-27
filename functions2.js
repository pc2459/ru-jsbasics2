var getName = function(obj){
	return obj.name;
};

console.log(getName({ name: 'Luisa', age: 25 }));

var totalLetters = function(arr){
  var total = 0;
	for(var i = 0; i < arr.length; i++){
    total += arr[i].length;
	}
  return total;
};

console.log(totalLetters(['javascript', 'is', 'awesome']));
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']));

// Declaring object - remember that it thinks that keys are string literals!
// NO WAY of passing it a reference to a variable... 
var keyValue = function(key, value){
  var newObject = {};
  newObject[key] = value;
  return newObject;
};

console.log(keyValue('city', 'Denver'));


var negativeIndex = function(arr,n){
  var foundIndex = arr.length + n;
  return arr[foundIndex];
};

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));

var removeM = function(s){
  var finalString = "";
  for(var i = 0; i<s.length; i++){
    if (s[i].toLowerCase() !== 'm'){
      finalString += s[i];
    }
  }
  return finalString;
};

console.log(removeM('family'));
console.log(removeM('memory'));


var printObject = function(obj){
  for (var key in obj){
    console.log(key + " in " + obj[key]);
  }
};

printObject({ a: 10, b: 20, c: 30 });

var vowels = function(s){
  var vowelsArr = [];
  for (var i = 0; i < s.length; i++){
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u'){
      vowelsArr.push(s[i]);
    }
  }
  return vowelsArr;
};

console.log(vowels('alabama'));
console.log(vowels('What lets in youth?'));


var twins = function(arr){
  for(var i=0; i<arr.length; i+=2){
    var j = i+1;
    if (arr[i] != arr[j]){
      return false;
    }
  }
  return true;
};

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', 'b']));
console.log(twins(['a', 'a', 'b', undefined]));


var or = function(arr){
  if(arr.length === 0){
    return false;
  }
  for(var i=0; i<arr.length; i++){
    if(arr[i] === true){
      return true;
    }
  }
  return false;
};

console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));


var unique = function(arr){
  var uniqueValues = [];
  for (var i=0; i < arr.length; i++){
    var found = false;
    for(var j=0; j < uniqueValues.length; j++){
      if (arr[i] === uniqueValues[j]){
        found = true;  
      }
    }
    if (found === false){
      uniqueValues.push(arr[i]);
    }
  }
  return uniqueValues;
};

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));
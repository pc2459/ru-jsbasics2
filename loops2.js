var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

for(var i=0; i<animals.length-1; i++){
	console.log(animals[i]);
}

console.log('========');

for(var i=0; i<animals.length; i+=2){
	console.log(animals[i]);
}

console.log('========');

for(var i=animals.length-1; i>0; i--){
	console.log(animals[i]);
}

console.log('========');

for(var i=0; i<animals.length; i++){
	console.log(animals[i]);
	if(i === 0 || i == animals.length-1){
	}
	else{
		console.log(animals[i]);
	}
}
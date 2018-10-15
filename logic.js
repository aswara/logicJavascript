var input = 10;
var a = '';
for(var y =0; y<input; y++){
	for(var x =0; x<input; x++){
		if(x==y){
			a += y;
		} else {
			a += "-";
		}
	}
	a+="\n"
}

console.log(a);
function printArray(arr) {
	for(var y=0; y < arr.length; y++){
		for (var x = 0; x< arr.length; x++) {
			process.stdout.write(arr[y][x]);
		}
		process.stdout.write("\n");
	}
}

console.log("soal 1");

function logic1(panjang) {
	var arr = [];
	for (var y = 0; y < panjang; y++) {
		arr[y]= [];
		for (var x = 0; x < panjang; x++) {
			if(y==x){
				arr[y][x] = '*';
			} else {
				arr[y][x] = '-';
			}
		}
	}
	printArray(arr);		
}

logic1(9)

console.log("soal 2")

function logic2(panjang) {
	var arr = [];
	for (var y = 0; y < panjang; y++) {
		arr[y]= [];
		for (var x = 0; x < panjang; x++) {
			if(y==panjang-x-1){
				arr[y][x] = '*';
			} else {
				arr[y][x] = '-';
			}
		}
	}
	printArray(arr);		
}

logic2(9)

console.log("soal 3")

function logic3(panjang) {
	var arr = [];
	for (var y = 0; y < panjang; y++) {
		arr[y]= [];
		for (var x = 0; x < panjang; x++) {
			if(y==panjang-x-1 || y==x){
				arr[y][x] = '*';
			} else {
				arr[y][x] = '-';
			}
		}
	}
	printArray(arr);		
}

logic3(9)

console.log("soal 4")

function logic4(panjang) {
	var arr = [];
	var tengah = Math.floor(panjang/2)
	for (var y = 0; y < panjang; y++) {
		arr[y]= [];
		for (var x = 0; x < panjang; x++) {
			if( y==panjang-x-1 || y==x || y==tengah || x==tengah ){
				arr[y][x] = '*';
			} else {
				arr[y][x] = '-';
			}
		}
	}
	printArray(arr);		
}

logic4(9)

console.log("soal 5")

function logic5(panjang) {
	var arr = [];
	for (var y = 0; y < panjang; y++) {
		arr[y]= [];
		for (var x = 0; x < panjang; x++) {
			if( y>=x ){
				arr[y][x] = '*';
			} else {
				arr[y][x] = '-';
			}
		}
	}
	printArray(arr);		
}

logic5(9)

console.log("soal 6")

function logic6(panjang) {
	var arr = [];
	for (var y = 0; y < panjang; y++) {
		arr[y]= [];
		for (var x = 0; x < panjang; x++) {
			if( y<=x ){
				arr[y][x] = '*';
			} else {
				arr[y][x] = '-';
			}
		}
	}
	printArray(arr);		
}

logic6(9)

console.log("soal 7")

function logic7(panjang) {
	var arr = [];
	for (var y = 0; y < panjang; y++) {
		arr[y]= [];
		for (var x = 0; x < panjang; x++) {
			if( y<=x && y <= panjang-x-1 ){
				arr[y][x] = '*';
			} else if( y>=x && y>= panjang-x-1 ) {
				arr[y][x] = '*';
			} else {
				arr[y][x] = '-';
			}
		}
	}
	printArray(arr);		
}

logic7(9)

console.log("soal 8")

function logic8(panjang) {
	var arr = [];
	for (var y = 0; y < panjang; y++) {
		arr[y]= [];
		for (var x = 0; x < panjang; x++) {
			if( y>=x && y <= panjang-x-1 ){
				arr[y][x] = '*';
			} else if( y<=x && y>= panjang-x-1 ) {
				arr[y][x] = '*';
			} else {
				arr[y][x] = '-';
			}
		}
	}
	printArray(arr);		
}

logic8(9)
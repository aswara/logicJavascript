
//fungsi prit array 2D
function printArray(arr) {
	arr.forEach(function (val, y) {
		arr.forEach(function(val, x){
			process.stdout.write(arr[y][x])
		})
		process.stdout.write("\n")
	})
	// for(var y=0; y < arr.length; y++){
	// 	for (var x = 0; x< arr.length; x++) {
	// 		process.stdout.write(arr[y][x]);
	// 	}
	// 	process.stdout.write("\n");
	// }
}

//fungsi print array 1D
function print(arr) {
	arr.forEach( function(val, index){
		process.stdout.write(arr[index])
	})
	process.stdout.write("\n")
} 

//soal 1

console.log("soal 1")
  
function fibonacci(n) {
	if(n==0) {
		return 0;
	} else if(n<=2) {
		return 1;
	} else {
		return fibonacci(n-1) + fibonacci(n-2);
	}
}

function soal1(panjang) {
	arr = []
	for (var i = 1; i <= panjang; i++) {
	arr[i] = fibonacci(i).toString()
	}
	print(arr)
}

soal1(9)


//soal 2
console.log("soal 2")
  
function fibonacci2(n) {
	if(n==0) {
		return 0;
	} else if(n<=3) {
		return 1;
	} else {
		return fibonacci2(n-1) + fibonacci2(n-2) + fibonacci2(n-3); 
	}
}

function soal2(panjang) {
	arr = []
	for (var i = 1; i <= panjang; i++) {
		arr[i] = fibonacci2(i).toString()
	}
	print(arr)
}

soal2(9)

//soal 3
console.log("soal 3")

//fpb
function fpb(a, b) {
	while(b != 0) {
		var c = a % b
		a = b
		b = c
	}
	console.log("fpb " + a)
}

fpb(24, 30)

//kpk cara baru
function kpk(a, b) {
	var kpk = 0
	for (var i = 0; i < b; i++) {
		kpk += a
		if(kpk%b==0){
			break;
		}
	}
	console.log("kpk " + kpk)
}

kpk(3,4)

//fpb

console.log("soal 4")

function logic4(panjang) {
	var arr = [];
	for (var y = 0; y <= panjang; y++) {
		arr[y]= [];
		for (var x = 0; x <= panjang; x++) {
			if(y==x){
				arr[y][x] = `${x*2+1}`;
			} else if(y==panjang-x-1) {
				arr[y][x] = `${x*2}`;
			} else if(y<x && y<panjang-x-1){
				arr[y][x] = 'A'
			} else if(y<x && y>panjang-x-1){
				arr[y][x] = 'B'
			} else if(y>x && y>panjang-x-1){
				arr[y][x] = 'C'
			} else {
				arr[y][x] = 'D';
			}
		}
	}
	printArray(arr);		
}

logic4(9)
 //logic 5
console.log("soal 5");

function logic5(panjang) {
	var arr = [];
	var i=0;
	var j=0;
	for (var y = - panjang; y <= panjang; y++) {
		arr[i] = [];
		for (var x = - panjang; x <= panjang; x++) {
			var a = Math.abs(y);
			var b = Math.abs(x);
			var nilai = a > b ? a : b;
			nilai = panjang + 1 - nilai;
			arr[i][j]= `${fibonacci(nilai)}`;
			j++;
		}
		j=0;
		i++;
	}
	printArray(arr);
}

logic5(4)


//soal 6
console.log("soal 6");

function logic6(panjang) {
	var arr = [];
	var i=0;
	var j=0;
	for (var y = - panjang; y <= panjang; y++) {
		arr[i] = [];
		for (var x = - panjang; x <= panjang; x++) {
			var a = Math.abs(y);
			var b = Math.abs(x);
			var nilai = a > b ? a : b;
			nilai = panjang + 1 - nilai;
			var result = nilai%2==0 ? ' ' : nilai
			arr[i][j]= `${result}`;
			j++;
		}
		j=0;
		i++;
	}
	printArray(arr);
}

logic6(4)

//soal 7
console.log("soal 6");

function logic7(panjang) {
	var arr = [];
	var i=0;
	var j=0;
	for (var y = - panjang; y <= panjang; y++) {
		arr[i] = [];
		for (var x = - panjang; x <= panjang; x++) {
			var a = Math.abs(y);
			var b = Math.abs(x);
			var nilai = a > b ? a : b;
			nilai = panjang + 1 - nilai;
			var result = nilai%2==0 ? ' ' : fibonacci(Math.ceil(nilai/2))
			arr[i][j]= `${result}`
			j++
		}
		j=0;
		i++;
	}
	printArray(arr);
}

logic7(4)

//soal 8
console.log("soal 8")
function logic8(panjang) {
	var arr = [];
	var huruf = ['A', 'B', 'C', 'D']
	var i=0;
	var j=0;
	for (var y = - panjang; y <= panjang; y++) {
		arr[i] = [];
		for (var x = - panjang; x <= panjang; x++) {
			var a = Math.abs(y);
			var b = Math.abs(x);
			var nilai = a > b ? a : b
			nilai = panjang + 1 - nilai
			var index = nilai/2-1
			if(nilai%2==0) {
				arr[i][j] = `${huruf[index]}`
			} else {
				var result = fibonacci(Math.ceil(nilai/2))
				arr[i][j] = `${result}` 
			}
			j++
		}
		j=0;
		i++;
	}
	printArray(arr);
}

logic8(4)
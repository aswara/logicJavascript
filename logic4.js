//fungsi prit array 2D
function printArray(arr) {
	arr.forEach(function (val, y) {
		arr[y].forEach(function(val, x){
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

//soal 1
console.log("soal 1");

function soal1(panjang) {
	arr = [];
	var tengah = Math.ceil(panjang/2);
	for (var y = 0; y < tengah; y++) {
		arr[y] = [];
		for (var x = 0; x < panjang; x++) {
			if(y>=tengah-x-1 && y>=x-tengah+1){
				arr[y][x]= `${y*2+1}`;
			} else {
				arr[y][x]=" ";
			}
		}
	}
	printArray(arr)
}

soal1(9)

//soal 2
console.log("soal 2");

function soal2(panjang) {
	arr = [];
	var tengah = Math.ceil(panjang/2);
	for (var y = 0; y < tengah; y++) {
		arr[y] = [];
		for (var x = 0; x < panjang; x++) {
			if(y<=x && y<=panjang-x-1){
				var result = tengah - y
				arr[y][x]= `${result*2-1}`;
			} else {
				arr[y][x]=" ";
			}
		}
	}
	printArray(arr)
}

soal2(9)

//soal 3
console.log("soal 3");

// function soal3(panjang) {
// 	arr = [];
// 	var tengah = Math.ceil(panjang/2);
// 	for (var y = 0; y < panjang; y++) {
// 		arr[y] = [];
// 		for (var x = 0; x < panjang; x++) {
// 			if(y>=tengah-x-1 && y>=x-tengah+1 && y<=tengah+x-1 && y<=panjang+tengah-x-2){
// 				var result = tengah - y
// 				arr[y][x]= `*`;
// 			} else {
// 				arr[y][x]=" ";
// 			}
// 		}
// 	}
// 	printArray(arr)
// }

// soal3(15);

function soal3(panjang) {
	arr = [];
	var i = 0;
	var j = 0;
	for (var y = -panjang; y <= panjang; y++) {
		arr[i] = [];
		for (var x = -panjang; x <= panjang; x++) {
			var a = Math.abs(y);
			var b = Math.abs(x);
			if(a<=panjang-b){
				var result = panjang - a +1;
				arr[i][j] = `${result * 2 -1}`
			} else {
				arr[i][j] = " "
			}
			j++;
		}
		j=0;
		i++;
	}
	printArray(arr);
}

soal3(4);

//soal 4
console.log('soal 4')
function soal4(panjang) {
	arr = [];
	var j = 0;
	for (var y = 0; y <= panjang; y++) {
		arr[y] = [];
		for (var x = -panjang; x <= panjang; x++) {
			var a = Math.abs(x);
			if(y>=a){
				var result = y-a+1
				arr[y][j]= `${result*2-1}`;
			} else {
				arr[y][j]=" ";
			}
			j++;
		}
		j=0;
	}
	printArray(arr);
}

soal4(4);

//soal 4
console.log('soal 5')
function soal5(panjang) {
	arr = [];
	var j = 0;
	for (var y = 0; y <= panjang; y++) {
		arr[y] = [];
		for (var x = -panjang; x <= panjang; x++) {
			var a = Math.abs(x);
			if(y<=panjang-a){
				var result = panjang-y
				var hasil = result-a+1
				arr[y][j]= `${hasil*2-1}`;
			} else {
				arr[y][j]=" ";
			}
			j++;
		}
		j=0;
	}
	printArray(arr);
}
soal5(4);


//soal 6
console.log("soal 6")
function soal6(panjang) {
	arr = [];
	var i = 0;
	var j = 0;
	for (var y = -panjang; y <= panjang; y++) {
		arr[i] = [];
		for (var x = -panjang; x <= panjang; x++) {
			var a = Math.abs(y);
			var b = Math.abs(x);
			if ( a<=panjang-b ) {
				var result = panjang-a-b+1
				arr[i][j] = `${result*2-1}`;
			} else {
				arr[i][j] = " ";
			}
			j++;
		}
		j=0;
		i++;
	}
	printArray(arr);
}

soal6(4);
console.log('------------- # 5');
let a = 5;
let b = 6;
let sum = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
console.log(sum);
console.log(sub);
console.log(mult);
console.log(div);
console.log('------------- # 6');
let growth = '';
let space = ' ';
for (let i = 1; i <= 5; i++){
	growth += i + space;
	if(i === 5){
		console.log(growth);
	};
};
console.log('------------- # 7');
let decrease = '';
for (let i = 5; i >= 1; i--){
	decrease += i + space;
	if(i === 1){
		console.log(decrease);
	};
};
console.log('------------- # 8');
function getMarkInfo(condition) {
	if (condition === 10) {
		console.log('У вас максимальный балл');
	} else {
		console.log ('У вас средний балл');
	};
};
getMarkInfo(10);
getMarkInfo(1);
console.log('------------- # 9');
function getDayInfo(position) {
	switch(position){
		case 0 :
			console.log ('Sunday');
			break;
		case 1 :
			console.log ('Monday');
			break;
		case 2 :
			console.log ('Tuesday');
			break;
		case 3 :
			console.log ('Wednesday');
			break;
		case 4 :
			console.log ('Thursday');
			break;
		case 5 :
			console.log ('Friday');
			break;
		case 6 :
			console.log ('Saturday');
			break;
		default:
			console.log ('Wrong data');
			break;
	};
};
getDayInfo(0);
getDayInfo(1);
getDayInfo(2);
getDayInfo(3);
getDayInfo(4);
getDayInfo(5);
getDayInfo(6);
getDayInfo(7);
console.log('------------- # 10');
let arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
console.log(arr);
console.log('------------- # 11');
let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6];
let arrSum = [].concat(arrOne, arrTwo);
console.log(arrSum);
console.log('------------- # 12');
function countNumber(number) {
	let sumCount = 0;
	for(let i = 1; i <= number; i++){
		sumCount += i;
		if(i === number){
			console.log(sumCount);
		};
	};
};
countNumber(3);
function countNumberImproved(n){
	let sumCountNumbers = 0;
	n = Number(prompt('Введите любое целое положительное число'));
	if(n >= 1){
		for(let i = 1; i <= n; i++){
			sumCountNumbers += i;
			if(i === n){
				alert('Сумма чисел от 1 до ' + n + ' равна ' + sumCountNumbers);
				console.log('Сумма чисел от 1 до ' + n + ' равна ' + sumCountNumbers);
			};
		};
	} else {
		alert('Нужно вводить целое положительное число, иначе ничего не выйдет))');
		console.log('Было введено неверное значение')
	};
};
countNumberImproved();
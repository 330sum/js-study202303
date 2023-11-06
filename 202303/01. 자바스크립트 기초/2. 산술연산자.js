// 나머지 연산
console.log(27 % 5);//2

// 뒤에 숫자가 더 크면 앞에 숫자가 나머지
console.log(4 % 10); //4

console.log(77 % 0); //NaN
console.log(0 % 77); //0

// 거듭제곱 연산
var num = 2;
console.log(num ** 3); //2의 3제곱

// 증감 연산자
var x = 3;
x++;
++x;
x--;
--x;
console.log(`x: ${x}`);


// 전위 연산, 후위 연산
var n1 = 10;
var n2 = n1++;

console.log(`n1: ${n1}, n2: ${n2}`);  // n1: 11, n2: 10

var n3 = 10;
var n4 = ++n3;

console.log(`n3: ${n3}, n4: ${n4}`); // n3: 11, n4: 11


x += 1; //x = x + 1; (더하기연산, 저장연산 - 연산2번 일어남)
x++; // (연산횟수 1회 - 속도빠름)

x += 3; // x = x + 3;


var z = 10;

console.log(z - 5);
console.log(z);


var x = 10;


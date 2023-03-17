var n1 = 10;
var n2 = '20';

console.log(n1 + n2); //숫자 + 문자 = 문자 1020

var n3 = n1 + '';
console.log(typeof n3); //숫자 + 문자 = 문자 string

var n4 = '100' - 55;
console.log(n4); // 문자 - 숫자 = 숫자 45

var n5 = '100' * 55;
console.log(n5); // 문자 * 숫자 = 숫자 5500

var n6 = '100' * '55';
console.log(n6); // 문자 * 문자 = 숫자 5500

//당연 'hello' * 50 은 안됨 (근데 파이썬 됨)

var n7 = +'99'; // 숫자


console.log('===============================================');

// js에서는 0, '', null, undefined, NaN는 거짓으로 판단한다.

// Falsy -> false는 콘솔 출력 안됨
if (0) console.log('ok1');
if ("") console.log('ok2');
if (null) console.log('ok3');
if (undefined) console.log('ok4');
if (NaN) console.log('ok5');

// Truthy
if (1) console.log('ok6'); // 0외에 모두 true 
if (-100.55) console.log('ok7');
if ('   ') console.log('ok8'); // 스페이스도 byte를 차지 하기 때문에 true
if ('hello!!!!') console.log('ok9');
if ([]) console.log('ok10'); // 빈배열
if ([1, 2, 3, 4, 5]) console.log('ok11'); // 배열
if (function () {}) console.log('ok12'); // 함수
if ({name: 'kim'}) console.log('ok13'); // 객체



console.log('===============================================');


for (var n = 1; n <= 10; n++) {
    if (n % 2 === 0) {
        console.log('짝수입니다.');
    } else {
        console.log('홀수입니다.');
    }
}

console.log('-----------------------');

for (var n = 1; n <= 10; n++) {
    if (n % 2) { // 나머지가 0 이외면 다 true로 됨 (생각해보면 자바만 안됨)
        console.log('홀수입니다.');
    } else {
        console.log('짝수입니다.');
    }
}


// 논리인 자리에 논리가 아닌 것이 들어가면 truthy와 falsy 판단

while (999) {

} // true니까 무한루프


while ('메롱') {

} // true니까 무한루프
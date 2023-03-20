// 함수 정의 - 만든다
function happyGreeting(yourName) {
    console.log(`${yourName}님 안녕하세요!`);
    console.log('오늘도 즐거운 하루되세용');
}

// 함수 호출 - 사용한다
happyGreeting('뽀로로');

// 1000줄 코딩
happyGreeting('삐리리');



function makeLine() {
    console.log('===================================================');
}

makeLine();
makeLine();
makeLine();

for (var i = 0; i < 5; i++) {
    makeLine();
}


// 원의 넓이를 자주 구한다. (원주율 * 반지름 ^ 2)

function calcAreaCircle(r) {
    //console.log('야!!!');
    var PI = 3.14159265;
    var area = PI * r ** 2;
    return area;
}

// var r1 = 3.14159265 * 5 * 5;
var r1 = calcAreaCircle(5);
console.log(r1);

// var r2 = 3.14159265 * 15 * 15;
var r2 = calcAreaCircle(15);
console.log(calcAreaCircle(15));

// var r3 = 3.14159265 * 20 * 20;
var r3 = calcAreaCircle(20);
// x ~ y까지의 누적합

var x = +prompt('첫번째 숫자를 입력!');
var y = +prompt('두번째 숫자를 입력!');

if (x > y) {
    //swap
    var t;
    t = x;
    x = y;
    y = t;  
}


var total = 0; //초기값
var n = x; 

while (n <= y) { //끝값
    //반복코드
    total += n;

    n++; //증감식
}

alert(`${x} ~ ${y}까지의 누적합: ${total}`);



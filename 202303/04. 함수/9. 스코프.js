var x = 10; // 전역 변수 : 프로그램의 전체영역에서 사용가능 (전역 스코프)

// 매개변수도 지역스코프를 가짐
function foo(z) {
    console.log(`지역변수 x 선언 전 : ${x}`); // 호이스팅으로 undefined, 만약 전역변수 10을 받고 싶었다면, 10번라인 var를 삭제해야함
    var y = 20 + x; // 지역 변수 : 해당 함수 안에서만 사용가능
    console.log(y); // NaN
    console.log(y - z); // NaN

    var x = '홍길동';
    console.log(`지역변수 x 선언 후 : ${x}`); // 홍길동

    // return y;
}

foo(50);

console.log(`함수호출 후 x의 값 : ${x}`); // 10 (지역변수는 모두 사라졌으니까)
// console.log(y); //ReferenceError
// console.log(z); //ReferenceError



console.log('======================================================');
// 중첩 함수 : 함수 안에 함수를 정의

function outer댄스수업(m) {
    var n = 'outer local n';
    var v = 'outer local v';
    console.log(m); // outer param m - 지역변수 우선
    console.log(n); // outer local n
    console.log(v); // outer local v

    // 헬퍼 함수 : 호출이 함수 내부로 제한됨 (캡슐화 - 기능을 숨겨서, 함수생성 의도에 맞게)
    function inner1준비운동() {
        console.log(n); //사용가능, outer댄스수업의 지역변수에 접근가능 //outer local n
        var m = 'inner local m';
        var v = 'inner local v';
        console.log(m); // inner local m
        console.log(v); // inner local v
    }

    function inner2춤추기() {

    }

    inner1준비운동();
    inner2춤추기();
}

var m = 'gloval m';

//inner2춤추기(); //ReferenceError: inner is not defined 

outer댄스수업('outer param m');
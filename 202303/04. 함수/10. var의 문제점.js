// 1. 변수의 중복선언 허용
// var x = 10;
// //x = '김철수'; // 10 버리고 '김철수'로 수정할 의도였음
// var x = '김철수'; // 변수 x가 있는 줄 모르고, x를 선언 했음 

let x = 10;
// let x = '김철수';

console.log(`x:${x}`);



// 2. 블록레벨 스코프를 지원하지 않는다
// var i = '안녕';

// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }
// // 이 i가 함수처럼 작동해서
// // for문 안에서는 i=0으로 쓰고, for문이 끝나면 안녕으로 사용하고 싶음
// // 근데 for문이 끝나고 i를 출력해보면 i: 3으로 되어있음. 
// // for문안의 변수가 전역변수로 되어서 계속 살아 있음....
// // 그런데 let을 사용하면 for문 안에 i를 지역변수화 시킬 수 있음!
// console.log(`for문 바깥쪽 i: ${i}`);


let i = '안녕';

for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log(`for문 바깥쪽 i: ${i}`);
// 만약 여기서 let i = '안녕'; 전역변수를 지우면 for문 바깥쪽에서 i는 안찍힘



// 3. 변수 호이스팅 : 변수선언문을 자동으로 맨위로 올림
z = 100;
console.log(z);

// var z;
// 심지어 z를 선언하지도 않았는데, 출력가능함..

// let z;
// ReferenceError: Cannot access 'z' before initialization
// 이렇게 let이라고 쓰면, 초기화하기 전에 접근 할 수 없다라고 뜸
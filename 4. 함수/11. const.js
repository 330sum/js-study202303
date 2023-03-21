// let PI; let은 초기화 나중에 해도 됨

const PI = 3.14159265; // const는 선언 시, 초기화가 꼭 필요!
// PI = 5.5; // const는 값 변경 불가 (불변값)
const TODAT_SALE_RATE = 0.2;

console.log(PI);


// 객체의 불변성을 지키기 위한 const의 사용
const kim = {
    name: '김철수',
    age: 25,
};

kim.name = '김칠리'; // 이름을 김칠리로 개명함

// kim = {
//     name: '김철수',
//     age: 25,
// }; 
// 이건 동명이인의 김철수임. 객체가 변한 것! (근데, 이런 일이 일어나면 안됨!!!)
// 객체는 변경을 못하도록 막아줘야 함! 그래서 let 사용하지 말고 const 사용!
// 자바스크립트에서 객체는 배열, 함수도 포함되기 때문에 const 사용!


// 변수를 선언할 때는 const를 우선적으로 사용하고 
// 재할당이 필요한 경우에만 한정적으로 let을 사용하는 것이 좋다!
const a = 10;
const b = 20;

for (let i = 0; i < 5; i++) {

}
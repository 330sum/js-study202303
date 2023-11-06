// 함수 선언문 방식
// function multi(n1, n2) {
//     return n1 * n2;
// }

// 함수 표현식
// const multi = function (n1, n2) {
//     return n1 * n2;
// };

// 화살표 함수
const multi = (n1, n2) => n1 * n2;

const r1 = multi(10, 3);
console.log(r1);




// 함수 선언문 방식
// function sayHello() {
//     console.log('안녕하세요');
// }

// 함수 표현식
// const sayHello = function () {
//     console.log('안녕하세요');
// };

// 화살표 함수
const sayHello = () => console.log('안녕하세요');

sayHello();


console.log('============================================================');
const kim = {
  name: '김철수',
  age: 30,
  // greeting: multi(10, 5), // greeting: 50
  // greeting: multi, // greeting이라는 메서드를 만든 것!
  // greeting: sayHello(), // greeting: 안녕하세요
  greeting: sayHello, // 메서드 기능 (함수이름이 원래 sayHello인데, kim.greeting으로 바뀐 것)
  // dance: function () {
  //   console.log('춤을 신나게 춥니다.');
  // },
  dance: () => console.log('춤을 신나게 춥니다.'),
};

// console.log(kim.greeting); // 50
// console.log(kim.greeting(3, 5)); //15
// kim.greeting; // 안녕하세요
// kim.greeting(); // 안녕하세요


kim.dance(); //춤을 신나게 춥니다.



console.log('============================================================');
// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는 화살표함수 pow 작성해보세요.
// function pow(n) {
//   return n ** 2;
// }

// const pow = function (n) {
//   return n ** 2;
// };

const pow = n => n ** 2;
console.log(pow(4)); // 16



console.log('============================================================');
// 함수 선언문과 함수 표현식(화살표함수 포함)의 차이

//함수선언문
const r2 = sub(20, 10); // 함수선언문 위, 아래에서 함수호출 가능 (호이스팅 때문에 가능!)

function sub(n1, n2) {
  return n1 - n2;
}

console.log(r2);



console.log('---------------------------------------');
// 함수표현식
const divide = (n1, n2) => n1 / n2;

const r3 = divide(30, 6); // 함수표현식(화살표함수, 이름없는 함수) 는 함수 표현식 아래에서만 호출 가능
console.log(r3);
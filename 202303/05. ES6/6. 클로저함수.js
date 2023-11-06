// 자바스크립트의 함수는 함수를 리턴할 수 있음
// function calculator(n1, n2) {
//     function add() {
//         return n1 + n2;
//     }
//     return add; // 함수 자체
//     //return add(); // 함수 호출
// }

// const zzz = calculator(10, 20); // add함수자체를 zzz에 넣은 것
// console.log(typeof zzz); //function

// const n = zzz();
// console.log((`n : ${n}`)); // 30
// zzz()에 값을 넣어준 것도 없는데 부모함수calculator(10, 20)가 값을 제어하고
// 원래 함수에서 호출이 끝났으면 매개변수와 지역변수가 사라져야하는데, 
// calculator(10, 20)의 호출이 끝났는데, 그 값이 zzz 함수 호출시점까지 살아있음
// 이것을 클로저라고 함





//위는 중첩함수인데, 외부와 내부를 다 함수선언문으로 작성하면 가독성이 떨어짐
// 아래처럼 내부를 함수표현식으로 표현 (세미콜론 잊지말기)
// function calculator(n1, n2) {
//     const add = function() {
//         return n1 + n2;
//     }; 
//     return add;
// }

// 그 내부를 다시 화살표함수로 표현
// function calculator(n1, n2) {
//     const add = () => n1 + n2;
//     return add;
// }

// add변수가 return에서 한번밖에 안쓰였으니까, 바로 return 가능
// function calculator(n1, n2) {
//     return () => n1 + n2;
// }
// 쌤은 함수를 줄인다면 딱 위의 정도로 줄이는게 낫다고 함 (외부: 함수선언문, 내부: 함수표현식)

// 자, 외부함수도 화살표함수로 바꾼다면?
// const calculator = (n1, n2) => () => n1 + n2;
// 그러나, 오히려 너무 짧은 코드를 써서 가독성을 줄이면 안됨.. 적당히 줄일 것!





// 누를 때 마다 숫자가 올라가는 카운트기능 만드는 법
// let count = 0; // 카운팅 변수 (전역변수임!!)
// const increase = () => ++count; // 카운트를 올리는 함수

// console.log(increase()); // 괄호 없으면 [Function: increase]
// console.log(increase());
// count = 999;
// console.log(increase()); // 3  //1000
// 전역변수는 아무곳에서나 값이 재할당이 될수있기 때문에 매우 위험함
// 그래서 전역변수를 자제하고, 지역변수로 사용해야함

// 그러면 지연변수로 다시 함수를 정의 해보자!
// const increase = () =>  {
//     let count = 0 ; // 지역변수
//     return ++count;
// };

// console.log(increase()); // 1
// console.log(increase()); // 1
// // count = 999; // 중간개입못함 지역변수니까, 외부에서 참조 못함
// console.log(increase()); // 1
// 지역변수이기 때문에 누적이 안되고, 메모리에서 올라왔다가 내려왔다가 함
// 상태값을 어떻게 유지하게 할수 있을까?
// 이럴 때 사용하는 것이 클로저임!




// 클로저(closure)란 외부 변수를 기억하고 이 외부 변수에 접근할 수 있는 함수
// 클로저 사용이유
// 전역변수의 남발을 막고, 값의 상태를 유지하기 위해서 사용 
// (상태유지stateful <-> 상태유지 안함stateless 계속 초기값으로 돌아가는 것)

// const increaseClosure = () => {
//     let count = 0; // 지역변수
//     const increase = () => ++count; // 헬퍼함수
//     return increase;
// };

// const increaseClosure = () => {
//     let count = 0; // 지역변수
//     return () => ++count;
// };
// increaseClosure는 카운트를 직접 올리는 것이 아니라, 카운트를 올리는 보조함수를 가져다 줌

// const increase = increaseClosure(); // 함수자체를 준것 (10번라인과 동일한 의미) 카운트를 직접 올리는 것이 아니라, 카운트를 올릴 수 있는 도구를 준것!

// console.log(increase());
// console.log(increase());
// count = 999; // 중간개입못함 
// console.log(increase()); // 3

// (상태유지stateful <-> 상태유지 안함stateless 계속 초기값으로 돌아가는 것)
// http가 stateless임! 상태가 유지되지 않음. 그래서 통신에서 쿠키, 캐쉬, 세션, 로그인토큰을 쓰는 것

// 어떠한 데이터는 함수를 통해서 제어되어야 한다!가 중요함!
// 현재 count도 클로저 안에 가둬놔서 직접건드리지 못하게(count = 999; 같은거) 함수 안에 가둬서 제어하는 것임

// 근데, 클로저는 함수를 만들어서 헬퍼함수를 리턴받는 작업이 필요함 (98번라인 같은짓)





// 정의를 하고 함수 자체를 리턴하는것이(헬퍼함수 리턴작업이) 귀찮아
// 그래서 만들자 마자 헬퍼함수를 리턴할 수 있는 방법이 있음
// 즉시실행 함수 : 정의와 동시에 호출
// (만들자마자 호출하니까 일회용함수. 이름이 필요없음. 헬퍼함수는 한번만 받으면 되기때문에 익명함수로 만듦!)
// (function(n1,n2) {})();
// (function(n1,n2) {}) : 익명함수정의
// () : 함수호출
const result = (function (n1, n2) {
    return n1 + n2;
})(5, 8);

console.log(result);
// 이 함수 재활용 가능? 못함! 이름이 없기 때문에!




// 우리가 실제로 사용하는 함수는 헬퍼함수임 (헬퍼함수 - 카운트 계속올리는 함수)
// 근데 그 값을 유지하기 위한용도로 클로저함수를 만든 것임. (클로저함수 - 카운트 유지용)
// 즉, 클로저함수의 이름은 일회용이니까 필요가 없음

// const increaseClosure = () => {
//     let count = 0; // 지역변수
//     return () => ++count;
// }

// 클로저함수 이름 삭제하고, 그 클로저함수를 소괄호로 감싸서, 바로 호출()!

// (() => {
//     let count = 0; // 지역변수
//     return () => ++count;
// })();

// 그러면 바로 헬퍼함수(카운트 올라가는 함수)를 리턴해줌
// 그 헬퍼 함수자체를 변수(함수자체를 받은거임)에 받으면 됨!

const increase = (() => {
    let count = 0; // 지역변수
    return () => ++count;
})();

console.log(increase());
console.log(increase());
console.log(increase()); //3


// 첫번째는 클로저함수를 만들고, 그걸 불러서(헬퍼함수자체를 받아서) 변수에 담아서, 변수() 함수호출함
// 두번째는 익명클로저함수를 만들어서 바로 헬퍼함수를 콜함, 그걸 변수에 담아서, 변수() 함수호출함


// 홈페이지들보면 실시간 검색어만 계속 바뀜. 나머지는 상태유지되고. 이럴 때 사용되는거임

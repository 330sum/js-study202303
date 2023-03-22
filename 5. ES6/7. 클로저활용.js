// 카운트 올리는거 말고, 내리는 것도 만들어보기!
// 즉시실행함수로!
// const increase = ()();
// 첫번째 소괄호 정의, 두번째 소괄호는 호출
// const increase = (function () {})();
// const increase = (function (a, b) {})(1, 2);
// const increase = (() => {})();

// const increase = (() => {
//     let count = 0;
//     return () => ++count;
// })();

// const decrease = (() => {
//     let count = 0;
//     return () => --count;
// })();

// console.log(increase()); // 1
// console.log(increase()); // 2
// console.log(decrease()); // 1? 놉! -1

// 두개의 함수가 공유되지 않음.
// 어떻게 공유할 수 있을까?






// 하나의 클로저함수에 헬퍼함수를 2개(올리는것, 내리는것) 담기
// function countClosure() {
//     let count = 0;

//     function increase() { //헬퍼함수
//         return ++count;
//     }
//     function decrease() { //헬퍼함수
//         return --count;
//     }

//     // 두개의 함수를 동시에 리턴해줘야함 -> 두개니까 객체에 담아서!
//     // return {
//     //     increase: increase, //ES6부터는 키와 벨류가 같으면 키:벨류 안쓰고 하나만 써도됨
//     //     decrease: decrease
//     // };
//     return { increase, decrease }; 
// }

// const counter = countClosure();
// // countClosure()는 객체{increase, decrease}를 리턴하기 때문에 counter는 객체임
// // 여기에서 increase는 () => ++count 함수, decrease는 () => --count 라는 함수임

// const increase = counter.increase; // counter에 들어있는 키 increase에 접근하면 함수자체를 값으로 받을 수 있음
// const decrease = counter.decrease;

// console.log(increase()); // 1
// console.log(increase()); // 2
// console.log(decrease()); // 1







// 위의 코드를 화살표 함수로 바꾸기
// 화살표함수는 값이 되니까 세미콜론 잊지 말기
// const countClosure = () => {
//     let count = 0;

//     const increase = () => ++count;
//     const decrease = () => --count;

//     return { increase, decrease };
// };



// 위의 코드를 바로 return값에 집어넣기
// const countClosure = () => {
//     let count = 0;

//     return {
//         increase: () => ++count,
//         decrease: () => --count
//     };
// };



// 클로저함수의 이름을 지우고 즉시실행함수로 바꾸기
// const counter = ()(); 
// 첫번째 소괄호에 이름 땐 클로저함수를 통째로 넣기
const counter = (() => {
    let count = 0;

    return {
        increase: () => ++count,
        decrease: () => --count
    };
})();

const {
    increase,
    decrease
} = counter; //구조분해할당에서 배움!

console.log(increase()); // 1
console.log(increase()); // 2
console.log(decrease()); // 1
// 이렇게 쓰면 멋있는 코드 완성!







// 나는 이 counter를 좀 더 범용적으로 만들고 싶음
// 3씩 올리거나 제곱씩 올릴 수 있도록!
// 이때 콜백함수를 사용!
// function counterWithCbClosure() {
//     let count = 0; // 상태변수

//     function process(callback) { // 헬퍼함수
//         return count = callback(count); // count의 148번라인 c가 계속 초기화 되기 때문에 상태유지를 하기위해서 상태변수count에 담아서 갱신해줘야함! 주의하기!
//         // return에 ++count, --count가 아니라, 
//         // 내가 상태변수count를 줄테니가 네가 쓰고 싶은대로 마음대로 써!라고 callback을 씀
//     }

//     return process;
// }

// const counter_ = counterWithCbClosure();
// // counter_ 가 process 임 (저 process함수 자체임)

// // console.log(counter_(function() {}));
// // (function() {}) 이 process(callback)에서 callback 부분임

// // console.log(counter_(function(c) {}));
// // c가 callback(count)의 count 부분임

// // console.log(counter_(function(c) { return ++c; }));
// // console.log(counter_(function(c) { return c += 3; }));
// // 화살표 함수로 바꾸기 
// console.log(counter_(c =>  ++c ));       // 1
// console.log(counter_(c => c += 3 ));     // 4
// console.log(counter_(c => c **= 2 ));    // 16

// // 클로저는 만들기 보다는 만들어진 클로저를 더 많이 사용함 (개념잡고 가야 읽을 수 있음!)







//위의 코드
// function counterWithCbClosure() {
//     let count = 0; // 상태변수
//     function process(callback) { // 헬퍼함수
//         return count = callback(count); 
//     }
//     return process;
// }
// const counter_ = counterWithCbClosure();




//위의 코드 화살표함수로 바꾸기
// const counterWithCbClosure = () => {
//     let count = 0; // 상태변수
//     return (callback) => count = callback(count);
// }
// const counter_ = counterWithCbClosure();




// 위의 코드 즉시실행함수로 바꾸기
const counter_ = (() => {
    let count = 0; // 상태변수
    return (callback) => count = callback(count);
})();


console.log(counter_(c => ++c)); // 1
console.log(counter_(c => c += 3)); // 4
console.log(counter_(c => c **= 2)); // 16
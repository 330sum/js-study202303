var a = 10;
var b = a;

a = 15;

console.log(b); //10

console.log('------------------------');

var arr1 = [1, 2, 3, 4];
var arr2 = arr1;

arr1[1] = 999;
arr2[0] = 77;

console.log('arr1 :', arr1); //[77, 999, 3, 4]
console.log('arr2 :', arr2); //[77, 999, 3, 4]


console.log('========================================');


// 배열의 생성
// 배열 변수 이름 관례: 복수형, list어미
var fruits = [
    '오렌지',
    '라임',
    '레몬',
]; // 배열 리터럴

console.log(fruits); // Array (배열임!)
console.log(typeof fruits); //object
console.log(`배열의 데이터 수: ${fruits.length}`);

// 배열 데이터 참조
console.log(`첫번째 데이터: ${fruits[0]}`);
console.log(`마지막 데이터: ${fruits[fruits.length-1]}`);

// 배열 요소 수정
fruits[1] = '파인애플';

console.log(fruits);

// // 수정시 주의사항
// fruits[4] = '초콜릿';
// console.log(fruits);
//     // 반드시 데이터가 존재하는 지 확인하고 사용하기

// 배열 내부데이터 전체 참조 (순회: travis)
// 선형 탐색: 순차적으로 확인해보면서 찾기
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('------------------------');

var target = '오렌지';
for (var i = 0; i < fruits.length; i++) {

    if (fruits[i] === target) {
        console.log(`${target} 과일은 존재함! `);

    }
}


var target = '바나나';
for (var i = 0; i < fruits.length; i++) {

    if (fruits[i] !== target) {
        console.log(`${target} 해당 과일은 존재하지 않음! `);
    }
}


var target = '바나나';
// 찾았는지에 대한 여부
var findFlag = false;
for (var i = 0; i < fruits.length; i++) {

    if (fruits[i] === target) {
        console.log(`${target} 과일은 존재함! `);
        findFlag = true;
        break;
    }
}
if (!findFlag) console.log(`${target} 과일 없음`);



//for ~ of 반복문 (배열전용 반복문)
var weekDays = ['월', '화', '수', '목', '금', '토', '일'];

// 전체 인덱스 순회, 특정 인덱스를 순회할 때 사용
for (var i = 0; i < weekDays.length; i++) {
    console.log(`${weekDays[i]}요일!`);
}

// 전체 인덱스를 순회할 때 사용 (특정 인덱스 순회 시, 사용불가)
for (var day of weekDays) {
    console.log(`${day}요일!!`);

}





console.log('========================================');

var arrayLike = {
    0: '자몽',
    1: '포도',
    2: '한라봉',
    length: 3,
}

console.log(arrayLike); //Array-Like (유사배열임!)
console.log(typeof arrayLike); //object
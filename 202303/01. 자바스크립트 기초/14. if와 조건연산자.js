var money = 3000;

var food = money >= 2000 ? '김밥' : '삼각김밥';

// var food;
// if (money >= 2000) {
//     food = '김밥';
// } else {
//     food = '삼각김밥';
// }
console.log(`선택한 음식 : ${food}`);

console.log('================================================');




var money = 1000;

// var food = money >= 5000 
//             ? '볶음밥' 
//             : (money >= 3000 
//                 ? '라면' 
//                 : '굶음');

var food;

if (money >= 5000) {
    food = '볶음밥';
} else if (money >= 3000) {
    food = '라면';
} else {
    food = '굶음';
}
console.log(`선택한 음식 : ${food}`);
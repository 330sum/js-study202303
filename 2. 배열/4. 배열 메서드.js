var foodList = ['닭꼬치', '볶음밥', '짜장면', '족발'];


// indexOf() : 배열의 특정 데이터가 몇번 인덱스에 있는지 탐색
var target = '짜장면';
var index = foodList.indexOf(target);
console.log(`찾은 인덱스 : ${index}`);


// var count = 0;
// var target = '짜장면';
// for(var food of foodList) {
//     if (food === target) {
//         break;
//     }
//     count++;
// }
// console.log(`찾은 인덱스 : ${count}`);

console.log(('========================================================'));

// slice() : 배열을 일정부분 잘라냄. 사본배열을 반환 (원본은 그대로 있음)

foodList.push('오뎅', '순대국밥');
console.log(foodList);

// 1번 이상 4번 미만 추출
var sliceFoods = foodList.slice(1, 4);
console.log(sliceFoods);
console.log(foodList);

// 2번 부터 끝까지 추출
var sliceFoods2 = foodList.slice(2);
console.log(sliceFoods2);

// 원본배열을 그대로 복사 (배열이 2개 존재하는 것!)
var sliceFoods3 = foodList.slice();
console.log(sliceFoods3);


console.log(('========================================================'));

// reverse() : 배열 역순으로 배치, 원본이 변함
var nums = [10, 20, 30, 40, 50];
var copyNums = nums.slice(); // 카피본 만들기
copyNums.reverse();
console.log(copyNums);


console.log('------------------------------------------');


var array = ['짜장면', '짬뽕', '볶음밥', '탕수육', '군만두'];
var left = 0;
var right = array.length-1;

while (left<right){
    var temp = array[left];
    array[left] = array[right];
    array[right] = temp;

    left++;
    right--;
}
console.log(array);


console.log('------------------------------------------');


var nums = [10, 20, 30, 40, 50];

for(var i=0; i<nums.length/2; i++){
    var t = nums[i];
    nums[i] = nums[nums.length-1-i];
    nums[nums.length-1-i] = t;
}
console.log(nums);



console.log(('========================================================'));

// concat() : 배열 2개를 연결 (사본배열 반환)

var arr1 = [10, 20, 30];
var arr2 = [100, 900, 700, 1000];

var concatedArr = arr1.concat(arr2);

console.log(concatedArr);


console.log(('========================================================'));

// includes() : 배열의 특정 데이터가 존재하는지 확인


var resultFlag = foodList.includes('닭꼬치');
console.log(resultFlag); //true


console.log(('========================================================'));

// splice() : 배열의 특정요소 제거, 삽입 (성능면에서 좋지 않음) (원본 반영)

console.log(foodList);

// 원본에 반영됨
foodList.splice(1, 2); //1번 부터 2개 지워주세요
console.log(foodList);
foodList.splice(3, 1); //3번 부터 1개 지워주세요
console.log(foodList);


foodList.splice(0, 1); // 0번 부터 1개 지우기 -> shift 효과
foodList.splice(0, 1, '보쌈'); // 0번 부터 1개 지우고, 그 자리에 '보쌈'을 넣어라
console.log(foodList);


//이걸 활용하면 안지우고 중간 삽입이 가능함
foodList.splice(1, 0, '마라탕'); 
console.log(foodList);

foodList.splice(2, 0, '아이스크림', '떡볶이'); // 2개 넣어도 상관없음 
console.log(foodList);

// 2번부터 끝까지 다지워!
foodList.splice(2);
console.log(foodList);





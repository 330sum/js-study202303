// 배열의 특정 데이터의 인덱스를 구하는 함수

var NOT_FOUND = -1;

function myIndexOf(arr, element) {

    for (var i = 0; i < arr.length; i++) {
        if (element === arr[i]) {
            return i;
        }
    }
    return -1;
}


// 배열의 특정 데이터의 존재여부를 확인하는 함수
function myIncludes(arr, element) {

    for (var i = 0; i < arr.length; i++) {
        if (element === arr[i]) {
            return true;
        }
    }
    return false;
}


// 배열의 특정 데이터의 존재여부를 확인하는 함수 (함수재활용!)
function myIncludes(arr, element) {
    return myIndexOf(arr, element) !== -1;
}



var foodList = ['짜장면', '탕수육', '고추잡채', '족발'];

var idx = myIndexOf(foodList, '탕수육'); // idx : 1
console.log(`idx: ${idx}`);
var idx = myIndexOf(foodList, '김말이'); // idx : -1
console.log(`idx: ${idx}`);

var flag = myIncludes(foodList, '족발');
console.log(`flag: ${flag}`);
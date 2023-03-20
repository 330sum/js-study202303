/*
    description: x ~ y 까지의 총합을 구하는 함수
    parameter:
        - begin: 누적총합의 시작값
        - end: 누적총합의 끝값
    return: 계산된 누적합
*/

// 매개변수(parameter): 함수를 정의할 때, 외부에서 받아오는 값을 저장할 변수
function calcRangeTotal(begin, end) {

    //console.log(`x: ${begin}, y: ${end}`);

    var total = 0; // 총합을 저장할 변수
    for (var i = begin; i <= end; i++) {
        total += i;
    }
    return total;
}

// 인수(argument) : 함수를 호출할 때, 함수에게 전달하는 값이나 표현식
var result1 = calcRangeTotal(1, 10);
console.log(`result1: ${result1}`);
console.log(`result2: ${calcRangeTotal(1, result1 - 5)}`); // 배열, 객체, 함수 다 넣어도 됨



// 매개변수의 기본값 설정
function sayHello(language = '한국어') { // ES6부터

    // ES5
    language = language || '한국어'; // or연산자는 첫번째 truty를 찾음! (아무것도 안 넣으면 undefined로 falsy값)

    if (language === '한국어') {
        console.log('안녕하세요');
    } else if (language === '영어') {
        console.log('hello~');
    } else if (language === '중국어') {
        console.log('따쟈하오');
    } else {
        console.log('크크루삥뽕~');
    }
}

sayHello('탄자니아어');
sayHello(); // 아무것도 전달안하면(undefined) 한국어로 기본값

// ex: [10, 20, 30, 40, 50]
//function slice(start=0, end=this.length-1) 
function myslice(arr, start, end) {
    // 사본 배열 생성
    var coppyArr = [];
    for (var i = start; i < end; i++) {
        coppyArr.push(arr[i]);
    }
    return coppyArr;
}

var newArr = myslice([10, 20, 30, 40, 50], 1, 3);
console.log(newArr);



// 매개변수가 없는 함수
function selectRandomPet() {
    var pets = ['멍멍이', '짹짹이', '꽥꽥이', '어흥이'];

    // pets[0] ~ pets[4]
    // pets[Math.floor(Math.random() * 4)]
    return pets[Math.floor(Math.random() * pets.length)];
}

var randomPet = selectRandomPet();
console.log((`랜덤동물: ${randomPet}`));
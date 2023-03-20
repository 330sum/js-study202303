// multi parameter: 매개변수가 n개인 경우

// 집합 자료구조를 매개변수로 사용
// [배열, 객체]

// n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수

function addAll(numbers) {
    var total = 0;

    for (var n of numbers) {
        total += n;
    }
    return total;
}

var r1 = addAll([1, 3, 5]); // 인라인방식
console.log(`r1 : ${r1}`); // r1 : 9 



// 스프레드 (ES6)
function addAll(...numbers) {
    var total = 0;

    for (var n of numbers) {
        total += n;
    }
    return total;
}

var r1 = addAll(1, 3, 5, 10, 20);
console.log(`r1 : ${r1}`);





function foo(arr1, arr2) {

}

foo([10, 20], [500, 1000, 1500]);



// 매개변수로 배열 여러개 전달하는 건 안됨!!
// function bar(...arr1, ...arr2) {

// }

// foo(10, 20, 500, 1000, 1500);


console.log('====================================');

// 함수의 리턴값은 언제나 하나!
// 2개의 정수를 전달하면 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 리턴받고 싶어
// 집합자료구조(박스)에 담아서 리턴하면 됨!
// [변수]
// function operateAll(n1, n2) {
//     var addResult = n1 + n2;
//     var subResult = n1 - n2;
//     var multiResult = n1 * n2;
//     var divideResult = n1 / n2;

//     var resultSet = [addResult, subResult, multiResult, divideResult];
//     return resultSet;
// }

// [인라인]
function operateAll(n1, n2) {
    return [
        addAll(n1, n2),
        n1 - n2,
        n1 * n2,
        n1 / n2
    ];
}

// [인라인] 
// console.log(`덧셈결과: ${operateAll(10, 5)[0]}`);
// console.log(`뺄셈결과: ${operateAll(10, 5)[1]}`);
// console.log(`곱셈결과: ${operateAll(10, 5)[2]}`);
// console.log(`나눗셈결과: ${operateAll(10, 5)[3]}`);

// [변수] - 여러번 사용하니까, 변수에 담아서 사용
var result = operateAll(10, 5); //result 배열임
console.log(`덧셈결과: ${result[0]}`);
console.log(`뺄셈결과: ${result[1]}`);
console.log(`곱셈결과: ${result[2]}`);
console.log(`나눗셈결과: ${result[3]}`);

// result.push('메롱'); //됨 (배열이니까)
// result.pop(); // 나눗셈결과 빠짐
// result[1].pop(); // 숫자기때문에 안됨
// result[1]++; // 됨
// result[1] ** 3; // 됨
// result ** 3; // 안됨 (배열은 3제곱 못하니까)
// operateAll(100, 4)[1]; //됨 (배열)
// operateAll(100, 4)++; // 안됨
// operateAll(100, 4)[0]++; // 됨
// operateAll(100, 4).pop(); // 됨
// for(var n of operateAll(100, 4)) {} // 됨(4바퀴)
// operateAll(100, 4).length; // 됨 (4)


function operateAll(n1, n2) {
    return {
        plus: addAll(n1, n2),
        minus: n1 - n2,
        multiply: n1 * n2,
        divide: n1 / n2
    };
}

// 집합자료구조 사용 시, 배열과 객체 중 어떤 걸 쓰느냐?
// 순서 중요 - 배열, 순서가 바뀌어도 될때 - 객체
// 순서가 중요하지 않기 때문에, 객체로 쓰는게 훨씬 나음
var result = operateAll(10, 5); //result 배열임
console.log(`덧셈결과: ${result.plus}`);
console.log(`뺄셈결과: ${result.minus}`);
console.log(`곱셈결과: ${result.multiply}`);
console.log(`나눗셈결과: ${result.divide}`);
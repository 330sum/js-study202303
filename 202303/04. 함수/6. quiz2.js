/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
       반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

function calcNumbersTotalAndAverage(...numbers) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    var avg = 0;
    avg = total / numbers.length;
    return {
        total,
        avg
        // 변수이름과 프로퍼티 키의 이름이 같은경우, 생략가능 (ES6문법) 
    };
}


var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);
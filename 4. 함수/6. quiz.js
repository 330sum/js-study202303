/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
       반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

function calcNumbersTotalAndAverage(...numbers) {
    var sum = 0;
    var avg = 0;
    for (var number of numbers) {
        sum += number;
    }
    avg = sum / numbers.length;

    return {
        total: sum,
        avg: avg,
    };
}


var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);
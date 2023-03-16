//더하기, 빼기, 곱하기 + 정답횟수/틀린횟수 출력 + 난이도 설정

alert('재미있는 더하기, 빼기, 곱하기 게임!\n즐겁게 문제를 푸시다가 지겨우면 0을 누르세요!');

var HIGH = 1,
    MIDDLE = 2,
    LOW = 3;

var level = +prompt('난이도를 선택하세요!\n# [1. 상(1~100) | 2. 중(1~50) | 3. 하(1~20)]');
while (true) {
    if (level === HIGH) {
        var rn1 = Math.floor(Math.random() * 100) + 1;
        var rn2 = Math.floor(Math.random() * 100) + 1;

    } else if (level === MIDDLE) {
        var rn1 = Math.floor(Math.random() * 50) + 1;
        var rn2 = Math.floor(Math.random() * 50) + 1;

    } else if (level === LOW) {
        var rn1 = Math.floor(Math.random() * 20) + 1;
        var rn2 = Math.floor(Math.random() * 20) + 1;

    } else {
        alert('난이도를 숫자로 다시 입력하세요!');
        continue;
    }
    break;
}


var countO = 0,
    countX = 0;

while (true) {

    while (true) {

        //plus
        while (true) {
            var plusAnswer = rn1 + rn2;

            var humanPlus = +prompt(`${rn1} + ${rn2} = ?`);

            if (humanPlus === 0) {
                alert('게임을 종료합니다!');
                alert(`정답횟수: ${countO}회, 틀린횟수: ${countX}회`)
                break;
            } else if (humanPlus === plusAnswer) {
                alert('정답입니다!');
                countO++;
                break;
            } else {
                alert('틀렸습니다!');
                countX++;
                break;
            }
        } //plus 끝


        //minus
        while (true) {

            if (rn1 > rn2) {
                var tmp;
                tmp = rn1;
                rn1 = rn2;
                rn2 = tmp;
            }
            var minusAnswer = rn2 - rn1;

            var humanMinus = +prompt(`${rn2} - ${rn1} = ?`);

            if (humanMinus === 0) {
                alert('게임을 종료합니다!');
                alert(`정답횟수: ${countO}회, 틀린횟수: ${countX}회`)
                break;
            } else if (humanMinus === minusAnswer) {
                alert('정답입니다!');
                countO++;
                break;
            } else {
                alert('틀렸습니다!');
                countX++;
                break;
            }
        } // minus 끝


        // multipulation
        while (true) {

            var plusAnswer = rn1 * rn2;

            var humanMul = +prompt(`${rn1} * ${rn2} = ?`);
            if (humanMul === 0) {
                alert('게임을 종료합니다!');
                alert(`정답횟수: ${countO}회, 틀린횟수: ${countX}회`)
                break;
            } else if (humanMul === mulAnswer) {
                alert('정답입니다!');
                countO++;
                break;
            } else {
                alert('틀렸습니다!');
                countX++;
                break;
            }
        } // multipulation 끝


    }
}
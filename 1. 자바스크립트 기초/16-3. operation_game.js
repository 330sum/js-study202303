//더하기, 빼기, 곱하기 + 정답횟수/틀린횟수 출력

alert('재미있는 더하기, 빼기, 곱하기 게임!\n즐겁게 문제를 푸시다가 지겨우면 0을 누르세요!');

var countO = 0,
    countX = 0;

while (true) {

    var rn1 = Math.floor(Math.random() * 100) + 1;
    var rn2 = Math.floor(Math.random() * 100) + 1;

    if (rn1 > rn2) {
        var tmp;
        tmp = rn1;
        rn1 = rn2;
        rn2 = tmp;
    }

    var plusAnswer = rn1 + rn2;
    var minusAnswer = rn2 - rn1;
    var mulAnswer = rn1 * rn2;


    while (true) {

        //plus
        while (true) { 

            var rn1 = Math.floor(Math.random() * 100) + 1;
            var rn2 = Math.floor(Math.random() * 100) + 1;

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

            var rn1 = Math.floor(Math.random() * 100) + 1;
            var rn2 = Math.floor(Math.random() * 100) + 1;

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

            var rn1 = Math.floor(Math.random() * 100) + 1;
            var rn2 = Math.floor(Math.random() * 100) + 1;

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
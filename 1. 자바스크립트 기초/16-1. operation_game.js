//더하기 게임

alert('재미있는 더하기 게임!\n즐겁게 문제를 푸시다가 지겨우면 0을 누르세요!');

while (true) {

    var rn1 = Math.floor(Math.random() * 100) + 1;
    var rn2 = Math.floor(Math.random() * 100) + 1;
    var answer = rn1 + rn2;

    var human = +prompt(`${rn1} + ${rn2} = ?`);

    if (human === 0) {
        alert('게임을 종료합니다!');
        break;
    } else if (human === answer) {
        alert('정답입니다!');
        continue;
    } else {
        alert('틀렸습니다!');
    }


}
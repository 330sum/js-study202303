while (true) {

    var HIGH = 1,
        MIDDLE = 2,
        LOW = 3;

    // 사용자의 초기 입력 기회
    var INIT_COUNT = 5;

    while (true) {
        var level = +prompt('난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]');

        if (level === HIGH) {
            INIT_COUNT = 3;
        } else if (level === MIDDLE) {
            INIT_COUNT = 6;
        } else if (level === LOW) {
            INIT_COUNT = 10;
        } else {
            alert('난이도를 숫자로 다시 입력하세요!');
            continue;
        }
        break;
    }

    // 사용자의 남은 입력 기회
    var countDown = INIT_COUNT;

    // 실제 정답
    var secret = Math.floor(Math.random() * 100) + 1;
    console.log(secret);

    //입력 최소값, 최대값
    var minValue = 1,
        maxValue = 100;

    // 게임 종료 플래그
    var gameEndFlag = false;

    while (true) {
        //사용자 입력 답
        var answer = +prompt(`숫자를 입력하세요 [${minValue}~${maxValue}]`);

        //입력이 범위 안의 값인가?
        if (answer < minValue || answer > maxValue) {
            alert('범위 안의  값을 입력하세요!');
            continue;
        }

        countDown--; //39번 라인 전에 있으면 잘못입력해도 - 됨 ㅋㅋ

        if (secret === answer) {
            alert(`정답입니다! ${INIT_COUNT - countDown}번 만에 맞췄습니다`);
            gameEndFlag = true;
            break;
        } else if (secret > answer) {
            alert('UP!');
            minValue = answer + 1;
        } else {
            alert('DOWN!');
            maxValue = answer - 1;
        }

        //추가게임 종료 조건
        if (countDown <= 0) {
            alert(`응~ 너 졌어~~ 정답은 ${secret}이었음 ㅋㅋㅋ`);
            gameEndFlag = true;
            break;
        } else {
            alert(`${countDown}번의 기회가 남았습니다`);

        }

    } // end each game loop

    if (gameEndFlag) { //true 
        var exitFlag = confirm('한판 더?');
        if (!exitFlag) { //exitFlag === false
            alert('수고하셨습니다!');
            break;
        }
    }

} // end all game loop
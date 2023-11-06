// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 사용자들은 입력 기회가 5번으로 제한된다. 
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.



// 사용자의 초기 입력 기회
var INIT_COUNT = 5;
// 사용자의 남은 입력 기회
var countDown = INIT_COUNT;

// 실제 정답
var secret = Math.floor(Math.random() * 100) + 1;
console.log(secret);

while (true) {
    //사용자 입력 답
    var answer = +prompt('숫자를 입력하세요 [1~100]');

    countDown--;

    if (secret === answer) {
        alert(`정답입니다! ${INIT_COUNT - countDown}번 만에 맞췄습니다`);
        break;
    } else if (secret > answer) {
        alert('UP!');
    } else {
        alert('DOWN!');
    }

    //추가게임 종료 조건
    if (countDown <= 0) {
        alert(`응~ 너 졌어~~ 정답은 ${secret}이었음 ㅋㅋㅋ`);
        break;
    } else {
        alert(`${countDown}번의 기회가 남았습니다`);
    }

}
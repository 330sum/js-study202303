// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.



//실제 정답
var secret = Math.floor(Math.random() * 100) + 1;
console.log(secret);

while (true) {

    //사용자 입력 답
    var answer = +prompt('숫자를 입력하세요 [1~100]');

    if (secret === answer) {
        alert('정답!');
        break;
    } else if (secret > answer) {
        alert('UP!');
    } else {
        alert('DOWN!');
    }


}
alert('재미있는 UP&DOWN 게임');
var human = +prompt('1~10 사이의 무작위 숫자를 5번 안에 맞춰 보세요!!!');
var rn = Math.floor(Math.random() * 10) + 1
var count = 5;
while (true) {

    if (human < 1 || human > 10) {
        alert('값의 범위가 아님! 1~10 사이에서 숫자 입력!!')
        var human = prompt(`다시입력! 기회 ${count}번 남음`);
    } else if (human < rn) {
        alert('up!');
        count--;
        var human = prompt(`다시입력! 기회 ${count}번 남음`);
    } else if (human > rn) {
        alert('down!');
        count--;
        var human = prompt(`다시입력! 기회 ${count}번 남음`);
    } else {
        alert('딩동댕!');
        break;
    }

    if (count === 0) {
        alert('모든 기회를 소진했음 ㅠㅠ 빠이~');
        break;
    }

}
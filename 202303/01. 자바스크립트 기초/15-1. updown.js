alert('재미있는 UP&DOWN 게임');
var human = +prompt('1~10 사이의 무작위 숫자를 맞춰 보세요!!!');
var rn = Math.floor(Math.random() * 10) + 1;
console.log(rn);

while (true) {

    if (human < 1 || human > 10) {
        alert('값의 범위가 아님! 1~10 사이에서 숫자 입력!!')
        var human = prompt(`다시입력! 기회 ${count}번 남음`);
    } else if (human < rn) {
        alert('up!');
        var human = prompt('다시입력하세요!');
    } else if (human > rn) {
        alert('down!');
        var human = prompt('다시입력하세요!');
    } else {
        alert('딩동댕!');
        break;
    }


}
alert('UP&DOWN 게임을 시작하지');
var level = +prompt('난이도를 선택하시게!\n1. 상(기회 3번) 2. 중(기회 6번) 3.하(기회 10번)');


var rn = Math.floor(Math.random() * 10) + 1
while (true) {

    if (level < 1 || level > 3) {
        alert('^^?\n레벨 난이도를 다시 입력하슈!');
        var level = +prompt('난이도를 선택하시게!\n1. 상(기회 3번) 2. 중(기회 6번) 3.하(기회 10번)');
    } else if (level = 1) {
        var count = 3;
        var human = +prompt(`1~10 사이의 무작위 숫자를 ${count}번 안에 맞춰 보세요!!!`);
    } else if (level = 2) {
        count += 3;
        var human = +prompt(`1~10 사이의 무작위 숫자를 ${count}번 안에 맞춰 보세요!!!`);
    } else {
        var count = 10;
        var human = +prompt(`1~10 사이의 무작위 숫자를 ${count}번 안에 맞춰 보세요!!!`);
    }


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
    } else if (human === rn) {
        alert('딩동댕!');
        break;
    }

    if (count === 0) {
        alert('모든 기회를 소진했음 ㅠㅠ 빠이~');
        break;
    }

}
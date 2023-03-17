//더하기 + 정답횟수/틀린횟수 출력

// 문제 번호
var questionNumber = 1;

// 정답횟수, 오답횟수
var correctCount = 0,
    wrongCount = 0;

while (true) {

    // 랜덤 정수 2개 생성
    var firstNumber = Math.floor(Math.random() * 20) + 1;
    var secondNumber = Math.floor(Math.random() * 20) + 1;

    // 사용자에게 문제를 내고 정답을 입력받기
    var userAnswer = +prompt(`Q${questionNumber++}. ${firstNumber}+${secondNumber} =??`);

    //게임 종료 조건
    if (userAnswer === 0) {
        alert('게임을 종료합니다');
        break;
    }

    //실제정답
    var realAnswer = firstNumber + secondNumber;

    //정답 검증
    if (userAnswer === realAnswer) {
        alert('정답입니다!');
        correctCount++;
    } else {
        alert('틀렸습니다');
        wrongCount++;
    }
} // end each game

alert(`정답횟수 : ${correctCount}회, 틀린횟수: ${wrongCount}회`);
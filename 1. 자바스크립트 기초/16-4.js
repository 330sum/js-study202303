//더하기, 빼기, 곱하기 + 정답횟수/틀린횟수 출력

// 문제 번호
var questionNumber = 1;

// 정답횟수, 오답횟수
var correctCount = 0,
    wrongCount = 0;

while (true) {

    // 랜덤 정수 2개 생성
    var firstNumber = Math.floor(Math.random() * 20) + 1;
    var secondNumber = Math.floor(Math.random() * 20) + 1;

    //랜덤 부호를 결정할 정수 생성
    var markNum = Math.floor(Math.random() * 3);

    //기호를 저장할 변수
    var mark;

    //실제정답
    var realAnswer;

    if (markNum === 0) {
        mark = '+'
        realAnswer = firstNumber + secondNumber;
    } else if (markNum === 1) {
        mark = '-';
        realAnswer = firstNumber - secondNumber;
    } else {
        mark = '*';
        realAnswer = firstNumber * secondNumber;
    }

    // 사용자에게 문제를 내고 정답을 입력받기
    var userAnswer = +prompt(`Q${questionNumber++}. ${firstNumber}${mark}${secondNumber} =??`);

    //게임 종료 조건
    if (userAnswer === 0) {
        alert('게임을 종료합니다');
        break;
    }


    //정답 검증
    if (userAnswer === realAnswer) {
        alert('정답입니다!');
        correctCount++;
    } else {
        alert('틀렸습니다');
        wrongCount++;
    }
} // end each game

alert(`정답횟수 : ${correctCount}회, 틀린횟수: ${wrongCount}회`)
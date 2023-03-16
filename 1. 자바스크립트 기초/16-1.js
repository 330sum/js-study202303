/*
    시스템은 1~20사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.
*/

// 랜덤 정수 2개 생성
var firstNumber = Math.floor(Math.random() * 20) + 1;
var secondNumber = Math.floor(Math.random() * 20) + 1;

// 사용자에게 문제를 내고 정답을 입력받기
var userAnswer = +prompt(`Q1. ${firstNumber}+${secondNumber} =??`);

//실제정답
var realAnswer = firstNumber + secondNumber;

//정답 검증
if (userAnswer === realAnswer) {
    alert('정답입니다!');
} else {
    alert('틀렸습니다');
}
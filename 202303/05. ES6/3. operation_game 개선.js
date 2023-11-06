//더하기, 빼기, 곱하기 + 정답횟수/틀린횟수 출력 + 난이도 설정
//뺄셈이 동일한 숫자가 나오면 안됨
//아무것도 입력 안하면 다시 입력

// 난이도 선택 기능
function selectGameLevel() {

  const message = `~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~~~
[1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`;
const level = +prompt(message);

  //난이도에 따른 숫자 최대값
  let maxNumber;

  if (level === 1) {
    maxNumber = 100;
  } else if (level === 2) {
    maxNumber = 50;
  } else if (level === 3) {
    maxNumber = 20;
  } else {
    maxNumber = 9999;
  }

  return maxNumber;
}




// 문제 생성 기능
function makeGameData() {

  const maxNumber = selectGameLevel();

  // 문제 번호
let questionNumber = 1;




  while (true) {

    // 랜덤 정수 2개 생성
    let firstNumber = Math.floor(Math.random() * maxNumber) + 1;
    let secondNumber = Math.floor(Math.random() * maxNumber) + 1;
  
    //랜덤 부호를 결정할 정수 생성
    let markNum = Math.floor(Math.random() * 3);
  
    //기호를 저장할 변수
    let mark;
  
    //실제정답
    var realAnswer;
  
    if (markNum === 0) {
      mark = '+'
      realAnswer = firstNumber + secondNumber;
    } else if (markNum === 1) {
      if (firstNumber === secondNumber) continue;
      else if (firstNumber < secondNumber) {
        var temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
      }
      mark = '-';
      realAnswer = firstNumber - secondNumber;
    } else {
      mark = '*';
      realAnswer = firstNumber * secondNumber;
    }

    while (true) {
      // 사용자에게 문제를 내고 정답을 입력받기
      var userAnswer = prompt(`Q${questionNumber++}. ${firstNumber}${mark}${secondNumber} =??`);
      // +를 쓰게 되면 0으로 바꿔 버리기 때문에 prompt 앞의 + 생략!
  
      // 아무것도 입력 안하면 다시 입력
      if (userAnswer === '') {
        continue;
      } else {
        userAnswer = +userAnswer;
        break;
      }
    }
  
  
    //게임 종료 조건
    if (userAnswer === 0) {
      alert('게임을 종료합니다');
      break;
    }

}






// 정답횟수, 오답횟수
var correctCount = 0,
  wrongCount = 0;










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
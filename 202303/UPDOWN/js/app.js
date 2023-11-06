// import gameData  from './gameData.js';
// import 짜장면 from './gameData.js';
// 내보낸 데이터가 하나밖에 없기때문에 받는데이터 이름 아무거나 넣어도 됨 


import gameStart from "./start.js";



//=========================================================================
// 실행부
// 실행부도 함수화시키는 것이 좋음
// 즉시실행함수 만들기 (마치 자바의 메인함수 같은 역할)
(function () {

    gameStart(100);

})();





// 컴포넌트 개발 = 조각파일로 개발
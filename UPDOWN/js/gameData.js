// 게임 데이터
const gameData = {
    secret: makeRandomNumber(100), // 실제 정답
    answer: null, // 사용자의 선택값 // 클릭한 순간 값이 부여됨
    min: 1, // 최소범위설정
    max: 100 // 최대범위설정
};


// 랜덤정수를 범위에 맞게 생성하는 함수
function makeRandomNumber(range) {
    return Math.floor(Math.random() * range) + 1;
}



// export { gameData, makeRandomNumber };
// 함수는 이름만 써주기
// 필요한것만 내보내기
// export { gameData };
// 만약, 내보낼 데이터가 하나밖에 없으면 
export default gameData;
// 변수정의, 함수정의만 할 것
// 단독으로 외부함수 호출 (함수안에서 함수호출(서브함수, 헬퍼함수)은 가능)
// 디버깅코드는 테스트할때만 사용하고, 다 주석처리하기

let x = 'foo'; //전역변수
// console.log(x); // 디버깅코드 다 지우기

function add(n1, n2) {
    return n1 + n2;
}


// 여기서 정의된 변수와 함수를 내보내기
export { x, add };
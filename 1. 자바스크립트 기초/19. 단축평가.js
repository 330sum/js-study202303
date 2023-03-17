// OR 연산 : 첫번째 truthy를 반환
console.log('hello' || 'world');
console.log(0 || '안녕');

console.log('========================');

// AND 연산 : 첫번째 falsy를 반환
console.log('HELLO' && 'WORLD');
console.log(null && '메롱');

/*
    <h1>안녕하세요 우리 홈페이지에 오신 걸 환영합니다.</h1>
    isLogin() && <h2>xxx님 안녕하세요!</h2>
    // isLogin() true니까 <h2>를 보여줌

    쿠폰당첨플래그 && sendCoupon()
    // 쿠폰당첨플래그가 true면 sendCoupon()을 보내줌

    isMineArticle() && <button>수정</button>
    // 내가쓴게시글이 맞으면(true) 수정버튼을 보여줌
    // 내가쓴게시글이 아니면(flase) 수정버튼을 안 보여줌

    //리액트에서 많이 쓸 것임
*/
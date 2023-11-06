// 외부 js파일 불러오기
import * as foo from './foo.js';
import * as bar from './bar.js';

// 메인실행 파일 app.js
// 실행 코드만 입력: 함수 호출
// 함수정의, 클래스 정의, 변수정의 이 파일에서 절대 하면 안됨!!

console.log(foo.add(10, 20));
console.log(bar.add(10, 20));
console.log(`x: ${foo.x}`);
console.log(`x: ${bar.x}`);

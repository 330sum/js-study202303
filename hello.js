const a = 10;
const b = 30;
console.log(a*b);


var num1 = 10;
console.log(typeof num1);
var num2 = 10.5;
console.log(typeof num2);

// a태그를 가져와서 스타일을 조작
const $link = document.querySelector('a');
console.log($link);
$link.style.background = 'orange';


const arr = [1, 2, 3].map (n => n ** 2);
console.log(arr);

//브라우저 전용 함수
// alert('알림설정');
// prompt('당신의 이름은?')
confirm('집에 가고싶습니까?')
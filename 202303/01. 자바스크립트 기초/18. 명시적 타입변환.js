// // 키, 몸무게
// var cm = prompt('키 입력! (cm)');
// var kg = prompt('몸무게 입력! (kg)');

// var m = cm / 100;

// var bmi = kg / (m * m);
// alert(`당신은 bmi가 ${bmi}입니다.`);

// //promt는 string으로 받았는데, js가 암묵적으로 나누기를 해줌....ㅠ


var x = 30,
    y = 40;

var z = '' + x + y;
console.log(z); //3040 (문자열로 변환)


var num = +'hello';
console.log(num); //에러가 안나고 NaN
var num = Number('hello');
console.log(num); //에러가 안나고 NaN
var num = parseInt('hello');
console.log(num); //에러가 안나고 NaN



// 회원 로그인 여부 확인
// 브라우저 로컬 스토리지에 토큰이 존재하면 로그인한 것임
function isLogin() {
    // 로그인 했으면 ACCESS_TOKEN : 3324afhjaklghjakga
    // 로그인 안 했으면 ACCESS_TOKEN : null
    //getItem은 해당 값이 있으면 값을 가져오고 없으면 null
    return !!localStorage.getItem('ACCESS_TOKEN');
    // 로그인 하면 !!값 -> true 
    // 로그인 안하면 !!null -> false
}
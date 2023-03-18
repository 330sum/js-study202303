var pets = ['멍멍이', '야옹이', '쩝쩝이'];
console.log(pets);


console.log('------------------------------------------');

// 맨 끝 데이터 추가

// pets[3] = '징징이';
// pets[pets.length] = '징징이';
// console.log(pets);
// 배열 요소 추가 시, 위는 좋은 방법이 아님 (자바에서는 아예 안됨)

// 아래는 성능적 측면에서 문제가 없는 방법 임
pets.push('징징이'); //연결리스트 방식으로 진행 됨
pets.push('어흥이');
var newLength = pets.push('거부기', '콩콩이');
console.log(pets);
console.log(newLength); //7

console.log('------------------------------------------');

//  맨 끝 데이터 삭제

// pets.pop();
// pets.pop();
// pets.pop();
// pets.pop();
// pets.pop();
// pets.pop();
// pets.pop();
// console.log(pets); //[]

// var removeTarget = pets.pop();
// console.log(removeTarget); //콩콩이
// var removeTarget = pets.pop();
// console.log(removeTarget); //거부기
// var removeTarget = pets.pop();
// console.log(removeTarget); //어흥이
// var removeTarget = pets.pop();
// console.log(removeTarget); //징징이
// var removeTarget = pets.pop();
// console.log(removeTarget); //쩝쩝이
// var removeTarget = pets.pop();
// console.log(removeTarget); //야옹이
// var removeTarget = pets.pop();
// console.log(removeTarget); //멍멍이
// var removeTarget = pets.pop();
// console.log(removeTarget); //undefined



// shift() : 배열의 맨 첫번째 요소 제거
pets.shift();
console.log(pets);

// unshift() : 배열에 맨 첫번째 데이터 추가
pets.unshift('짝짝이');
console.log(pets);

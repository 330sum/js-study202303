const userNames = ['김철수', '강감찬', '박영희'];

const [kim, kang, park] = userNames;
// 우측에 배열
// 배열을 구조분해해서 원하는 데이터를 변수에 담아서 다시 사용할 수 있음

console.log(kim);
console.log(kang);
console.log(park);



const [firstObj] = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(firstObj); // { id: 1 }
// 우측에 있는 배열에서 0번 인덱스만 변수에 담아서 사용하겠다
// 3번라인 처럼 다 해체해서 변수를 줘도 되고, 원하는만큼만 줘도 됨


// id가 2보다 큰 애들만 필터링해서, 그 중 첫번째만 변수이름 줄수도 있음
const [myObj] = [{ id: 1 }, { id: 2 }, { id: 3 }]
                .filter(obj => obj.id >=2);
console.log(myObj); // { id: 2 }





// 변수 교환하기
let first = 10, second = 20;
// const temp = first;
// first = second;
// second = temp;
[second, first] = [first, second];
// 좌측은 변수의 새 이름, 우측은 실제 변수명
console.log(first); // 20
console.log(second); // 10




console.log('========================================================');
// 해체할 때, 앞에 2개는 변수에 각각 넣고, 나머지는 다시 배열로 묶고싶다
const numbers = [1, 3, 5, 7, 9, 11];

// // 카피본뜨기
// const copyNumbers = numbers.slice();

// const one = copyNumbers.shift(); // 제거하는 값 호출
// const three = copyNumbers.shift();
// const others = copyNumbers;

const [one, three, ...others] = numbers;

console.log(one);
console.log(three);
console.log(others);
console.log(numbers);







console.log('========================================================');
// 스프레드문법 중에 자주 쓰이는 문법
// 배열 복사하는데 몇개 더 추가하고 싶을 때
// 스프레드 : ... (옆으로 펼친다라는 의미)
// slice하고 push
// 스프레드로 배열 간편복사
const foods = ['감튀', 'DQPC', '징거버거'];


// 주의 할 것! 이건 주소 복사임!!
// const copyFoods = foods;

// 이건 실제 데이터 복사!
// const copyFoods = [...foods]; // foods 배열을 펼쳐서 copyFoods에 넣는다

const copyFoods = [...foods, '사이다', '쥬스']; 
// 이게 유용한 이유?! 유사배열을 찐배열로 만들때 사용! (DOM API에서 나옴)
// 유사배열은 배열이 아니기 때문에 slice를 쓸 수 없는데, 이 스프레드 문법을 쓰면 유사배열이 찐배열로 바뀌어서 배열 메서드 사용가능!
foods[0] = '콜라';

console.log(foods); // [ '콜라', 'DQPC', '징거버거' ]
console.log(copyFoods);  // [ '감튀', 'DQPC', '징거버거', '사이다', '쥬스' ]





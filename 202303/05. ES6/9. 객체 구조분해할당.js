const emp = {
    empName: '빡빡이',
    age: 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};

// 이름 참조하고 싶어 (이름 출력하고 싶어)
// console.log((`${emp.empName}님의 나이는 ${emp.age}살이고, 생일은 ${emp.birthDay}입니다`));


// emp.뭐뭐 이런거 귀찮아 어떻게 좀 쉽게 하지?
// const empName = emp.empName;
// const age = emp.age;
// const birthDay = emp.birthDay;
// 이것도 적기 힘듦
// 이럴 때 딕스트럭처링(구조분해할당)을 활용하면 됨!


// 객체 뿌수는건 중괄호, 배열 뿌수는건 대괄호
// 객체는 키값 쓰는 것이기 때문에 순서 상관없음
// 다 안 꺼내고, 원하는 키만 꺼내기
// const {empName, birthDay, age} = emp;

// console.log((`${empName}님의 나이는 ${age}살이고, 생일은 ${birthDay}입니다`));




// 근데, 만약에 내가 empName을 다른곳에서 지역변수로 쓰고 있었으면 어떻게 해?
// 변수명이 겹칠 때, 이렇게 대응 할 수 있음
const { empName: en, birthDay: bd, age: a } = emp;

console.log((`${en}님의 나이는 ${bd}살이고, 생일은 ${a}입니다`));





console.log('==============================================================');
// 이름이랑 생일만 가져오고, 나머지들은 따로 객체에 묶어서 관리하고 싶어 (스프레드로 할 수 있음)
const { birthDay, age, ...rest } = emp;
console.log(birthDay);
console.log(age);
console.log(rest);





console.log('==============================================================');
// 객체 안전복사 (스프레드문법 사용)
//const copyEmp = {...emp};

// 스프레드로 객체 복사하면서 추가 프로퍼티를 만들고 싶을때는?
const copyEmp = {
    ...emp,
    address: '서울시', // 추가
    hobbies: ['놀고먹기', '낮잠'], // 추가
    empName: '망둥어' // 수정됨!
};
console.log(copyEmp);
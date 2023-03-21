const userList = [{
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbys: ['수영', '축구', '테니스']
    },
    {
        account: 'banana',
        userName: '빠나나',
        job: '과일',
        address: '서울',
        hobbys: ['푸드파이팅', '테니스']
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbys: ['족구', '축구', '테니스', '드라이브']
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbys: ['독서', '테니스']
    },
];

// 회원목록에서 회원정보를 출력하는 함수
function alertUserInfo(message) {
    for (const user of userList) {
        // console.log(user.userName);
        // console.log(`저는${user.userName}구용~`);
        // console.log(message);
        message(user);
    }
}
// alertUserInfo(`나는 ${user.userName}입니다!`);
// 외부에 user가 없어서 안됨 (함수내부에 user가 있음!)
// 코드를 통째로 넣어야 함

// alertUserInfo(function(u) {
//     console.log(`나는 ${u.userName}님이시다! 우하하`);
// });

alertUserInfo(u => console.log(`나는 ${u.userName}님이시다! 우하하`));



console.log('==============================================');
// 배열 고차 함수
// forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌
userList.forEach(user => {
    console.log(user.address);
});



const numbers = [10, 20, 30, 40];

// let total = 0;
// for (let n of numbers) {
//     total += n;
// }
// console.log(`총합: ${total}`);

let total = 0;
numbers.forEach(n => total += n);
console.log(`총합: ${total}`);





console.log('==============================================');
// filter() 함수 구현하기
// 서울사는 애 데리고 와봐, 취미가 2개이상인 애 데리고 와봐 (필터링)
// 필터링의 경우의 수가 매우 많으니 그때 딱! 콜백함수 사용하면 됨

// 취미가 딱 2개인 회원들만 필터링해서 새로운 배열에 담아줘
function filter2Hobby() {
    // 새로운 배열 생성
    const filteredArray = [];

    for (const user of userList) {
        if (user.hobbys.length === 2) {
            filteredArray.push(user);
        }
    }
    return filteredArray;
}
const newArray = filter2Hobby();
console.log(newArray);



// 경기사는 애만 데려와
function fiterUserLivedInSeoul() {
    // 새로운 배열 생성
    const filteredArray2 = [];

    for (const user of userList) {
        if (user.address === '경기') {
            filteredArray2.push(user);
        }
    }
    return filteredArray2;
}
const newArray2 = fiterUserLivedInSeoul();
console.log(newArray2);


// 경기도살면서 취미 2개인 애들 데려와
// 딱 if만 바뀜

// 특정 필터조건에 의해 필터링 하는 함수
function filter(condition) {
    // 새로운 배열 생성
    const filteredArray3 = [];

    for (const user of userList) {
        if (condition(user)) {
            filteredArray3.push(user);
        }
    }
    return filteredArray3;
}
// const newArray3 = filter(u => u.address === '경기');
const newArray3 = filter(u => u.hobbys.length >= 3);
console.log(newArray3);




console.log('==============================================');
// 배열 고차함수 filter()
// 특정 조건에 의해 필터링된 배열을 반환
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10];
const newArr = numberArray.filter(apple => apple % 2 === 0);
//predicate 콜백함수의 조건
console.log(newArr);

const human1 = userList.filter(human => human.account === 'abc1234');
console.log(human1);



console.log('==============================================');
// 배열 고차함수 map()
// 특정 배열에서 특정 조건에 맞는 값들만 따로 모아서 매핑한 배열을 반환
// 필터와 맵의 차이는?
// 필터는 필터의 조건에 맞게 걸러짐 (예를 들어 10개짜리 배열이면 3의배수 필터링 하니까 3,6,9 해서 3개만 출력)
// 맵은 조건에 맞게 내용을 바꿔줌 (10개자리 배열을 조건에 맞게 맵핑해서 10개가 출력됨) 
const doubles = numbers.map(n => n ** 2);
console.log(doubles);

const plusTwo = numberArray.map(n => n + 2);
console.log(plusTwo);

const userNames = userList.map(user => user.userName);
console.log(userNames);


// map() 함수 구현하기
// userList에서 원하는 프로퍼티 값을 매핑하는 함수 정의해보기
function myMap(callback) {

    // 이름만 담을 배열
    const mappedArray = [];

    for (const user of userList) {
        mappedArray.push(callback(user));
    }
    return mappedArray;
}

const userNames2 = myMap(user => ({
    userName: user.userName,
    address: user.address
}));
console.log(userNames2);





const appleBasket = [{
        color: 'green',
        sweet: 13
    },
    {
        color: 'red',
        sweet: 14
    },
    {
        color: 'red',
        sweet: 11
    },
    {
        color: 'green',
        sweet: 6
    },
    {
        color: 'green',
        sweet: 7
    },
    {
        color: 'green',
        sweet: 9
    },
];

// 사과 중 녹색이면서, 당도가 9이상인 사과만 선별하여
// 이 사과는 xxx색이며 당도가 xxx입니다.
// 라는 문자열이 모여있는 배열을 리턴하세요.

// const filteredApples = appleBasket.filter(apple => apple.color === 'green' && apple.sweet >= 9);
// console.log(filteredApples);

// const mappedApples = filteredApples.map(apple => `이 사과는 ${apple.color}색이면서 당동는 ${apple.sweet}입니다.`);
// console.log(mappedApples);

const mappedApples = appleBasket
    .filter(apple => apple.color === 'green' && apple.sweet >= 9)
    .map(apple => `이 사과는 ${apple.color}색이면서 당도는 ${apple.sweet}입니다.`);
console.log(mappedApples);



// userList에서 서울사는 user들의 첫번째 취미만 배열에 모아서 리턴
// 서울사는 애들만 필터링해서, 첫번째 취미들만 배열에 모아줘
// 회원의 첫번째 취미는 xxx입니다.


userList // 프로퍼티 갯수 [{5}, {5}, {5}, {5}, {5}]
    .filter(user => user.address === '서울') // 프로퍼티 갯수 [{5}, {5}, {5}, {5}, {5}]
    .map(user => user.hobbys[0]) // ['', '', '']
    .forEach((hobby) => {
        console.log(`회원의 첫번째 취미는 ${hobby}입니다`)
    });


userList // 프로퍼티 갯수 [{5}, {5}, {5}, {5}, {5}]
    .filter(user => user.address === '서울') // 프로퍼티 갯수 [{5}, {5}, {5}, {5}, {5}]
    .map(user => ({
        firstHobby: user.hobbys[0],
        name: user.userName
    })) // [{2}, {2}, {2}]
    .forEach(info => {
        console.log(`${info.name}회원의 첫번째 취미는 ${info.firstHobby}입니다`)
    });



// 서울사는 애들 이름과 잡만 매핑
const mappedUserList2 = userList
    .filter(user => user.address === '서울')
    .map(user => `${user.address}에서 진행하는 나는 솔로 촬영! 각 그들의 직업은 ${user.job}`)
console.log(mappedUserList2);


// 취미가 2개이상인 애들의 어카운트만 주라
const mappedUserList3 = userList
    .filter(user => user.hobbys.length >= 2)
    .map(user => `${user.account}`)
console.log(mappedUserList3);


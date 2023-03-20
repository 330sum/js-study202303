// 객체 리터럴(값)
var dog = {
    // 프로퍼티 작성
    'name': '뽀삐',
    kind: '진돗개',
    age: 3,
    'for waiting': 11,
    injection: true,
    favorite: ['산책', '간식'],
    hate: null,

    playWithChild: function () {}
};

var cat = {
    'name': '콩순이',
    age: 2,
    injection: true,
    favorite: ['낮잠자기', '방어지럽히기'],
    kind: '블랙러시안'
};

console.log(typeof dog);
console.log(typeof cat);

// 객체에 저장된 데이터 참조
//참조 연산자 사용
console.log(dog.name);
console.log(cat.age);
console.log(cat.favorite);
console.log(dog.favorite[0]);

//dog.favorite - cat.age; // 배열 - 숫자 (사용불가)
//dog.age - cat.age; // 숫자 - 숫자 (사용가능)
dog.favorite.push('꼬리흔들기'); //favorite이 배열이기 때문에 배열함수 사용가능
console.log(dog);

//cat.kind.splice(1,1); //kind가 문자열이기 때문에 배열함수 사용불가

dog.favorite.slice(1).splice(1, 1);
//favorite이 배열인데, slice가 사본배열을 주고, 그 사본배열에서 splice하니까 사용가능! (메서드 체이닝)


console.log('===================================================');
// 프로퍼티 참조 2
console.log(dog.injection);
console.log(dog['injection']); // 프로퍼티의 키만 쓸 경우, 반드시 따옴표를 써야함!!!!!!!!!
// 바로 키를 참조할 때는 따옴표 o

// key를 변수에 저장
var fv = 'favorite';
console.log(cat.fv); //undefined
console.log(cat[fv]); //['낮잠자기', '방어지럽히기']
// 변수를 참조할 때는 따옴표 x 



console.log('===================================================');
// 프로퍼티 값 수정
dog.age = 4;
cat.favorite[1] = '실뭉치';

dog['injection'] = false;
console.log(dog);



console.log('===================================================');
// 프로퍼티 동적 추가
cat.owner = '김철수'; // 추가
cat.owner = '홍순구'; // 수정
console.log(cat);




console.log('===================================================');
// 프로퍼티 삭제
delete cat.owner;
console.log(cat);



console.log('===================================================');
// 프로퍼티 존재 유무 확인
// 수정할 때, 있는지 없는지 확인하고 수정하기 (없으면 바로 추가되니까 주의하기)
//주의사항! key를 반드시 문자열로 표기해야 함
var ageFlag = 'age' in cat;
console.log(ageFlag); //true

var ageFlag = 'age123' in cat;
console.log(ageFlag); //false


//master라는 프로퍼티가 없으면 추가해라
if (!('master' in cat)) {
    cat['master'] = '김또또';
}

var m = 'master';
if (!(m in cat)) {
    cat[m] = '김또또';
}




console.log('=================================================================');
// 객체를 순회하는 반복문
// key를 반복해서 추출해줌 (key 반복 순회)
for (var k in dog) {
    console.log(k);
}


for (var k in dog) {
    console.log(dog.k); // 벨류 참조가 안됨
}


for (var k in dog) {
    console.log(typeof k); // 왜? string이기 때문에 
}

// for (var k in dog) {
//     console.log(dog.'name'); // 이렇게 참조 되는 거랑 똑같음. 그래서 꼭 대괄호!
// }

// value를 반복해서 추출 (value 반복 순회)
for (var k in dog) {
    console.log(dog[k]); 
}




console.log('=================================================================');
//객체의 중첩구조
//예시 : 게시판

var articles = {
    totalCount: 25578,  //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [ // 게시물 목록 //배열안에 객체가 나열되어 있는 구조
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀',  //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07' //작성일자
        }, //0번 인덱스
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로',  //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06' //작성일자
        },  //1번 인덱스
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자',  //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05' //작성일자
        } // 2번인덱스
    ]
};

//총 게시물수 구하고 싶을 때
console.log(articles.totalCount);
// 게시물 목록 보고 싶을 때
console.log(articles.articleList);
// 2번째 게시물 목록
console.log(articles.articleList[1]); //totalCount 배열 , totalCount[1] 객체
// 2번째 게시물의 작성자
console.log(articles.articleList[1].writer);
// 3번째 게시물의 작성일자
console.log(articles.articleList[2].regDate);

articles.articleList[0].push(); // 안됨 (객체니까)
articles.articleList.push(); // 됨 (배열이니까)
articles.push(); // 안됨 (객체니까)


// . . . 너무 많아서 아래 처럼 사용 가능
var bbs = articles.articleList;
bbs[0].writer;


for (var x ?? articles) { //in (객체니까) //키의 개수만큼 회전(4번 순회)

}
for (var y ?? bbs) { //of (배열이니까) // 3번 순회 (bbs의 length가 3이니까)
    
}

var cnt = 0;
for (var x in articles.articleList[0]) {  // 7번 순회
    console.log(`${cnt++}!!`);
}
console.log(cnt);



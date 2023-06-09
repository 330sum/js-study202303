function add(n1, n2) {
    var result = n1 + n2;
    return result; // 탈출문

    console.log('메롱');
}

//반환값: 함수 호출 이후에 함수 밖으로 전달되는 값
var r1 = add(5, 7);

add(r1, r1 * 2); // add (12,24) 갱신안됨
add(r1, r1 *= 2); // 갱신됨

// 안쪽으로 쭉가서 실행. 같은 레벨끼리는 왼쪽부터 실행
var r2 = add(add(2, 3), add(add(3, 4), add(6, 2)));
console.log(`r2 : ${r2}`);


console.log('======================================================');
// 리턴이 없는 함수 (void 함수)
function multi(n1, n2) {
    var result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
}

// 리턴이 없는 함수는 변수에도 담지말고, 다른함수에 인수로도 전달하지 말아야 함
multi(10, 3);
// var r3 = multi(10, 3);
// add(r3, 10);
// console.log(`r3 : ${r3}`); //undefined

multi(add(4, 3), add(5, 5));

var r4 = add(multi(3, 2), 40);
console.log(`r4: ${r4}`); //NaN


console.log('======================================================');
// return 탈출문
function callName(nickName) {

    var prohibits = ['멍청이', '돌아이', '홍길동'];

    if (prohibits.includes(nickName)) {
        console.log(`잘못된 닉네임은 인사를 못해줘 이놈아`);
        return; // break는 반복문에서만 사용
    }

    console.log(`${nickName}님 안녕하세요!`);
}

callName('돌아이');




function stopLoop() {

    while (true) {
        var flag = prompt('명령어를 입력하세요!');
        if (flag === '멈춰') {

            // 함수안에 있는 반복문을 break와 return으로 종료할 수 있음. (두가지 경우의 차이점 확인하기!) 
            break; // 반복문 종료
            //return; // 반복문, 함수 종료 (더 강력함)

        }
        alert(flag);
    }
    alert('수고용~');
}

stopLoop();
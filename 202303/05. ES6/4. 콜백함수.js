// 정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수
function showEvenNumber(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) console.log(i);
    }
}
// showEvenNumber(10);



// 정수 n을 전달하면 1부터 n까지의 모든 홀수를 출력하는 함수
function showOddNumber(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) console.log(i);
    }
}
// showOddNumber(10);



// 짝수, 홀수 출력하는 함수
function showOddOrEvenNumber(n, delim) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === delim) console.log(i);
    }
}
// showOddOrEvenNumber(10, 0);
// showOddOrEvenNumber(10, 1);



// 배수 출력하는 함수
function showMultipleNumber(n, multiNumber) {
    for (let i = 1; i <= n; i++) {
        if (i % multiNumber === 0) console.log(i);
    }
}

// 6의 배수이면서 12의 배수가 아닌것
// if의 코드만 통째로 바꿔서 가져다 끼우면 좋을텐데...
// function showNumber(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 6 === 0 && i % 12 !== 0) {
//             console.log(i);
//         } 
//     }
// }





function showNumber(n, code) {
    for (let i = 1; i <= n; i++) {
        if (code(i)) { //함수의 호출문
            console.log(i);
        }
    }
}


//showNumber(20, n % 3 === 0);
// n % 3 === 0
// 여기서 n 은 showNumber 함수의 지역변수이기 때문에
// 코드를 그냥 전달할 수 없음 (n을 못찾기때문)

// 그래서 코드를 함수에 감싸서 전달

// 어떻게 하면 함수에 감싸서 주지? 이름이없는 함수를 사용! (자바스크립트에서는 함수를 값으로 사용할 수 있음!)
showNumber(20, function (n) {
    return n % 3 === 0
});
showNumber(20, n => n % 3 === 0);


// 함수를 변수에 넣을 수 있음 (즉 이 이름없는 함수의 이름은 code)
const code = function (n) {
    return n % 3 === 0;
};
code(10); // code 함수 호출




function test(n) {
    return n % 5 === 0;
}

showNumber(30, test);






function showMessage(message, howTo) {
    // 공통기능
    document.body.style.background = 'gray';

    setTimeout(() => {
        // 개별기능
        howTo(message);

        // 공통기능
        alert('하하호호!');

    }, 500);
}

showMessage('메롱메롱', function (m) {
    const answer = prompt(m);
    if (answer === '즐')
        alert('반사!');
    else 
        alert('뭐냐~~');

});
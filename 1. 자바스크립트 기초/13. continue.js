for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) break;
    console.log(i);
}
console.log('반복문 종료!');
console.log('============================');



for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}
console.log('반복문 종료!');
console.log('============================');



while (true) {
    var n = +prompt('숫자를 입력!!');

    if (n === 0) break;         // 0 입력하면 종료
    else if (n === 1) continue; // 1 입력하면 아래의 메롱메롱이 skip 되고 prompt 계속 뜸 (반복유지)

    alert('메롱메롱~');
}
alert('끝났지롱~~');
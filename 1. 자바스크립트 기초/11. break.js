// 50000번의 루프 중 1~10사이의 랜덤 숫자 중 3이 나오면 반복을 중간에 멈추고 싶다

// for (var i = 0; i < 50000; i++) {
//     var rn = Math.floor(Math.random() * 10) + 1; // random number
//     console.log(rn);
//     if (rn === 3) {
//         console.log(`반복문 종료 : ${i}`);
//         break;
//     }
//     console.log('메롱');
//     console.log('메롱');
// }

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        console.log(`[${i}, ${j}]`);
    }
}
console.log('=========================');



for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        if (i === j) {
            break;
        }
        console.log(`[${i}, ${j}]`);
    }
}
console.log('=========================');



outer: for (var i = 0; i < 3; i++) {
    inner: for (var j = 0; j < 2; j++) {
        if (i === j) {
            break inner; //outer 쓰면 0,0 되서 바로 break 되서 아무것도 안나옴
            // break 옆에 아무것도 안 적을 시, 가까운 라벨에 지정됨
        }
        console.log(`[${i}, ${j}]`);
    }
}
console.log('=========================');
// 구구단 3단 출력

// var line = 1;
// while (line <= 9) {
//     console.log(`3 x ${line} = ${3 * line}`);
//     line++;
// }



// for (var line = 1; line<=9; line++) {
//     console.log(`3 x ${line} = ${3 * line}`);
// }
//console.log('=============================================');



// var level = 2;

// for (var line = 1; line<=9; line++) {
//     console.log(`${level} x ${line} = ${level * line}`);
// }

// console.log('=============================================');




for (var level = 2; level <= 9; level++) {

    for (var line = 1; line <= 9; line++) {
        console.log(`${level} x ${line} = ${level * line}`);
    }
    console.log('==============');
}

console.log('=============================================');



var x = 1;
for (var i = 0; i < 3; i++) {
    //console.log(); //3바퀴
    for (var j = 0; j < 4; j++) {
        console.log(`hello${x++}`); //12바퀴
    }
    //console.log(); //3바퀴
}

console.log('=============================================');



var x = 1;
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
        for (var k = 0; k < 2; k++) {
            console.log(`hello${x++}`); //24바퀴
        }
    }
    //console.log(); //3바퀴
}

console.log('=============================================');
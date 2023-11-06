// 1. 한 변의 길이를 입력받는다.
//var length = 5;
var length = +prompt('한 변의 길이는?');

var star = ``;

// 2. 
for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
        star += `* `;
    }
    star += '\n';
}
//console.log(star);
alert(star);


// console.log('========================================');


// var star ='*'
// for (var i =0; i<3; i++) {
//     console.log(star);
// }


// console.log('========================================');


// var star =''
// for (var i =0; i<3; i++) {
//     star += '*';
// }
// console.log(star);


// console.log('========================================');


// var star =''
// for (var i =0; i<3; i++) {
//     star += '*';
//     console.log(star);
// }

var foodList = ['짜장면', '짬뽕'];
foodList[2] = foodList[0];
foodList[0] = foodList[1];
foodList[1] = foodList[2];
console.log(foodList);

var array = ['짜장면', '짬뽕', '볶음밥', '탕수육', '군만두'];
var left = 0;
var right = array.length-1;

while (left<right){
    var temp = array[left];
    array[left] = array[right];
    array[right] = temp;

    left++;
    right--;
}
console.log(array);

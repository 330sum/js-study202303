// <div id='box'>
//   <input id='abc' class='zzz xxx vvv' type='text'>
// </div

let box, input;

box = {
    tagName: 'div',
    attributes: {
        id: 'box'
    },
    children: [input],
    // parentNode: document.body
        // node.JS에서는 브라우저를 못씀
};

input = {
    tagName: 'input',
    attributes: {
        id: 'abc',
        classList: ['zzz', 'xxx', 'vvv'],
        type: 'text'
    },
    parentNode: box
};


console.log(input);
console.log(input.parentNode);
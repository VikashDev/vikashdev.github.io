console.log('app.js loaded in ');
let buttons = document.querySelectorAll('.btn');
console.log(buttons);

let resultBox = document.getElementById('result');


 buttons[0].addEventListener('click', (e) => {
        e.preventDefault() ;
         resultBox.value +=  buttons[0].value;
     });

buttons[1].addEventListener('click', () => {
        resultBox.value = buttons[1].value;
});

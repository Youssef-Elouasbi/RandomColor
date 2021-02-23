const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const main = document.querySelector('main');
let firstNumber,
    secondNumber,
    thirdNumber;

btn.addEventListener('click', function(){
    firstNumber = Math.floor(Math.random() * 254) + 1;
    secondNumber = Math.floor(Math.random() * 254) + 1;
    thirdNumber = Math.floor(Math.random() * 254) + 1;
    main.style.backgroundColor = `rgb(255,255,255)`;
    main.style.backgroundColor = `rgb(${firstNumber}, ${secondNumber}, ${thirdNumber})`;
    console.log(`${firstNumber}, ${secondNumber}, ${thirdNumber}`)
});


btn2.addEventListener('click', function(){
    let bg;
    bg = `rgb(${firstNumber}, ${secondNumber}, ${thirdNumber})`;
    alert(bg);
})
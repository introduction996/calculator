// this is gonna get real messy cuz at this moment that im writing this comment i dont have all the logic figured out
function operate(sign, first, second) {
    switch (sign) {
        case 'plus':
            return first + second
        case 'minus':
            return first-second
        case 'divide':
            return first/second
        case 'multiply':
            return first*second
    }
}

let currentOperation;
let firstNumber, secondNumber;

let doClear = false;
let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (display.textContent.length == 13) {return}
        if (display.textContent == '' && number.textContent == 0) {return}
        if (doClear) {display.textContent = ''}
        display.textContent += number.textContent

        // visually divide the number on screen for better readability
        let numberLength = display.textContent.split('');
        for (let i = 0; i <= numberLength.length - 1; i++) {
            if (numberLength[i] == '\'') {
                numberLength.splice(i, 1);
            }
        }

        for (let i = numberLength.length - 3; i > 0; i -= 3) {
            numberLength.splice(i, 0, '\'')
        }

        display.textContent = numberLength.join('');

        console.log(display.textContent.length);

        doClear = false;
    })
})

// clear button
let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = '';
});


function cleanUp(string) {
    const no = string.split('');
    const yes = [];
    for (let i of no) {
        if (i != '\'') {yes.push(i)}
    }

    return parseInt(yes.join(''))
}


let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let equals = document.querySelector('.equals');
plus.addEventListener('click', () => {
    currentOperation = 'plus';
    doClear = true;

    firstNumber = cleanUp(display.textContent);
    console.log(firstNumber);
});

equals.addEventListener('click', () => {
    doClear = true;
    secondNumber = cleanUp(display.textContent);

    result = String(operate(currentOperation, firstNumber, secondNumber));
    resultArr = result.split('');
    for (let i = resultArr.length - 3; i > 0; i-=3) {
        resultArr.splice(i, 0, '\'');
    }
    display.textContent = resultArr.join('');
});
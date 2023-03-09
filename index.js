// this is a complete mess; i'm sorry if you wanted to read this code
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
        default:
            return null
    }
}

let currentOperation;
let firstNumber = 0;
let secondNumber = 'unselected';

let doClear = false;
let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (display.textContent.length == 13) {return}
        if (display.textContent == '' && number.textContent == 0) {return}
        if (doClear) {display.textContent = ''}
        display.textContent += parseInt(number.textContent)

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


let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = '';
    firstNumber = 0;
    secondNumber = 'unselected';
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
    if (!isNaN(firstNumber) && firstNumber != 0) {
        secondNumber = cleanUp(display.textContent);
    }
    if ( firstNumber == 0) {
        firstNumber = cleanUp(display.textContent);
    }

    if (secondNumber != 'unselected') {
        result = String(operate(currentOperation, firstNumber, secondNumber));
        resultArr = result.split('');
        for (let i = resultArr.length - 3; i > 0; i-=3) {
            resultArr.splice(i, 0, '\'');
        }
        let g = resultArr.join('') == 'NaN' || resultArr.join('') == 'und\'efi\'ned' ? '' : resultArr.join('');
        display.textContent = g;
        firstNumber = parseInt(g);
    }
});

minus.addEventListener('click', () => {
    currentOperation = 'minus';
    doClear = true;
    if (!isNaN(firstNumber) && firstNumber != 0) {
        secondNumber = cleanUp(display.textContent);
    }
    if ( firstNumber == 0) {
        firstNumber = cleanUp(display.textContent);
    }

    if (secondNumber != 'unselected') {
        result = String(operate(currentOperation, firstNumber, secondNumber));
        resultArr = result.split('');
        for (let i = resultArr.length - 3; i > 0; i-=3) {
            resultArr.splice(i, 0, '\'');
        }
        let g = resultArr.join('') == 'NaN' || resultArr.join('') == 'und\'efi\'ned' ? '' : resultArr.join('');
        display.textContent = g;
        firstNumber = parseInt(g);
    }
});

multiply.addEventListener('click', () => {
    currentOperation = 'multiply';
    doClear = true;
    if (!isNaN(firstNumber) && firstNumber != 0) {
        secondNumber = cleanUp(display.textContent);
    }
    if ( firstNumber == 0) {
        firstNumber = cleanUp(display.textContent);
    }
    if (secondNumber != 'unselected') {
        result = String(operate(currentOperation, firstNumber, secondNumber));
        resultArr = result.split('');
        for (let i = resultArr.length - 3; i > 0; i-=3) {
            resultArr.splice(i, 0, '\'');
        }
        let g = resultArr.join('') == 'NaN' || resultArr.join('') == 'und\'efi\'ned' ? '' : resultArr.join('');
        display.textContent = g;
        firstNumber = parseInt(g);
    }
});

divide.addEventListener('click', () => {
    currentOperation = 'divide';
    doClear = true;
    if (!isNaN(firstNumber) && firstNumber != 0) {
        secondNumber = cleanUp(display.textContent);
    }
    if ( firstNumber == 0) {
        firstNumber = cleanUp(display.textContent);
    }
    if (secondNumber != 'unselected') {
        if (secondNumber == 0) {
            display.textContent = 'cant divide by 0';
            currentOperation = null;
        } else {
            result = String(operate(currentOperation, firstNumber, secondNumber));
            let g;
            if (Number.isInteger(result)) {
                resultArr = result.split('');
                for (let i = resultArr.length - 3; i > 0; i-=3) {
                    resultArr.splice(i, 0, '\'');
                }
                g = resultArr.join('') == 'NaN' || resultArr.join('') == 'und\'efi\'ned' ? '' : resultArr.join('');
            } else {
                g = parseInt(g).toFixed(5);
            }

            display.textContent = g;
            firstNumber = parseInt(g);
        }
    }
})


equals.addEventListener('click', () => {
    doClear = true;
    secondNumber = cleanUp(display.textContent);

    result = String(operate(currentOperation, firstNumber, secondNumber));
    resultArr = result.split('');
    for (let i = resultArr.length - 3; i > 0; i-=3) {
        resultArr.splice(i, 0, '\'');
    }
    let g = resultArr.join('') == 'NaN' || resultArr.join('') == 'und\'efi\'ned' ? '' : resultArr.join('');

    if (secondNumber == 0 && currentOperation == 'divide') {
        display.textContent = 'cant divide by 0'
    } else {display.textContent = g}

    firstNumber = 0;
    secondNumber = 'unselected';
});
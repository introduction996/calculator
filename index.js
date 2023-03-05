// this is gonna get real messy cuz at this moment that im writing this comment i dont have all the logic figured out
function operate(sign, first, second) {
    +first;
    +second;
    switch (sign) {
        case '+':
            return first + second
        case '-':
            return first-second
        case '/':
            return first/second
        case '*':
            return first*second
    }
}

let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (display.textContent.length == 13) {return}
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

        console.log(display.textContent.length)
    })
})
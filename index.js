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
        if (display.textContent.length == 13) return
        display.textContent += number.textContent
    })
})
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
function getDisplay() {
    return document.getElementById('display');
}

function appendToDisplay(value) {
    let display = getDisplay();
    let lastChar = display.value.slice(-1);
    if (isOperator(lastChar) && isOperator(value)) {
        display.value = display.value.slice(0, -1) + value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    getDisplay().value = '';
}

function backspace() {
    let display = getDisplay();
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = getDisplay();
    try {
        let result = eval(display.value);
        if (!isFinite(result)) {
            throw new Error('Division by zero');
        }
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

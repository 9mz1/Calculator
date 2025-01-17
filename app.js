const display = document.querySelector("#display");
const smallDisplay = document.querySelector('#small-display');
const btnNum = document.querySelectorAll(".number");
const btnOperator = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear-btn");
const backspaceBtn = document.querySelector("#backspace-btn");
const equalsBtn = document.querySelector("#equals-btn");
const decimalBtn = document.querySelector("#decimal-btn");


let currentValue = '';
let previousValue = '';
let operator = '';
let result = '';
// let output = ''

function main() {
    function calculate() {
        let num1 = parseFloat(previousValue);
        let num2 = parseFloat(currentValue);

        if (operator ==='+') {
            result = Math.round((num1 + num2) * 100) / 100
        } else if (operator === '-') {
            result = Math.round((num1 - num2) * 100) / 100;
        } else if (operator === '*') {
            result = Math.round((result = num1 * num2) * 100) / 100
        } else if (operator === '/') {
            result = Math.round((result = num1 / num2) * 100) / 100
        } else if (operator === '%') {
            result = Math.round((result = num1 % num2) * 100) / 100
        }
        display.textContent = result.toString();
        currentValue = '';
        operator = null;
        previousValue = result.toString();
    }

    btnNum.forEach((btn) => {
        btn.addEventListener("click", () => {
            currentValue += btn.textContent;
            display.textContent = currentValue;
        
        })
    })

    btnOperator.forEach((btn) => {
        btn.addEventListener("click", () => {
            
            if (currentValue !== '' && previousValue !== '' && operator !== '') {
                    calculate();
            }else {
                previousValue = currentValue;
            }
            operator = btn.textContent;
            btn.style.backgroundColor = '#292929';
            smallDisplay.textContent = previousValue;
            currentValue = '';
        })
    })

    clearBtn.addEventListener("click", () => {
        display.textContent = "0";
        smallDisplay.textContent = "";
        currentValue = '';
        previousValue = '';
        decimalBtn.disabled = false;
    })

    backspaceBtn.addEventListener("click", () => {
        currentValue = currentValue.split("");
        currentValue.pop();
        currentValue = currentValue.join("");
        console.log(currentValue);
        if (currentValue.includes('.')) {
            decimalBtn.disabled = true;
        } else {
            decimalBtn.disabled = false;
        }
        
        display.textContent = currentValue;
        smallDisplay.textContent = "";
    })

    equalsBtn.addEventListener("click", () => {
        if (previousValue === '0' && operator === '/') {
            display.textContent = 'youre so dumb';
            currentValue = '';
            previousValue = '';
        } else {
            calculate();
            currentValue = '';
            previousValue = '';
        }
        decimalBtn.disabled = false;
    })

    decimalBtn.addEventListener("click", () => {
        if (!currentValue.includes('.') && currentValue !== '') {
            currentValue += decimalBtn.textContent;
            display.textContent = currentValue;
        } else {
            decimalBtn.disabled = true;
        }
    })
}

main();
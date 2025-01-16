display = document.querySelector("#display");
smallDisplay = document.querySelector('#small-display');
btnNum = document.querySelectorAll(".number");
btnOperator = document.querySelectorAll(".operator");
clearBtn = document.querySelector("#clear-btn");
equalsBtn = document.querySelector("#equals-btn");


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
            result =  num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            result = num1 / num2;
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
            smallDisplay.textContent = previousValue;
            currentValue = '';
        })
    })

    clearBtn.addEventListener("click", () => {
        display.textContent = "0";
        currentValue = '';
    })

    equalsBtn.addEventListener("click", () => {
        calculate();
    })
}

main();
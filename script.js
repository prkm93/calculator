const calculationSection = document.querySelector('.calculation');
const outputResults = document.querySelector('.output');


const buttonValues = document.querySelectorAll('button');

let currentScreenValue = '';
const numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operators = ['+', '-', '*', '/'];

outputResults.innerHTML = 0;

buttonValues.forEach(el => {
    el.addEventListener('click', function(e) {
        
        let value = e.target.value;

        // perform any operation , +,-, *, /
        if (operators.includes(value)) {

            currentScreenValue += value;
            calculationSection.innerHTML += value;
            outputResults.innerHTML = value;

        } else if (value === '=') {

            calculationSection.innerHTML += '=' + eval(currentScreenValue);
            outputResults.innerHTML = eval(currentScreenValue);

        } else if (value === 'AC') {

            currentScreenValue = '';
            calculationSection.innerHTML = currentScreenValue;
            outputResults.innerHTML = 0;

        } else {

            // keep appending numbers
            currentScreenValue += value;
            calculationSection.innerHTML += value;
            outputResults.innerHTML += value;

            let currentVal = outputResults.innerHTML;

            // if any operator is clicked, then it should only output next number to be operated with in output section or remove 0 when AC is clicked.
            if (currentVal.split("").filter(el => operators.includes(el)).length || currentVal[0] === "0") {
                var currentOutput = currentVal.substring(1, currentVal.length);
                outputResults.innerHTML = currentOutput;
            }

        }
    })
})

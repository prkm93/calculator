const calculationSection = document.querySelector('.calculation');
const outputResults = document.querySelector('.output');

const ac = document.querySelector('#calc-ac');
const acValue = document.querySelector('#calc-ac').getAttribute('value');

const operators = document.querySelectorAll('.calc-operations');
const numbers = document.querySelectorAll(".calc-num");

const buttonValues = document.querySelectorAll('button');

buttonValues.forEach(el => {
    el.addEventListener('click', function(e) {
        const value = e.target.value;

        if (value === "+") {
            printHistoryCalculation(value);
            
        } else if (value === '=') {

        } else if (value === 'AC') {
            calculationSection.innerHTML = '';
            outputResults.innerHTML = '0';
        }
    })
})

const formattedNumber = (num) => {
    return Number(num).toLocaleString('en');
}
 
const reverseNumberFormat = (num) => {
    return Number(num.replace(/,/g, '')); 
}

const printHistoryCalculation = (num) => { 

    calculationSection.innerHTML += num;
    outputResults.innerHTML += num;
}

// printHistoryCalculation("1927192712");

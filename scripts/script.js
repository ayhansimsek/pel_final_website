// Add Header and Footer to every html
import header from './header.js';
import footer from './footer.js';

document.getElementById('header-placeholder').innerHTML = header;
document.getElementById('footer-placeholder').innerHTML = footer;






//CCS calculator

function calculateSubsidy() {
    const incomeInput = document.querySelector('#income');
    const income = Number(incomeInput.value);
    let subsidyPercent;

    if (income <= 80000) {
        subsidyPercent = 90;
    } else if (income > 80000 && income < 530000) {
        subsidyPercent = 90 - Math.ceil((income - 80000) / 5000);
        subsidyPercent = Math.max(subsidyPercent, 0); // it shoudnt go below 0%
    } else {
        subsidyPercent = 0;
    }

    const resultElement = document.querySelector('#result');
    resultElement.textContent = `Your Childcare Subsidy is: ${subsidyPercent}%`;
}


document.querySelector('button').addEventListener('click', calculateSubsidy);  // Event listener for the button click
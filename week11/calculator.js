const sevenDiv = document.getElementById('seven');
const eightDiv = document.getElementById('eight');
const nineDiv = document.getElementById('nine');
const fourDiv = document.getElementById('four');
const fiveDiv = document.getElementById('five');
const sixDiv = document.getElementById('six');
const oneDiv = document.getElementById('one');
const twoDiv = document.getElementById('two');
const threeDiv = document.getElementById('three');
const zeroDiv = document.getElementById ('zero');
const pointDiv = document.getElementById ('point');
const acDiv = document.getElementById ('ac');
const plusMinusDiv = document.getElementById ('plus-minus');
const percentDiv = document.getElementById ('percent');
const equalDiv = document.getElementById ('equal');
const addDiv = document.getElementById ('add');
const subtractDiv = document.getElementById ('subtract');
const multiplyDiv = document.getElementById ('multiply');
const divisionDiv = document.getElementById ('division');
const infoInput = document.getElementById('result');

let hasDecimal = false;

sevenDiv.addEventListener('click', function () {
  const existingValue = infoInput.value;
  const newValue = sevenDiv.textContent;
  infoInput.value = existingValue + newValue;
});

eightDiv.addEventListener('click', function () {
  const existingValue = infoInput.value;
  const newValue = eightDiv.textContent;
  infoInput.value = existingValue + newValue;
});

nineDiv.addEventListener('click', function () {
  const existingValue = infoInput.value;
  const newValue = nineDiv.textContent;
  infoInput.value = existingValue + newValue;
});

fourDiv.addEventListener('click', function () {
    const existingValue = infoInput.value;
    const newValue = fourDiv.textContent;
    infoInput.value = existingValue + newValue;
});

fiveDiv.addEventListener('click', function () {
    const existingValue = infoInput.value;
    const newValue = fiveDiv.textContent;
    infoInput.value = existingValue + newValue;
});

sixDiv.addEventListener('click', function () {
    const existingValue = infoInput.value;
    const newValue = sixDiv.textContent;
    infoInput.value = existingValue + newValue;
});

oneDiv.addEventListener('click', function () {
    const existingValue = infoInput.value;
    const newValue = oneDiv.textContent;
    infoInput.value = existingValue + newValue;
});

twoDiv.addEventListener('click', function () {
    const existingValue = infoInput.value;
    const newValue = twoDiv.textContent;
    infoInput.value = existingValue + newValue;
});

threeDiv.addEventListener('click', function () {
    const existingValue = infoInput.value;
    const newValue = threeDiv.textContent;
    infoInput.value = existingValue + newValue;
});

zeroDiv.addEventListener('click', function () {
    const existingValue = infoInput.value;
    const newValue = zeroDiv.textContent;
    if (hasDecimal || existingValue !== '') {
        infoInput.value = existingValue + newValue;
    } else if (existingValue === '' || existingValue === '0') {
        infoInput.value = '0.';
        hasDecimal = true;
    }
});

pointDiv.addEventListener ('click', function () {
    const existingValue = infoInput.value;
    const newValue = pointDiv.textContent;
    if (!hasDecimal) {
        infoInput.value = existingValue + newValue;
        hasDecimal = true;
    }
});

acDiv.addEventListener ('click', function () {
    infoInput.value = '';
});

plusMinusDiv.addEventListener ('click', function () {
    const existingValue = parseFloat(infoInput.value);
    const oppositeValue = -existingValue;
    infoInput.value = oppositeValue;
});

percentDiv.addEventListener ('click', function () {
    const existingValue = parseFloat(infoInput.value);
    const percentageValue = existingValue / 100;
    infoInput.value = `${percentageValue.toFixed(2)}`;
});

addDiv.addEventListener ('click', function () {
    const existingValue = infoInput.value;
    const newValue = addDiv.textContent;
    infoInput.value = existingValue + newValue;
});

subtractDiv.addEventListener ('click', function () {
    const existingValue = infoInput.value;
    const newValue = subtractDiv.textContent;
    infoInput.value = existingValue + newValue;
});

multiplyDiv.addEventListener('click', function () {
    const existingValue = infoInput.value;
    const newValue = multiplyDiv.textContent;
    infoInput.value = existingValue + newValue;
});

divisionDiv.addEventListener('click', function () {
    const existingValue = infoInput.value;
    const newValue = divisionDiv.textContent;
    infoInput.value = existingValue + newValue;
});

equalDiv.addEventListener ('click', function() {
    try {
        const expression = infoInput.value;
        const result = calculateExpression(expression);
        infoInput.value = result;
    } catch (error) {
        infoInput.value = 'Error-;'
    }
});

function calculateExpression(expression) {
    const tokens = expression.split(/([+*/-])/).map(token => token.trim());
    let total = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const operand = parseFloat(tokens[i + 1]);
        switch (operator) {
            case '+':
                total += operand;
                break;
            case '-':
                total -= operand;
                break;
            case '*':
                total *= operand;
                break;
            case '/':
                total /= operand;
                break;
        }
    }
    return total;
}
/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    
    return number1 + number2;
  }

function addNumbers() {
    
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    
    
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
 document.querySelector('#addNumbers').addEventListener('click', addNumbers);


const subtract = function(number1, number2) {
    return number1 - number2;
  };
  

  const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  

  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  let multiplyNumber1 = Number(document.querySelector('#factor1').value);
  let multiplyNumber2 = Number(document.querySelector('#factor2').value);

  document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
  }
  
  function divideNumbers() {
    let divideDividend = Number(document.querySelector('#dividend').value);
    let divideDivisor = Number(document.querySelector('#divisor').value);
  
    document.querySelector('#quotient').value = divide(divideDividend, divideDivisor);
  }
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    // Get the numeric value entered by the user in the subtotal field
    let subtotal = Number(document.querySelector('#subtotal').value);
  
    // Check if the membership checkbox has been checked to apply a 20% discount
    let isMember = document.querySelector('#member').checked;
    let discount = isMember ? 0.2 : 0;
  
    // Calculate the total after applying the discount
    let total = subtotal - (subtotal * discount);
  
    // Output the total to the 'total' span with two decimals using a template string
    document.querySelector('#total').innerHTML = `$${total.toFixed(2)}`;
  });
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
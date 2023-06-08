// business logic
function add(number1, number2) {
    return number1 + number2;
  }

function subtract(number1, number2) {
    return number1 - number2;
  }

  function multiply(number1, number2) {
    return number1 * number2;
  }

function divide(number1, number2) {
    return number1 / number2;
  }


  
  // user interface logic 
  const number1 = parseInt(prompt("Enter a number:"));
  const number2 = parseInt(prompt("Enter another number:"));
  const addNums = (add(number1, number2));
  const subNums = (subtract(number1, number2));
  const multNum = (multiply(number1, number2));
  const divNum = (divide(number1, number2));


const displayAdd = number1 + " plus " + number2 + " equals " + addNums + "\n";
const displaySub  = number1 + " minus " + number2 + " equals " + subNums + "\n";
const displayMul  = number1 + " multiply " + number2 + " equals " + multNum + "\n";
const displayDiv  = number1 + " minus " + number2 + " equals " + divNum + "\n";

//const displayDiv  = `${number1} - ${number2} = ${divNum} \n`;
  
  window.alert(displayAdd + displaySub + displayMul + displayDiv);


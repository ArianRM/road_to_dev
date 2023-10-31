let n1, n2, op;

// display text
let result = document.getElementById("display-text");

// Number buttons
let cero = document.getElementById("cero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

// Operations buttons
let divide = document.getElementById("divide");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let mult = document.getElementById("mult");
let equals = document.getElementById("equals");

// Funcional buttons
let clear = document.getElementById("clear");
let back = document.getElementById("back");

// add numbers
cero.onclick = () => {
  result.textContent += "0";
};

one.onclick = () => {
  result.textContent += "1";
};

two.onclick = () => {
  result.textContent += "2";
};

three.onclick = () => {
  result.textContent += "3";
};

four.onclick = () => {
  result.textContent += "4";
};

five.onclick = () => {
  result.textContent += "5";
};

six.onclick = () => {
  result.textContent += "6";
};

seven.onclick = () => {
  result.textContent += "7";
};

eight.onclick = () => {
  result.textContent += "8";
};

nine.onclick = () => {
  result.textContent += "9";
};

// clear and erase
clear.onclick = () => {
  result.textContent = " ";
};

back.onclick = () => {
  result.textContent = result.textContent.slice(0, -1);
};

// op functions

function clear_all() {
  result.textContent = " ";
}

minus.onclick = () => {
  n1 = result.textContent;
  op = "-";
  clear_all();
};

plus.onclick = () => {
  n1 = result.textContent;
  op = "+";
  clear_all();
};

divide.onclick = () => {
  n1 = result.textContent;
  op = "/";
  clear_all();
};

mult.onclick = () => {
  n1 = result.textContent;
  op = "*";
  clear_all();
};

equals.onclick = () => {
  n2 = result.textContent;
  result.textContent = getResult(op);
};

function getResult() {
  let res;
  switch (op) {
    case "-":
      res = parseInt(n1) - parseInt(n2);
      break;
    case "+":
      res = parseInt(n1) + parseInt(n2);
      break;
    case "/":
      res = parseInt(n1) / parseInt(n2);
      break;
    case "*":
      res = parseInt(n1) * parseInt(n2);
      break;
  }
  return res;
}

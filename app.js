let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operation = document.getElementById("operation");
const button = document.getElementById("button");
const result = document.getElementById("result");
button.addEventListener("click", function (e) {
  e.preventDefault();
});
button.addEventListener("click", calculas);

function calculas() {
  num1 = num1.value;
  num2 = num2.value;
  num1 = Number(num1);
  num2 = Number(num2);
  operation = operation.value;
  console.log(operation);
  console.log(num1, num2);
  if (operation == "") {
    alert("Choose an operation");
  } else {
    if (operation == "add") {
      var result1 = num1 + num2;
      result.style.display = "inline-block";
      result.innerHTML = result1;
    } else if (operation == "subteact") {
      var result1 = num1 - num2;
      result.style.display = "inline-block";
      result.innerHTML = result1;
    } else if (operation == "multiply") {
      var result1 = num1 * num2;
      result.style.display = "inline-block";
      result.innerHTML = result1;
    } else if (operation == "devide") {
      var result1 = num1 / num2;
      result.style.display = "inline-block";
      result.innerHTML = result1.toFixed(2);
    }
  }
}
let color = document.getElementById("color");

color.addEventListener("change", colorChange);
function colorChange() {
  color = color.value;
  console.log(color);
  document.getElementById("ColorWheelwrap").style.backgroundColor = color;
  document.getElementById("formhead").style.backgroundColor = color;
}

// This function clear all the values
function clearScreen() {
 document.getElementById("result").value = "";
}

// This function display values
function display(value) {
 document.getElementById("result").value += value;
 return value
}
// This function evaluates the expression and return result
function calculate() {
 var x = document.getElementById("result").value;
 var y = eval(x);
 document.getElementById("result").value = y
 return y
}

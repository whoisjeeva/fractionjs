var h1 = document.getElementsByTagName('h1')[0];
var num1 = 15, num2 = 0.015;

var jmath = new jMath(String(num1));
jmath.multiply(String(num2));

h1.innerHTML = "jMath: " + jmath.value;

console.log(jmath);
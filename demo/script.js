var h1 = document.getElementsByTagName('h1')[0];
var num1 = 7, num2 = 15;

var jmath = new jMath(String(num1));
jmath.pow(2);

h1.innerHTML = "jMath: " + jmath.value;

console.log();
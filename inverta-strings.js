function inverterString(str) {
  var stringInvertida = "";
  for (var i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }
  return stringInvertida;
}

var minhaString = "Hello, world!";
var minhaStringInvertida = inverterString(minhaString);
console.log(minhaStringInvertida); 

module.exports = function solveEquation(equation) {

  equation = equation.replace(/\s/g, "");

  var regExp = /([+-]?\d+)\*x\^2([+-]?\d+)\*x([+-]?\d+)/;
  var matchArr = equation.match(regExp);
  
  var a = matchArr[1];
	var b = matchArr[2];
  var c = matchArr[3];
 
  /*
	var parts = equation.split("*x^2");
  var a = parts[0];
	var b = parts[1].split("*x")[0];
  var c = parts[1].split("*x")[1];
  */

	var x1, x2;

	var d = Math.pow(b,2) - 4 * a * c;
	
	if(d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
	} else if(d == 0) {
		x1 = (-b) / (2 * a);
		x2 = x1;
  } 
      
  var resArr = [];
	resArr.push(Math.round(x1), Math.round(x2));
	resArr.sort(function(a, b) {
    return a - b
  });
	
	return resArr;
}

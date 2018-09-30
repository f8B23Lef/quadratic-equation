module.exports = function solveEquation(equation) {

  const regExp = /([+-]?\d+)\*x\^2([+-]?\d+)\*x([+-]?\d+)/;
  const matchArr = equation.replace(/\s/g, "").match(regExp);
  
  const a = matchArr[1];
  const b = matchArr[2];
  const c = matchArr[3];
 
  /*
	const parts = equation.split("*x^2");
  const a = parts[0];
	const b = parts[1].split("*x")[0];
  const c = parts[1].split("*x")[1];
  */

 let x1, x2;

 const d = Math.pow(b,2) - 4 * a * c;
	
  if(d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
  } else if(d == 0) {
    x1 = (-b) / (2 * a);
    x2 = x1;
  } 
      
  const resArr = [];
  resArr.push(Math.round(x1), Math.round(x2));
  resArr.sort((a, b) =>  a - b);
	
  return resArr;
}

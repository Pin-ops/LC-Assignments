


// section-6//
function math (num1, num2 , mathOperators) {
    if (mathOperators === "+") {
        return num1 + num2 ;
    }

    if (mathOperators === "-") {
        return num1 - num2 ;
    }

    if (mathOperators === "/") {
        return num1 / num2 ;
    }

    if (mathOperators === "*") {
        return num1 * num2 ;
    }

      return "Please write a valid Math Operators ( +, -, /, * )"
}
 
 var times = math(20,5,"*")
 console.log(times);
  
 var minus = math (523,156,"-")
 console.log(minus);
 
  var divide = math (72,8,"/")
 console.log(divide);
 
  var plus = math (84,390,"+")
 console.log(plus);
 
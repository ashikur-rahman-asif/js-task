//Task:5=> Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(number1, number2, operator) {
    const operations = {
      "+": function (a, b) {
        return a + b;
      },
      "-": function (a, b) {
        return a - b;
      },
      "*": function (a, b) {
        return a * b;
      },
      "/": function (a, b) {
        return a / b;
      },
    };
  
    if (typeof operations[operator] === "undefined") {
      throw new Error("Invalid operator");
    }
  
    return operations[operator](number1, number2);
  }
  
  
  console.log(calculator(10, 2, "/"))
  
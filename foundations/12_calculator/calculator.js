const add = function(a,b) {

  return a+b;
	
};

const subtract = function(a,b) {
	
  return a-b;
};

const sum = (...arr)=> arr.flat().reduce((sum,i)=> sum + Number(i),0);

const multiply = (arr)=> arr.reduce((mul,i)=> mul*i,1);

const power = function(a,b) {

  return a**b;

	
};

const factorial = function(num) {

  let fact=1;

  for(let i=num;i>=1;i--){

    fact = fact*i;
  }

  return fact;


	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

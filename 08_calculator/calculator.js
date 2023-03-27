const add = function(x,y) {
  return x+y;	
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(array) {
  let sum=0;
	for (let i=0;i<array.length;i++){
    sum+=array[i];
  }
  return sum;
};

const multiply = function(array) {
  let result=array[0];
	for (let i=1;i<array.length;i++){
    result*=array[i];
  }
  return result;
};

const power = function(x,y) {
	return Math.pow(x,y);
};

const factorial = function(x) {
	let result=1;
  for (let i=1;i<=x;i++){
    result*=i;
  }
  return result;
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

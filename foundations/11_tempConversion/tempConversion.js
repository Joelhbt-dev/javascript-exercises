const convertToCelsius = function(F) {

  C = (F-32)*5/9;
  
  if(Number.isInteger(C)){

    return C;
  }
  else{

  C = parseFloat(C.toFixed(1));
  return C;
  }


};

const convertToFahrenheit = function(C) {

  let F = (C * 9/5)+32;

  if(Number.isInteger(F)){

    return F;
  }

  else{

  F = parseFloat(F.toFixed(1));
  return F;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

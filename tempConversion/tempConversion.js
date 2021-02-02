const ftoc = function(tempF) {
  let tempC = (tempF - 32) * (5 / 9);
  
  if(Number.isInteger(tempC))
    return tempC;
  else
    return +tempC.toFixed(1);
}

const ctof = function(tempC) {
  let tempF = (tempC * (9 / 5)) + 32;
  
  if(Number.isInteger(tempF))
    return tempF;
  else
    return +tempF.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}

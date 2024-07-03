function sqrt(x) {
 function square(number) {
  // square the number
   return number*number;
  }

  function abs(number) {
  // absolute number
    return number>=0?number:-number;
  }

  function average(number1,number2) {
  // average the numbers
    return (number1+number2) / 2;
  }

  function improve(number) {
    // improve guess number
    return average(number,x/number);
  }

  function is_goodEnough(number) {
    return abs(square(number)-x) < 0.001;
  }

  function sqrtIter(number) {
    // loop iteration for improving number
    return is_goodEnough(number)? number : sqrtIter(improve(number));
  }

  return sqrtIter(1);
}

console.log(sqrt(2));

/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  // function product(factor_0, factor_1) {
  //   return factor_0 * factor_1;
  // }
  // console.log(product(10, 5));

  // var numToStr = product.toString();
  // console.log(product(10, 5) + " " + "is a " + typeof numToStr);

  // var strToArr = numToStr.split();
  // console.log(strToArr(10, 5));

  function isPalindrome(factor_0, factor_1) {
    var multiply = factor_0 * factor_1;
    var numToStr = multiply.toString();
    var strToArr = numToStr.split("");
    return strToArr;
  }

  console.log(isPalindrome(10, 50));




  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};
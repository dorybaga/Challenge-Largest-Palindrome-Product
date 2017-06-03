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
    var product = factor_0 * factor_1;
    var prodToStr = product.toString();
    var strToArr = prodToStr.split("");

    var leftArr = strToArr.slice(0, 2);
    var rightArr = strToArr.slice(2, strToArr.length);

    console.log("leftArr is " + leftArr);
    console.log("rightArr is " + rightArr);
  }

  console.log(isPalindrome(91, 99)); // undefined cuz not returning anything




  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};
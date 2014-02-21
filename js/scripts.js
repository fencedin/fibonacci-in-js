//Non-recursive fibonocci
var fibonacci = function(integer) {
  var positionOne = 0
  var positionTwo = 1
  var positionThree

  if (integer === 1) {
    return 0;
  }
  if (integer === 2) {
    return 1;
  }
  for (var i = 2; i < integer; i++) {
    positionThree = positionOne + positionTwo
    positionOne = positionTwo
    positionTwo = positionThree
  }
  return positionThree
}


//Recursive fibonocci
// var fibonacci = function(integer) {
//   if (integer === 1) {
//     return 0;
//   }
//   if (integer === 2) {
//     return 1;
//   }
//   return fibonacci(integer - 2) + fibonacci(integer - 1);
// }







$(document).ready(function() {
  $("form#factorial-number").submit(function(event) {
    var factNumber = $("input#factNumber").val();
    var result = fibonacci(factNumber);

    $(".result").text(result);
    
    $("#result").show();
    event.preventDefault();
  });
});

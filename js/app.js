/**
The program should print out each number (not 'one' for 1,
but 1 for 1), from 1 to 100, replacing numbers divisible by both
3 and 5 with "fizz buzz", those divisible by 3 with "fizz",
and those divisible by 5 with "buzz".
 **/
function printResult(i) {
  $('body').append('<p>' + i +'</p>')
}


$(document).ready(function() {
  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      printResult('fizz buzz')
    } else if (i % 3 === 0) {
      printResult('fizz')
    } else if (i % 5 === 0) {
      printResult('buzz')
    } else {
      printResult(i)
    }
  }
});

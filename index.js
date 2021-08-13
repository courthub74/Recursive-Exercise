//Recursion

//Countdown
function downtime(n) {
  if (n <= 0) {
    return n;
  }
  console.log(n);
  return downtime(n - 1);
}

console.log(downtime(5));

// Another Countdown
function countDown(j) {
  if (j === 0) return "I'm done";

  console.log(j);
  return countDown(j - 1);
}

console.log(countDown(5));

//Even Another Countdown
function countSous(q) {
  //Basic Condition (Base Case)
  if (q === 0) {
    console.log('Done Printing! ' + q);
  }
  //Printing Countdown Recursive....(Recursive Case)
  if (q > 0) {
    console.log(q);
    countSous(q - 1);
  }
}

countSous(5);

//Check is number is even

//function(parameter)
//if parameter % 2 == 0
//number is even

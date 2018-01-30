// Function declaration

  console.log(fullName('cherish','clark'));
  // console.log(otherFullName('cherish','clark'));
  // console.log(thirdFullName('cherish','clark'));

function fullName(first : string, last : string) : string {
  return first + " " + last;
}

// Function expression, javascript hoisting, means values can be 'hoisted up'.

var otherFullName : (first : string, last : string) => string;

otherFullName = function (first: string, last : string) {
  return first + " " + last;
}


var thirdFullName : (first : string, last : string) => string = function (first: string, last : string) {
  return first + " " + last;
  }


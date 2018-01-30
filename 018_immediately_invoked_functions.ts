// var names : string[] = ['Jordan', 'Cherish', 'Paul'];
// var counter : number = 0;

// (function() {
//   for (let name in names) {
//     counter++;
//   }
// })();
// console.log(counter);

// a function expression

var fullName : (first : string, last : string) => string;

fullName = function(first : string, last : string) {
  return first + " " + last;
}

console.log(fullName('chersh', 'clark'));

//  immediately invoked version

(function(first : string, last : string) {
  console.log(first + " " + last);
})('Cherish', 'Clark');
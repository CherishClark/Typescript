// var names : string[] = ['Jordan', 'Cherish', 'Paul'];
// var counter : number = 0;
// (function() {
//   for (let name in names) {
//     counter++;
//   }
// })();
// console.log(counter);
// a function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('chersh', 'clark'));
//  immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Cherish', 'Clark');
//# sourceMappingURL=018_immediately_invoked_functions.js.map
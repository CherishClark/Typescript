// functions have access to any public variables in the outerscope
// function nameFunction(name: string) : void {
//   var n : string = name; 
//   function printName(f, l) {
//     console.log(n);
//   }
//   printName();
// }
// nameFunction('Cherish');
//  *****
// the inner function maintain access to the outer scope even AFTER the values are returned
// function nameFunction(name: string){
//   var n : string = name; 
//    return function() {
//      console.log(n);
//    }
//  }
// var nameAgain = nameFunction('Paul');
// nameAgain();
// *********
function lineup() {
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = lineup();
console.log(batters.currentBatter());
(batters.nextBatter());
console.log(batters.currentBatter());
(batters.nextBatter());
console.log(batters.currentBatter());
//# sourceMappingURL=019_closures_introduction.js.map
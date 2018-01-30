var names : string[] = ['Jordan', 'Cherish', 'Paul'];
var counter : number = 0;

(function() {
  for (let name in names) {
    counter++;
  }
})();
console.log(counter);


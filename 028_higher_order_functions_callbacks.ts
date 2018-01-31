var dbQuery = function() : void {
  setTimeout(() => {
    console.log('Query results')
  }, 3000);
}

// a method taht takes in another method is known as higher-order function
// the function being passed in is the callback

function loadPage(q : () =>  void) {
  console.log("Header");
  q();
  console.log("sidebar");
  console.log("footer");
}

loadPage(dbQuery);
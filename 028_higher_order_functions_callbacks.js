var dbQuery = function () {
    setTimeout(function () {
        console.log('Query results');
    }, 3000);
};
// a method taht takes in another method is known as higher-order function
// the function being passed in is the callback
function loadPage(q) {
    console.log("Header");
    q();
    console.log("sidebar");
    console.log("footer");
}
loadPage(dbQuery);
//# sourceMappingURL=028_higher_order_functions_callbacks.js.map
// Only three variables in Typescript

// use camel case, declar type of variable, name of variable, :, datatype
// const means constant, tells program you do not want variable changed
// not allowed to REDEFINE a let statement, just reset the value. 
// var, you can change the value, but you need to keep same data type

// var fullName : string = "Cherish Clark";
// let paidAccount : boolean = true;
// const versionNumber : number = 1.3;


// fullName = "Danielle Clark";
// paidAccount = false;

// console.log(fullName);
// console.log(paidAccount);
// console.log(versionNumber);

// function printName(f, l) {
//   var greeting : string = "Hi there, ";
//   console.log(greeting + f + " " + l);

//    var greeting : string = "Howdy there, ";
//   console.log(greeting + f + " " + l);
// }

// printName("Cherish", "Clark");

// interpolation

var msg : string = "Danielle";
console.log("A message to my sister" + msg + "filled with text");
console.log(`A long message to ${msg} filled with text`);
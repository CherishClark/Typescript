// Boolean
let paidAccount : boolean = false;

// number
let age : number = 33;

//string
var fullName : string = "cherish "

// Array
var ages : number[] = [33, 28, 11];

// Tuple
// allows you to have an array/collection when you know the # of elements and their datatypes

let player : [number, string, number, number];
player = [3, 'Corerra', .333, 33];

// Enum
enum Stage {Approved, Pending, Rejected};
let job : Stage = Stage.Pending;

// Any
var apiData : any[] = [123, 'Jordan', false];

// Void
// use anytime you have a method that performs something but doesn't return a value 
function printOut(msg: string) : void {
  console.log(msg);
}
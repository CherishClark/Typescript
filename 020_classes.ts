// class Invoice {
//   companyProfile : string;

//   constructor(public name, public city, public state) {
//     this.companyProfile = name + ", " + city + ", " + state;
//   }
// }

// var googleInvoice = new Invoice('Google', 'Mountain View','State');
// var yahooInvoice  = new Invoice('Yahoo', 'SF','State');

// console.log(googleInvoice.companyProfile);
// console.log(yahooInvoice.companyProfile);


class Report {
  companyProfile : string;

  constructor(public name : string) {
    this.companyProfile = name;
  }
}

class Invoice extends Report {
  constructor(public name : string, public total : number) { super(name); } 
  printInvoice() {
    return this.name + ", " + this.total;
  }
}

class BillOfLading extends Report {
    constructor(public name : string, public city : string, public state : string) { super(name); } 

    printBol() {
    return this.name + ", " + this.city + ", " + this.state;
  }
}

var invoice = new Invoice('Google', 200);
var bol = new BillOfLading('Google', 'Scottsdale', 'AZ');

console.log(bol.printBol())
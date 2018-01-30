// // all requried arguments must be to the left, cannot be placed after optional arg. Defaults can be placed anywhere.

// function printAddress(street: string, streetTwo?: string, state = "AZ") {
//   console.log(street);
//   if (streetTwo) {  
//     console.log(streetTwo);
//   }
//   console.log(state);
// }

// printAddress("13722 s mt. cortina way");
// printAddress("13722 s mt. cortina way", "UT");

// splat argument (in typescript known as rest argument (an array of values))

function lineupCard(team: string, ...players: string[]) {
  console.log('Team: ' + team);
  for (let player of players) {
    console.log(player);
  }
}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');
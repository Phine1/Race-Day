let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegistered = false;
let runnerAge = 18;
if (runnerAge > 18 && earlyRegistered ===true) {
  raceNumber+= 1000;
};
if (runnerAge > 18 && earlyRegistered === true) {
  console.log(`Your registration number is ${raceNumber} Race start at 9:30 am. Thank You`)
} else if (runnerAge > 18 && earlyRegistered === false) {
  console.log(`You did not register early. Race number is ${raceNumber} and race start at 11:00am`)
} else if ( runnerAge<18) {
  console.log(`Here is your race number ${raceNumber}. Your race start at 12:30`)
} else {console.log("See the registration desk to verify your registration details")}

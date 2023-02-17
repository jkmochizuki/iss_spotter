const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  for (const item of passTimes) {
    const currentDate = new Date();
    console.log(`Next pass at ${currentDate} for ${item.duration} seconds!`);
  }
});
const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(passTimes) {
  for (const item of passTimes) {
    const date = (new Date(0));
    date.setUTCSeconds(item.risetime);
    console.log(`Next pass at ${date} for ${item.duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
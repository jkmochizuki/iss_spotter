const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// const ip = '23.16.74.109';
// fetchCoordsByIP(ip, (error, coordsByIP) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:' , coordsByIP);
// });

// const coords = {
//   latitude: '49.2827291',
//   longitude: '-123.1207375'
// };
// fetchISSFlyOverTimes(coords, (error, ISSFlyOverTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned ISS fly over times:' , ISSFlyOverTimes);
// });
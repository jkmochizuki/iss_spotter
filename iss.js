const request = require('request');

const fetchMyIP = function(callback) {
  request(`https://api.ipify.org?format=json`, 'utf8', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const myIP = JSON.parse(body)["ip"];
    callback(null, myIP);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const parsedBody = JSON.parse(body);
    if (!parsedBody.success) {
      const msg = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(msg), null);
      return;
    }
    const coordsByIP = {
      "latitude": parsedBody.latitude,
      "longitude": parsedBody.longitude
    };
    return callback(null, coordsByIP);
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};
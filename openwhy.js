// const OpenwhydAPI = require("openwhyd-api-client");
 
// const creds = {
//   email: "ameeniga2019@gmail.com", // email address or user handle of your openwhyd account
//    password: "85DB3EAE9058B55A791BEACAA20821E3" // md5 hash of your openwhyd password
// };
 
// const openwhydAPI = new OpenwhydAPI();
 
// openwhydAPI.login(creds.email, creds.password, function (err, res) {
//     openwhydAPI.get("openwhyd.org/adrien?format=json'", {}, function (err, user) {
//         console.log(user);
//         openwhydAPI.logout();
//     });
// });

const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
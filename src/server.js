const app = require("./app");
const https = require("https");
const fs = require("fs");

const port = 3001;

const certs = {
    key: fs.readFileSync("src/services/cert/ca_bundle.pem"),
    cert: fs.readFileSync("src/services/cert/certificate.pem"),
};

https.createServer(certs, app).listen(port, ()=>{
    console.log(`Listening on port ${port}`)
});
const express = require("express");
const fs = require("fs");
const bodyparser = require("body-parser");
const cors = require('cors');

const port = 4002;
const app = express();
const http = require("http");

let option = {
    pfx: fs.readFileSync('rp-onlinereg.pfx'),
    passphrase: '123'
};


const server = http.createServer(option , app)

server.listen(port, function(){
    console.log(`listening on port ${port}`);
});
    app.use(cors());
    app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./crud routers/crudroutes")(app);


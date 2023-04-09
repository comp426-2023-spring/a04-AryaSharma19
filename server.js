import { rps } from "./lib/rpsls.js";
import { rpsls } from "./lib/rpsls.js";
import minimist from "minimist";
import express from "express";
import bodyParser from "body-parser";

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

const app_endpoint = new RegExp("^\/app(|\/)$");
const rps_endpoint = new RegExp("^\/app\/rps(|\/)$");
const rpsls_endpoint = new RegExp("^\/app\/rpsls(|\/)$");
const rps_play_url_endpoint = /^\/app\/rps\/play\/shot=((r|R)ock|(p|P)aper|(s|S)cissors)(|\/)$/;
const rps_play_json_endpoint = /^\/app\/rps\/play\/{\"shot\"\:\"((r|R)ock|(p|P)aper|(s|S)cissors)\"}(|\/)$/
const rpsls_play_url_endpoint = /^\/app\/rpsls\/play\/shot=((r|R)ock|(p|P)aper|(s|S)cissors|(l|L)izard|(s|S)pock)(|\/)$/;
const rpsls_play_json_endpoint = /^\/app\/rpsls\/play\/{\"shot\"\:\"((r|R)ock|(p|P)aper|(s|S)cissors|(l|L)izard|(s|S)pock)\"}(|\/)$/
const rps_play_only_endpoint = /^\/app\/rps\/play\/((r|R)ock|(p|P)aper|(s|S)cissors)(|\/)$/;
const rpsls_play_only_endpoint = /^\/app\/rpsls\/play\/((r|R)ock|(p|P)aper|(s|S)cissors|(l|L)izard|(s|S)pock)(|\/)$/;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.post("/app/rps/play", (req, res) => {
    console.log(req.body);
});

app.post("/app/rpsls/play", (req, res) => {
    console.log(req.body);
});

app.get("*", (req, res) => {
    var path = req.path;
    if (app_endpoint.test(path)) {
        res.status(200).send("200 OK");
    
    } else if (rps_endpoint.test(path)) {
        res.send(JSON.stringify(rps()));
    
    } else if (rpsls_endpoint.test(path)) {
        res.send(JSON.stringify(rpsls()));
    } 
    else {
        res.status(400).send("404 NOT FOUND");
    }
});

app.listen(port);
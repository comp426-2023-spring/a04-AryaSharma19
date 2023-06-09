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
const rpsls_play_json_endpoint = /^\/app\/rpsls\/play\/{\"shot\"\:\"((r|R)ock|(p|P)aper|(s|S)cissors|(l|L)izard|(s|S)pock)\"}(|\/)$/;
const rps_play_only_endpoint = /^\/app\/rps\/play\/((r|R)ock|(p|P)aper|(s|S)cissors)(|\/)$/;
const rpsls_play_only_endpoint = /^\/app\/rpsls\/play\/((r|R)ock|(p|P)aper|(s|S)cissors|(l|L)izard|(s|S)pock)(|\/)$/;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/app/rps/play", (req, res) => {
    try {
        res.send(JSON.stringify(rps(req.body.shot)));
    }
    catch (e) {
        res.status(400).send("404 NOT FOUND");
    }
});

app.post("/app/rpsls/play", (req, res) => {
    try {
        res.send(JSON.stringify(rpsls(req.body.shot)));
    }
    catch (e) {
        res.status(400).send("404 NOT FOUND");
    }
});


app.get("/app/rps/play/", (req, res) => {
    try {
        res.send(JSON.stringify(rps(req.query.shot)));
    }
    catch (e) {
        res.status(400).send("404 NOT FOUND");
    }
});


app.get("/app/rpsls/play", (req, res) => {
    try {
        res.send(JSON.stringify(rpsls(req.query.shot)));
    }
    catch (e) {
        res.status(400).send("404 NOT FOUND");
    }
});


app.get("*", (req, res) => {
    var path = req.path;
    if (app_endpoint.test(path)) {
        res.status(200).send("200 OK");
    
    } else if (rps_endpoint.test(path)) {
        res.send(JSON.stringify(rps()));
    
    } else if (rpsls_endpoint.test(path)) {
        res.send(JSON.stringify(rpsls()));

    } else if (rps_play_only_endpoint.test(path)) {
        path = path.replace("/app/rps/play/", "");
        path = path.replace("/", "");
        res.send(JSON.stringify(rps(path)));
    
    } else if (rpsls_play_only_endpoint.test(path)) {
        path = path.replace("/app/rpsls/play/", "");
        path = path.replace("/", "");
        res.send(JSON.stringify(rpsls(path)));
    
    } else {
        res.status(400).send("404 NOT FOUND");
    }
});

app.listen(port);
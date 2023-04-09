import { rps } from "./lib/rpsls.js";
import { rpsls } from "./lib/rpsls.js";
import minimist from "minimist";
import express from "express";

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

const app = express();



app.get("*", (req, res) => {
    console.log(req.path);
    res.status(200).send("200 OK");
});

app.listen(port);




import { rps } from "./lib/rpsls.js";
import { rpsls } from "./lib/rpsls.js";
import minimist from "minimist";
import express from "express";

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

const app = express();

app.get('/', (req, res) => {
    res.status(404).send("NOT FOUND");
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));




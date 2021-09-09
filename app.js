const express = require("express");
var helmet = require("helmet");

const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8081",
};
const app = express();
app.use(cors(corsOptions));
app.use(helmet());

const users = [
    { name: "toto", prenom: "prenom", login: "tada" },
    { name: "toto", prenom: "prenom", login: "tada" },
];

app.get("/users", function(req, res) {
    console.log(req);
    res.status(200).json(users);
});

app.get("/users/:name", function(req, res) {
    const name = req.params.name;
    console.log(name);
    const user = users.find((u) => u.name === name);
    res.status(200).json(user);
});

app.listen(8081, () => {
    console.log("Serveur started");
});
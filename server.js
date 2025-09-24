console.log('Web Serverni Boshlash');
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if(err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data)
    }
})

//1 Kirish/ MIDDLEWARE
app.use(express.static('public')); // DP  public ochiqlaydi
app.use(express.json()); // Midleware DP -> Rest API 
app.use(express.urlencoded({ extended: true }));


//2 Session

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success"});
});

app.get("/hello", function(req, res) {
    res.end(`<h1 style="background: yellowgreen">Hello World by Azamat</h1>`);
})
console.log("A");
app.get("/portfolio", (req, res) => {
    console.log("B");
    res.render("portfolio", { user: user });
});
console.log("C");

app.get("/", function(req, res) {
    res.render("reja");
})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running sucessfully on portal: ${PORT} http://localhost:${PORT}`);
})


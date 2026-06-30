const express = require("express");
const users = require("./MOCK_DATA.json");
const http = require("http");
const fs = require("fs");
const url = require("url");


const app = express();
const PORT = 8005;



// 1. HTML Render Route (For Browsers)
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    return res.send(html);
});

// 2. REST API Routes 

// GET All Users as JSON
app.get("/api/users", (req, res) => {
    return res.json(users);
});

// POST Route to Create a New User
app.post("/api/users", (req, res) => {
    // TODO: Create a new user
    return res.json({ status: "pending" });
});

// Grouped Routes handling a dynamic path parameter ':id'
app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        // TODO: Edit the user with ID
        return res.json({ status: "pending" });
    })
    .delete((req, res) => {
        // TODO: Delete the user with ID
        return res.json({ status: "pending" });
    });

    //connection server
    const myserver = http.createServer((req , res) =>{
    if (req.url === "/favicon.ico") return res.end();
    const log = `${new Date()}: ${req.url} New req rec.\n`
    const myurl = url.parse(req.url, true);
    console.log(myurl);
    fs.appendFile("log.txt" , log, (err, data) =>{
        const qp = myurl.query;
    });

} );       


// Start the Server
myserver.listen(PORT, () => {
    console.log(`Server started at Port: ${PORT}`);
});


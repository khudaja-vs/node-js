const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

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

// Start the Server
app.listen(PORT, () => {
    console.log(`Server started at Port: ${PORT}`);
});
const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connect");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter"); // Handles HTML Page rendering
const URL = require("./models/url");

const app = express();
const PORT = 8001;

// Connection
connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
    console.log("Mongodb connected")
);

// 1. Configure EJS View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // To support Form data parsing

// Routes
app.use("/url", urlRoute);
app.use("/", staticRoute); // Frontend View Router

// Dynamic ShortID Redirect Route
app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
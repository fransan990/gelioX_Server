require("dotenv/config");

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

require("./error-handling")(app);

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true
    })
);

module.exports = app;

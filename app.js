require("dotenv/config");

require("./db");

const express = require("express");

const app = express();
const cors = require('cors')

require("./config")(app);

// cors para el deploy en netlify en caso de probar en local comentar
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true
    })
);

const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

require("./error-handling")(app);

module.exports = app;

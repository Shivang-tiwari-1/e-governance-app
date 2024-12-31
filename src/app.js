const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const logger = require("./Utils/Logger");
const Authentication = require("./Route/Authenticayion.Route");
const { corsOptions } = require("./Constants/Constants");
const app = express();
const morganFormat = `:method :url :status :response-time ms`;

app.use(express.json());
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const parts = message.trim().split(" ");
        const logObject = {
          method: parts[0],
          url: parts[1],
          status: parts[2],
          responseTime: parts[3] + " " + parts[4],
          timestamp: new Date().toISOString(),
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);
app.use((req, res, next) => {
  console.log("Request Body:", req.body);
  next();
});
app.use(express.json({ limit: "32mb" }));
app.use(express.urlencoded({ extended: true, limit: "32mb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/authentication", Authentication);
module.exports = app;

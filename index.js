require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const { connectToMongo } = require("./src/db/Mongo.Db");

async function initialize() {
  await connectToMongo();
}

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;
server.listen(4000, async () => {
  await initialize();
  console.log(`Server is running on http://localhost:${4000}`);
});

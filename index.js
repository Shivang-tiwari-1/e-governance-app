require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const { connectToMongo } = require("./src/db/Mongo.Db");
const addon = require("./build/Release/addon");
async function initialize() {
  await connectToMongo();
}
const result = addon.add(10, 20);
console.log(`The result of addition is: ${result}`);
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;
server.listen(4000, async () => {
  await initialize();
  console.log(`Server is running on http://localhost:${4000}`);
});

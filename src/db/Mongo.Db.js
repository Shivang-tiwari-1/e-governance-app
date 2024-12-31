const mongoose = require("mongoose");
const { asyncHandler } = require("../Utils/AsyncHandler.Utils");

exports.connectToMongo = asyncHandler(async () => {
  const connectionInstance = await mongoose.connect(
    `${process.env.MONGO_URI}/${process.env.DB_NAME}`
  );

  console.log(`mongoose connected ${connectionInstance.connection.host}`);
});

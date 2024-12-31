const moment = require("moment/moment");

exports.cerateCurrentDate = () => {
  const currentDate = moment();
  return currentDate.format("YYYY-MM-DD");
};

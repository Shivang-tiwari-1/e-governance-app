exports.options = {
  httpOnly: true,
  secure: true,
  sameSite: "None",
};


exports.corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

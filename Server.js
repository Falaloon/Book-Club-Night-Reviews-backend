const express = require("express");
// const productRouter = require("./Routers/product");
const { readdirSync } = require("fs");
const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
//connect db
connectDB();

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParse.json({ limit: "10mb" }));

//อันนี้คือการเรียกใช้แบบไม่ต้องประกาศซ้ำ
// readdirSync("./Routers").map((r) => {
//   app.use("/api", require("./Routers/" + r));
// });

//นิยมท่านี้
app.use("/api", require("./Routers/product"));

app.get("/health", async (req, res) => {
  res.send("OK");
});

app.listen(5050, () => {
  console.log("Server is Running on port 5050");
});

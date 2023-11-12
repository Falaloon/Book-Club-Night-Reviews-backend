
const express = require("express");
// const productRouter = require("./Routers/product");
const { readdirSync } = require("fs");
const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");
const connectDB = require("./config/db");


const app = express();
//connect db
connectDB();

//middleware
app.use(morgan("dev"));
app.use(cors({origin: ["https://book-club-night-reviews-fontend.vercel.app/"],
credentials: true,}));
app.use(bodyParse.json({ limit: "10mb" }));

readdirSync("./Routers").map((r) => {
  app.use("/api", require("./Routers/" + r));
});

app.listen(5050, () => {
  console.log("Server is Running on port 5050");
});

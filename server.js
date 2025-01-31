const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// API
const userinfoApi = require("./api/userinfo");

// DB config
require("./libs/mongodb");

// Sever configsss
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: [      
      "https://hamie-game-telegram.vercel.app/"
    ]
  })
);

//api
app.use(userinfoApi);


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

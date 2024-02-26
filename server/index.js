const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./Router/user.js");
const employeeRoute = require("./Router/employee.js");
const fileRoute = require("./Router/file.js");
global.__basedir = __dirname;
/* CONFIGURATION */

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

/*ROUTES */

app.use("/user", userRoute);
app.use("/employee", employeeRoute);
app.use("/file", fileRoute);
/* MONGOOSE SETUP */

const PORT = process.env.PORT || 8080;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`${error} did not connect`);
  });

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");
var authRouter = require("./routes/auth");
var SignupRouter = require("./routes/usersignup");
// Post = require("./models/model.post");
const apiRouter = require("./routes/api.router");
city1 = require("./models/sample");
console.log(city1);
//cors
app.use(cors());

//bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
//Db Connection
const db = require("./config/db.config");
db.authenticate()
  .then(() => {
    console.log(" Db connected Successfully!");
  })
  .catch(err => {
    console.log(err);
  });
//Routes

app.use("/api", apiRouter);
app.use("/auth", authRouter);
app.use("/userSignup", SignupRouter);

//Port
const port = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;
if (ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "./client/bookmyticket_client/build"))
  );
  app.use((req, res) => {
    res.sendFile(
      path.join(__dirname, "./client/bookmyticket_client/build/index.html")
    );
  });
}
app.listen(port, () => {
  console.log(`Runnning on ${port}`);
});

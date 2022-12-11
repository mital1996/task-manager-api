const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const routerUser = require("./routers/user");
const routrTask = require("./routers/task");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routerUser);
app.use(routrTask);

app.listen(port, () => {
  console.log("Start server port on " + port);
});

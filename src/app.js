const express = require("express");
require("./db/mongoose");

const routerUser = require("./routers/user");
const routrTask = require("./routers/task");

const app = express();

app.use(express.json());
app.use(routerUser);
app.use(routrTask);

module.exports = app;

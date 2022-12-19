const app = require("./app");

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Start server port on " + port);
});

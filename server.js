const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./modules/router/router");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/", router);

app.listen(PORT, () => console.log(`Server is up at ${PORT}`));

const express = require("express");
const app = express();
const port = 3000;

app.use("/assets", express.static("web/public"));

app.use(express.static("web/views"));

app.listen(port, () => {
    console.log("Initializing Server");
});

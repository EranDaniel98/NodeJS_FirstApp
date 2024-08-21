const express = require("express");
const path = require("path");
const apiRoute = require("./routes/api");
const PORT = process.env.PORT || 3001

let app = express();
app.use(express.static('./build'));
app.use('/api', apiRoute)

// app.get("/", function (request, response) {});

app.listen(PORT, function () {
    console.log("Started application on port %d", PORT);
});

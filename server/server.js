const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001

let app = express();
app.use(express.static('./build'));

app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.get("/api/boxes", function (request, response) {
    const boxes = [
        { text: 1, color: "red" },
        { text: 2, color: "red" },
        { text: 3, color: "blue" },
        { text: 4, color: "blue" },
        { text: 5, color: "red" },
        { text: 6, color: "red" },
        { text: 7, color: "blue" },
        { text: 8, color: "blue" }
    ];
    response.json(boxes);
});

app.listen(PORT, function () {
    console.log("Started application on port %d", PORT);
});

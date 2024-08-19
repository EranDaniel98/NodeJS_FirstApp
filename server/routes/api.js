const express = require('express')
const router = express.Router()

router.get("/boxes", (request, response) => {
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

module.exports = router

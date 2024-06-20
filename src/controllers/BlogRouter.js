const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
    response.json({
        message: "Blog Router Homepage"
    });
});
router.get("/:id", (request, response, next) => {
    response.json({
        message: "Blog Router Homepage"
    });
});
router.post("/", (request, response, next) => {
    response.json({
        message: "Blog Router Homepage"
    });
});

router.put("/", (request, response, next) => {
    response.json({
        message: "Blog Router Homepage"
    });
});

router.delete("/", (request, response, next) => {
    response.json({
        message: "Blog Router Homepage"
    });
});
module.exports = router;

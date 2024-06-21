const express = require("express");
const { BlogModel } = require("../models/BlogModel");
const router = express.Router();

router.get("/", async (request, response, next) => {
    let result = await BlogModel.find({}).exec();
    response.json({
        message: "Blog Router Homepage",
        result: result
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

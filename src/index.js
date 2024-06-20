const { app } = require("./server.js");
const { databaseConnect } = require("./utlis/database.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started at port " + PORT);
    databaseConnect();
});

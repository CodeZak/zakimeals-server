const path = require("path");
require("dotenv").config();
require("./src/db/mongoose");

const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
const userRouter = require("./src/routers/user");
const orderRouter = require("./src/routers/order");
const mealRouter = require("./src/routers/meal");

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/orders", orderRouter); //
app.use(mealRouter);

app.use("/api", (req, res) => {
     res.send("Welcome to the server home page. after 15 s");
});

app.use((req, res) => {
    res.status(404).send("<h1>Page not found 404</h1>");
});

/* if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/build"));
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "..", "client", "build", "index.html")
        );
    });
} */

app.listen(port, () => {
    console.log(`server is live on port ${port}`);
});

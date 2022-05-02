const path = require("path");
const express = require("express");
const mainRouter = require("./routers/main-router")

const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(3000, ()=> {
 console.log("Se encendió el server");
});

app.use(mainRouter);
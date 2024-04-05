const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port =process.env.PORT || 5008;


app.listen(port,()=>{
    console.log(`App is live at ${port}`);
    console.log("Welcome");

});

console.log("Helllo From Index.js")
app.use(express.json());

app.use("/api",require("./router/apiRoute"))
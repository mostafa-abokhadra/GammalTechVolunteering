const express = require("express")
const app = express()
const path = require('path');

app.set("view engine", 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
const homeRoute = require("./routes/homoRoute") 

app.use('/', homeRoute)

app.listen(3000, () => {
    console.log("i'm listenting")
})
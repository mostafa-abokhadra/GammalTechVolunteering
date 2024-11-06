const express = require("express")
const app = express()

app.set("view engine", 'ejs')

const homeRoute = require("./routes/homoRoute") 

app.use('/', homeRoute)

app.listen(3000, () => {
    console.log("i'm listenting")
})
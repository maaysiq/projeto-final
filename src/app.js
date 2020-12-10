require('dotenv-safe').config();

const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb+srv://mayarasiqueira:Amor3105@cluster0.ij0na.mongodb.net/fundosImobiliarios?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true
})


let db = mongoose.connection;
db.on("error", console.log.bind(console, "connnection error:"))
db.once("open", function() {
  console.log("conexão feita com sucesso.")
})

const fundosImobiliarios = require("./routes/fundosImobiliariosRouter")
const index = require("./routes/index")

app.use(express.json()); 

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })

app.use("/", index)
app.use("/fundosimobiliarios", fundosImobiliarios)


module.exports = app
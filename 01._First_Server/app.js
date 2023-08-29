//import express
// const express = require("express")
//instantiate express
// const app = express();

const { request, response } = require("express")

const app = require("express")()


app.get("/", (req, res) => {
    res.send({data: "this is the first request handler"})
})

app.listen(8080)

// create a dog endpint that returns woof

app.get("/dogs", (req, res) => {
    res.send({ sound: "Woof" })
})

app.get("/dogs/:value/:id", (req, res) => {
    console.log(req.params.id)
    res.send()
})


let balance = 100
app.get("/wallet/:withdrawalAmount", (req, res) => {
      
const withdrawalAmount = req.params.withdrawalAmount
 
    if (balance < withdrawalAmount) {
        res.send({Message: "You can't withdraw. Nomore money left."})
    } else {
        balance -= withdrawalAmount
        res.send({Message: `You've withdraw ${withdrawalAmount}.`})
    }

})


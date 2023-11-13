const express = require('express')
const cors = require("cors")
const db = require('./DB')
const controler = require("./controllers/controllers")

const bodyParser = require('body-parser')


const app = express()


app.use(express.json())
app.use(cors())


const port = 3300


app.post('/', (req, res) =>{
    let data = req.body;
    controler.make_registration(data)
    res.sendStatus(200)
})


app.post('/list_reservation*', (req, res) =>{
    let data = req.body;
    controler.show_list(req.body)
    .then(result => res.send({list:result}))
    
})

app.listen(port, ()=>{
    console.log("work")
})

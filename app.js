const express = require('express')
const app = express()
const port = 3000
const middlewareForFood = require('./middlewares/middlewareForFood')
const menuRoute = require('./routes/menu')
var bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Menu is ready to list menu')
})

app.use('/menu', middlewareForFood, menuRoute)

app.listen(port, () => {
    console.log(`TodoAPP listening on port ${port}`)
})
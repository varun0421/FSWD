const express = require('express')
const database = require('./database/db')
const app = express()
const categoryRoutes = require('./routes/catRoutes')

app.use(express.json())

app.get('/', (req, res) => {
    try {
        console.log(document)
    } catch (error) {
        res.status (203).send(error.message)
    }    
})
app.listen(3001, () => {
    console.log("Listening at PORT 3001")
})
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.get('/hello/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}!`)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

module.exports = app;
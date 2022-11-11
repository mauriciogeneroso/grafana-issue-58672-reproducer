const express = require('express')
const responses = require('./api-responses.js')

const app = express()
const port = 3003

app.get('/api/health', (req, res) => {
    res.sendStatus(200)
})

app.get('/api/graph/fields', (req, res) => {
    res.send(responses.fields)
})

app.get('/api/graph/data', (req, res) => {
    let producer = req.query.query;

    if (producer === 'producer2') {
        res.send(responses.producer2)
    } else {
        res.send(responses.producer1)
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
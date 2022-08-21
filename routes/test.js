const express = require('express')
const dataRouter = express.Router()
const store = require('data-store')({ path: process.cwd() + '/mocks.json' })


dataRouter.post('/mock', (req, res) => {  
    try {
        JSON.parse(req.body.data);
    } catch (e) {
        return res.status(201).send("not a valid json")
    }
    store.set('data', req.body.data)
    return res.status(201).send(`you can call /test/mock to receive: ${req.body.data}`)
})


dataRouter.get('/', (req, res) => {  
    const mockResponse = store.get('data')  
    const jsonResponse = JSON.parse(mockResponse)
    return res.status(200).send(jsonResponse)
})


module.exports = dataRouter
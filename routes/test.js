const express = require('express')
const dataRouter = express.Router()
const store = require('data-store')({ path: process.cwd() + '/mocks.json' })


dataRouter.post('/mock', (req, res) => {  
    try {
        JSON.parse(req.body.data);
    } catch (e) {
        return res.status(201).send("not a valid json")
    }
    store.set(req.body.id, req.body.data)
    return res.status(201).send(`make get request to: https://mock-api-response.herokuapp.com/test/${req.body.id}`)
})


dataRouter.get('/:id', (req, res) => {  
    const mockResponse = store.get(req.params.id)  
    const jsonRes = mockResponse && JSON.parse(mockResponse)
    return mockResponse ? res.status(200).send(jsonRes) : res.send("no data")
})

dataRouter.delete('/:id', (req, res) => {  
    const mockResponse = store.get(req.params.id)  
    if(mockResponse){
        store.del(req.params.id)  
        return res.status(200).send("data deleted")
    }
    return null
})


module.exports = dataRouter
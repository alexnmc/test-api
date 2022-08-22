const express = require('express')
const dataRouter = express.Router()
const store = require('data-store')({ path: process.cwd() + '/mocks.json' })
const validator = require('validator');



dataRouter.post('/mock', (req, res) => {  
    const parsedData = validator.isJSON(req.body.data)
    if(parsedData){
        store.set(req.body.id, parsedData)
        return res.status(201).send(`make get request to: https://mock-api-response.herokuapp.com/test/${req.body.id}`)
    }else{
        return res.status(201).send('not a valid json')
    }
   
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
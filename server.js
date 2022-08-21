const express = require('express')
const app = express()
const PORT = 8000


app.use(express.json()) 


app.use("/test", require("./routes/test"))


app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT} sir!`)
})

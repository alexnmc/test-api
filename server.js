const express = require('express')
const app = express()
const PORT = 8000


app.use(express.json()) 


app.use("/test", require("./routes/test"))


app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});



app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT} sir!`)
})

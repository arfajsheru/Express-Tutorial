import express from "express"

const app = express();

const PORT = 4000

// middleware 
app.use(express.json())

app.get('/', (req, res) => {
    res.send("welcom to / server")
})

app.listen(PORT, () => {
    console.log(`server start http://localhost:${PORT}`)
})
import express from "express"
import { connectDb } from "./config/db.js";
import personRouter from "./routes/PersonRoutes.js";

const app = express();
await connectDb()
const PORT = 4000

// middleware 
app.use(express.json())

app.get('/', (req, res) => {
    res.send("welcom to / server")
})

// api end points
app.use('/api/person', personRouter)

app.listen(PORT, () => {
    console.log(`server start http://localhost:${PORT}`)
})
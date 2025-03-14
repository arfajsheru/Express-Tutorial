import express from "express"

const app = express();
app.use(express.json())

app.get("/", (req,res) => {
    res.send("Welcom to / server");
})



const PORT = 4000

app.listen(PORT, () => {
    console.log(`server running http://localhost:${PORT}`);
})
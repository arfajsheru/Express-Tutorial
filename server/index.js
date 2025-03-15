import express from "express"

const app = express();
app.use(express.json())
app.set('view engine', 'ejs')

app.get("/", (req,res) => {
    const userName = "Arfaj"
    const lastName = "Sheru"
    const collegename = "kirandevi saraf institute of complete learning"
    res.render('index', {userName, lastName, collegename})
})

const PORT = 4000

app.listen(PORT, () => {
    console.log(`server running http://localhost:${PORT}`);
})
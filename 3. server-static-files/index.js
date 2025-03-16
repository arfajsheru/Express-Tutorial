import express from "express"

const app = express();
app.use(express.json())

// using ejs in node js 
app.set('view engine', 'ejs')
app.get("/", (req,res) => {
    const userName = "Arfaj"
    const lastName = "Sheru"
    const collegename = "kirandevi saraf institute of complete learning"
    res.render('index', {userName, lastName, collegename})
})


// Express static file serving
app.use('/public',express.static('public'))
app.use('/images',express.static('images'))
// kuch files aisi hoti he jo client ko deni hoti he jo client serve kar sake but problem ye he ki hame isko bina server-sice processing me hame isko dikhan hota he to yahi kaam express ja karta he express.static() ka use karke 



const PORT = 4000

app.listen(PORT, () => {
    console.log(`server running http://localhost:${PORT}`);
})
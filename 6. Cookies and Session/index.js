import cookieParser from "cookie-parser";
import express from "express"
import session from "express-session";
const app = express();

const PORT = 4000

// middleware 
app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret:'sample-secre',
    resave:false,
    saveUninitialized:false
}))

app.get('/', (req, res) => {
    res.cookie('name', 'express-app') // ,{maxAge:2000} if agar muje time pe cookie ko remove karna he to maxage ka use kar sakte hu 
    res.send("welcom to / server")
})

app.get("/fetch", (req, res)  => {
    res.send("Api Called")
})

app.get('/remove-cookie', (req, res) =>{
    res.clearCookie('name') // clear cookie agar muje dynmically karna he to
    res.send("cookie clear")
})


app.get('/visit', (req, res) => {
    if(req.session.page_View) {
        req.session.page_View++;
        res.send(`you visited this page ${req.session.page_View} times`);
    }else {
        req.session.page_View = 1;
        res.send(req.session)
    }
})

app.get('/remove-visit', (req, res) => {
    req.session.destroy();
    res.send("Session destroy (Remove)")
})

app.listen(PORT, () => {
    console.log(`server start http://localhost:${PORT}`)
})
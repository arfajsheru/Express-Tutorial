import express from "express";

const app = express();

const PORT = 4000;

// Basic routing in express js
app.get("/", (req, res) => {
    res.send("Welcom to my firt node server")
})

app.get("/home", (req, res) => {
    res.send("Welcom to home page");
})

// Dynamic Routing for route parameter and multiple route parameter
//http://localhost:4000/user/50978024
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User id = ${userId}`)
})

//http://localhost:4000/product/Arfajsheru/542309
app.get("/product/:category/:id", (req,res) => {
    const {category, id} = req.params;
    res.send(`User Category: ${category}, User Id: ${id}`)
})

// Query Parameter and multiple query parameter
//http://localhost:4000/search?keword=47290
app.get("/search", (req, res) => {
    const keyword = req.query.keyword;
    res.send(`Searching for ${keyword}`)
})

//http://localhost:4000/searchmultiple?category=male&price=40000
app.get("/searchmultiple", (req, res) => {
    const {category, price } = req.query;
    res.send(`User Category: ${category}, Price: ${price}`)
})

app.listen(PORT, () => {
    console.log(`server running http://localhost:${PORT}`);
})
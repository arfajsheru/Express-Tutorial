import express from "express"
import { loginController, signupController } from "./controller.js";
import router from "./route.js";

// middleware 
const app = express();
app.use(express.json())

// / handler router
app.get("/", (req,res) => {
    res.send("Welcom to / server")
})

// http request 

app.post("/user",  (req,res) => {
    const {name , email} = req.body
    res.json({
        success: true,
        message: `User ${name} with email ${email} created successfully`
    })
}) 

app.put("/user/:id", (req, res) => {
    const userId = req.params.id;
    const {name, email} = req.body;
    res.json({
        success:true,
        message:`User ${userId} update to ${name}, ${email}`
    })
})

app.delete("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.json({
        success:true,
        message:`user with ID ${userId} deleted successfully`
    })
})

// Routing 
app.use("/user" ,router)

const PORT = 4000

app.use("/user", router)
app.listen(PORT, () => {
    console.log(`server running http://localhost:${PORT}`);
})
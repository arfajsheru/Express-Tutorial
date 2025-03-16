import express from "express"
import multer from "multer";

const storage = multer.diskStorage({
    destination:'upload',
    filename: (req,file,cb) => {
        cb(null, file.fieldname + '_' + Date.now() + file.originalname)
    }
})

const app = express();
const upload = multer({storage})
const PORT = 4000


//middleware express
app.use(express.urlencoded({extended:true}))
app.use(upload.single('image'))

app.get('/', (req, res) => {
    res.send("welcom to / server")
})


app.post('/form', (req, res) => {
    console.log(req.body)
    console.log(req.file)
    res.send("Form Recived")
})

app.listen(PORT, () => {
    console.log(`server start http://localhost:${PORT}`)
})




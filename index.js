import { scrapper } from "./controllers/scrapper.js";
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: '*',
}))

app.use(express.json({ limit: '50mb' }));

app.get("/", (req, res)=> res.send("Server running"))
app.post("/api/scrapper", scrapper)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    console.log(err);
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(5000, ()=>{
    console.log("server started")
})
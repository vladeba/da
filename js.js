import bodyParser from "body-parser";
import express  from "express";
import mongoose from "mongoose";
import path from "path";

const app = express()
const port = 3000
const dirname = path.resolve()
const start = async ()=>{
    app.use(express.static('views'))
    app.get('/', (req,res)=>{
        res.send('index')
    })
    app.listen(port, (req, res)=>{
        console.log(`${port}`);
    })
}
start()
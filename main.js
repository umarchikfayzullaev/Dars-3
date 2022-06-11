const express = require("express")
const uuid = require("uuid")
const cors = require("cors")
const paht = require("path")
const fs = require("fs")

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4001

// home
app.get("/", (req, res)=>{
    res.send("Home page")
})

//get users
app.get("/user", (req, res)=>{

    const content = fs.readFile(path.join(__dirname, "data.txt"), "utf-8", (err, data)=>{
        if(err){
            console.log(err);
        }else {
            return data
        }
    })
    

    const users = await JSON.parse(content)
    console.log(users);

    res.status(200).send(users)
})



app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT} `);
})
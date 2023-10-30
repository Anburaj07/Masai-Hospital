const express=require("express")
const app=express();
app.use(express.json());

require("dotenv").config()
const port=process.env.PORT;

const cors=require("cors");
const { connetion } = require("./db");
const { userRouter } = require("./routes/user.route");
const { doctorRouter } = require("./routes/doctor.route");

app.use(cors({
    origin:'*'
}))

app.use("/user",userRouter)
app.use("/doctors",doctorRouter)

app.get('/',(req,res)=>{
    res.status(200).send({msg:"Base Point"})
})

app.listen(port,async()=>{
    try {
        await connetion
        console.log("Connected to DB")
        console.log(`Server is running at ${port}`)
    } catch (error) {
        console.log("Error while connecting to DB")
        console.log(error)
    }
})
const express = require("express");
const { DoctorModel } = require("../models/doctor.model");
const { auth } = require("../middlewares/auth.middleware");
const doctorRouter=express.Router();

doctorRouter.use(auth)

doctorRouter.post('/appointments',async(req,res)=>{
    const payload=req.body;
    try {
        const doctor=new DoctorModel(payload);
        await doctor.save();
        res.status(200).json({msg:"A new Appoinment has been created!"})
    } catch (error) {
        res.status(400).json(error)
    }
})

doctorRouter.get("/",async(req,res)=>{
    const query=req.query;
    try {
        const doctors=await DoctorModel.find(query);
        res.status(200).json(doctors)
    } catch (error) {
        res.status(400).json({error})
    }
})

doctorRouter.patch("/edit/:id",async(req,res)=>{
    const {id}=req.params;
    const payload=req.body;
    try {
        const doctor= await DoctorModel.findById({_id:id})
        if(doctor){
            await DoctorModel.findByIdAndUpdate({_id:id},payload)
            res.status(200).json({msg:`Doctor with ${id} updated`})
        }
    } catch (error) {
        res.status(400).json({error})
    }
})

doctorRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const doctor= await DoctorModel.findById({_id:id})
        if(doctor){
            await DoctorModel.findByIdAndDelete({_id:id})
            res.status(200).json({msg:`Doctor with ${id} deleted`})
        }
    } catch (error) {
        res.status(400).json({error})
    }
})
module.exports={doctorRouter}
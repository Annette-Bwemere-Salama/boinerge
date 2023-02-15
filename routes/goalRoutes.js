// import express from "express";
import router from "express";
router.Router()

export const getGoals = async (req,res)=>{
    res.status(200).json({message: 'Get Goals'})
    console.log('GetGoals')
}


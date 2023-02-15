// import express from "express";
import router from "express";
router.Router()

export const getGoals = async (req,res)=>{
    res.status(200).json({message: 'Get Goals'})
    console.log('GetGoals')
}


export const postGoals = async (req,res)=>{
    res.status(200).json({message: 'Set Goals'})
    console.log('GetGoals')
}


export const putGoals = async (req,res)=>{
    res.status(200).json({message: `Update goal1 ${req.params.id}`})
    console.log('GetGoals')
}


export const deleteGoals = async (req,res)=>{
    // res.status(200).json({message: 'Delete Goals'})
    res.status(200).json({message: `delete goal1 ${req.params.id}`})
    console.log('GetGoals')
}




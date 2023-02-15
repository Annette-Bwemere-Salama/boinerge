// import express from "express";
import router from "express";
router.Router()

export const getGoals = async (req,res)=>{
    res.status(200).json({message: 'Get Goals'})
    console.log('GetGoals')
}


export const postGoals = async (req,res)=>{
    res.status(200).json({message: 'POST Goals'})
    console.log('GetGoals')
}


// export const getGoals = async (req,res)=>{
//     res.status(200).json({message: 'Get Goals'})
//     console.log('GetGoals')
// }


// export const getGoals = async (req,res)=>{
//     res.status(200).json({message: 'Get Goals'})
//     console.log('GetGoals')
// }




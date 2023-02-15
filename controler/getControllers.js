import router from "express";
router.Router()


//@desc  Update goals
//@route PUT /api/goals
//@access Private
export const getGoals = async (req,res)=>{
    res.status(200).json({message: 'Get Goals'})
    console.log('GetGoals')
}


export const postGoals = async (req,res)=>{
    res.status(200).json({message: 'Set Post Goals'})
    console.log('GetGoals')
}


export const upadateGoals = async (req,res)=>{
    res.status(200).json({message: `Update goal1 ${req.params.id}`})
    console.log('GetGoals')
}


export const deleteGoals = async (req,res)=>{
    res.status(200).json({message: `delete goal1 ${req.params.id}`})
    console.log('GetGoals')
}


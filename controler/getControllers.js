import router from "express";
router.Router()


//@desc  Update goals
//@route PUT /api/goals
//@access Private
export const getGoals = async (req,res)=>{
    
    try {
        if(req.body.test){
            res.status(200).json({message: ' Post Goals'})  
        }
    } catch (error) {
        if(!req.body.test){
                res.status(400).json({message: "Please Add a Test field"})
                console.log(error);
            }
        }
}


export const postGoals = async (req,res)=>{
    console.log(req.body);
    res.status(200).json({message: 'Set Post Goals'})
    console.log(req.body);


}


export const upadateGoals = async (req,res)=>{
    res.status(200).json({message: `Update goal1 ${req.params.id}`})
    console.log(req.body.params.id)

}


export const deleteGoals = async (req,res)=>{
    res.status(200).json({message: `delete goal1 ${req.params.id}`})
    console.log(req.body.params.id)

}


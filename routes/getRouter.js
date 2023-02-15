import  {getGoals, postGoals, upadateGoals, deleteGoals} from "../controler/getControllers";
import {Router} from "express";
const router = Router()


export const GoalgetPost = router.get('/', getGoals).post('/', postGoals);
// export const goalPost = router.post('/', postGoals);
export const goalPut = router.put('/:id', upadateGoals);
export const Goaldelete = router.delete('/:id', deleteGoals)

import  {getGoals, postGoals, upadateGoals, deleteGoals} from "../controler/getControllers";
import {Router} from "express";
const router = Router()


export const GoalgetPost = router.get('/', getGoals).post('/', postGoals);
export const goalUpdateAntDeleteId = router.put('/:id', upadateGoals).delete('/:id', deleteGoals);


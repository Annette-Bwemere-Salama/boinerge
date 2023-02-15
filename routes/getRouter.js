import  {getGoals, postGoals, putGoals, deleteGoals} from "../controler/getControllers";
import {Router} from "express";
const router = Router()


export const Goalget = router.get('/', getGoals);
export const goalPost = router.post('/', postGoals);
export const goalPut = router.put('/:id', putGoals);
export const Goaldelete = router.delete('/:id', deleteGoals)

import express from 'express'
import {getRealtionships,addRealtionships,deleteRealtionships} from '../controllers/relationship.js'
const router=express.Router()
router.get("/",getRealtionships)
router.post("/",addRealtionships)
router.delete("/",deleteRealtionships)
export default router
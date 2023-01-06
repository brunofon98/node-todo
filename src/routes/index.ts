import { Router } from "express";
import * as PageController from '../controllers/page.controller';

const router = Router();

router.get('/', PageController.home);
router.get('/addTask', PageController.addTask);
router.get('/editTask:id', PageController.editTask);
router.get('/delTask:id', PageController.delTask);
    



export default router;
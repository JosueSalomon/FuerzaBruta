import express from 'express';
import { CreateUser, Login } from '../Controller/user.controller'

const router = express.Router();

router.post('/registro', CreateUser);
router.post('/login', Login);

export default router;
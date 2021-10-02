import express from 'express';
const router = express.Router();

import { users, getUser,addUser, updateUser, deleteUser } from '../controllers/users.js';

router.get('/',users);

// add User to user Array
router.post('/', addUser);

// get User from user Array
router.get('/:id', getUser);

// delete User from user Array
router.delete('/:id', deleteUser);

// update the current user id
router.patch('/:id', updateUser);

export default router;
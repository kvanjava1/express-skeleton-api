import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.get('/show/users', userController.showUsers);
router.get('/show/view', userController.showView);

module.exports = router;

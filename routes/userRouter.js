const express = require('express');
const { userController } = require('../controller');
const router = express.Router();

router.post('/signup',userController.signup.post);
router.delete('/signout',userController.signout.delete);
router.post('/login',userController.login.post);
router.get('/logout',userController.logout.get);
router.get('/edit',userController.edit.get);
router.put('/edit',userController.edit.put);
router.put('/edit',userController.edit.put);
router.post('/googleoauth',userController.googleoauth.post);
router.get("/gitoauth", userController.gitoauth.get);

module.exports = router
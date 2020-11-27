const express = require('express');
const { dataController } = require('../controller');
const router = express.Router();

router.get('/get',dataController.get.get);
router.get('/basic',dataController.basic.get);
router.post('/write',dataController.write.post);
router.put('/edit',dataController.edit.put);
router.delete('/delete',dataController.delete.delete);
router.get('/custom',dataController.custom.get);
router.post('/custom',dataController.custom.post);
router.put('/custom',dataController.custom.put);
router.delete('/custom',dataController.custom.delete);
router.post('/goal',dataController.goal.post);
router.get('/goal',dataController.goal.get);
router.put('/goal',dataController.goal.put);
router.delete('/goal',dataController.goal.delete);


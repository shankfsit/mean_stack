const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);
router.get('/allusers', ctrlUser.allusers);
router.get('/allusers/view/:id', ctrlUser.userone);
router.put('/allusers/edit/:id', ctrlUser.useredit);
router.delete('/allusers/delete/:id', ctrlUser.userdelete);

module.exports = router;
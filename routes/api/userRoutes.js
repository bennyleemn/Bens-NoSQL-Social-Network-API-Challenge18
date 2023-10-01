const express = require('express');
const router = express.Router();
const {
     getUsers,
     createUser,
     getUserById, 
     updateUserById, 
     deleteUserById, 
     removeFriend, 
     addFriend
    }  = require('../../controllers/userController');

// Routes for user CRUD operations
router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getUserById);
router.route('/:userId').put(updateUserById);
router.route('/:userId').delete(deleteUserById);
router.route('/:userId/friends/:friendId').post(addFriend);
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
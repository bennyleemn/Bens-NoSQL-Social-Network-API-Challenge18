const express = require('express');
const router = express.Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThought,
  createReaction,
} = require('../../controllers/thoughtController');

// Routes for thought CRUD operations
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:thoughtId').get(getThoughtById);
router.route('/:thoughtId').put(updateThoughtById);
router.route('/:thoughtId').delete(deleteThought);
router.route('/:thoughtId/reactions').post(createReaction);

module.exports = router;
const router = require('express').Router();

const {
  getAllThoughts,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getThoughtById,
  updateThought
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

// /api/thoughts/<thoughtId>
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

router
  .route('/:thoughtId/reactions')
  .post(addReaction);

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);


module.exports = router;
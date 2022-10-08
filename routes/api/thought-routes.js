const router = require('express').Router();

const {
  getAllThoughts,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getThoughtById
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

// /api/thoughts/<thoughtId>
router
.route('/:thoughtId')
.get(getThoughtById);

router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought)

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
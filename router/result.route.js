const express = require('express');
const router = express.Router();
const {
  createStudent,
  allStudent,
  specificStudent,
  updateStudent,
  deleteStudent,
  searchQuery,
} = require('../controller/result.controller');

//  Students
router.route('/').post(createStudent).get(allStudent);

// specific student by ID
router
  .route('/:id')
  .get(specificStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

router.get('/search', searchQuery);

module.exports = router;

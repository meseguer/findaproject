// create another router for getting 'product' resources
const router = require('express').Router();
const ProjectController = require('../controllers/projects');
const { ValidationMiddleware } = require('../middlewares/Validation');

// individual products routes
router.get('/', ProjectController.get_projects);
// router.get(
//   '/',
//   [EventController.validate('create_event'), ValidationMiddleware],
//   EventController.get_events
// );
// router.post('/', EventController.create_event);

module.exports = router;

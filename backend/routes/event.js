// create another router for getting 'product' resources
const router = require('express').Router();
const EventController = require('./../controllers/events');
const { ValidationMiddleware } = require('../middlewares/Validation');

// individual products routes
router.get('/', EventController.get_event);
// router.get(
//   '/',
//   [EventController.validate('create_event'), ValidationMiddleware],
//   EventController.get_events
// );
// router.post('/', EventController.create_event);

module.exports = router;

const dynamoose = require('dynamoose');
dynamoose.local();
const { check, validationResult } = require('express-validator/check');

exports.get_event = (req, res, next) => {
  return res.send('Hello World :D!');
  // const { Event } = require('../models/event');
  // try {
  //   const response = await Event.query('name')
  //     .eq('Adrisna')
  //     .exec();
  //   res.send('Hello World :D!' + JSON.stringify(response));
  // } catch (error) {
  //   console.log(error);
  // }
};

exports.create_event = async (req, res, next) => {
  // var name = req.body.name,

  const { Event } = require('../models/event');
  const newEvent = new Event({
    userId: 5,
    name: 'Adrisna',
    title: 'My description',
    teams: [{ name: 'lmao' }]
  });
  try {
    const response = await newEvent.save(); // Returns a promise that resolves when save has completed
    res.send('Hello World :D!' + JSON.stringify(response));
  } catch (error) {
    1;
    console.log(error);
  }
};

const { body } = require('express-validator/check');
exports.validate = method => {
  switch (method) {
    case 'get_event': {
      return [body('name', "Event doesn't exists").exists()];
    }
    case 'create_event': {
      return [
        body('name').exists(),
        body('title').exists(),
        body('start_date')
          .exists()
          .isISO8601(),
        body('end_date')
          .exists()
          .isISO8601(),
        body('primary_color')
          .exists()
          .isHexColor(),
        body('secondary_color')
          .exists()
          .isHexColor(),
        body('color3')
          .optional()
          .isHexColor(),
        body('color4')
          .optional()
          .isHexColor(),
        body('social_hashtag')
          .optional()
          .isString(),
        body('social_picture')
          .optional()
          .isString(),
        body('description')
          .optional()
          .isString(),
        body('welcome_message')
          .optional()
          .isString(),
        body('max_team_size')
          .optional()
          .isNumeric()
      ];
    }
  }
};

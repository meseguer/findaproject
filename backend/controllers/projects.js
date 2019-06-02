const dynamoose = require('dynamoose');
dynamoose.local();
const { check, validationResult } = require('express-validator/check');

exports.get_projects = (req, res, next) => {
  const project = {
    title: 'Greated project ever',
    description: 'This is a gonna be a great project',
    roles: ['Developer', 'Designer', 'Marketer'],
    tags: ['food', 'videogames'],
    url: 'http://crowdforge.io'
  };
  return res.send({ projects: [project] });
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

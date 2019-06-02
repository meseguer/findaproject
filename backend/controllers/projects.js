const dynamoose = require('dynamoose');
dynamoose.local();
const { check, validationResult } = require('express-validator/check');

// const project = {
//   title: 'Greated project ever',
//   description: 'This is a gonna be a great project',
//   roles: ['Developer', 'Designer', 'Marketer'],
//   tags: ['food', 'videogames'],
//   url: 'http://crowdforge.io'
// };
exports.get_projects = async (req, res, next) => {
  const reddit = require('./../util/reddit');
  const projects = await reddit.get_projects();
  return res.send({ projects: projects });
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

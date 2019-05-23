const dynamoose = require('dynamoose');

// Create cat model with default options
exports.Event = dynamoose.model('Events', {
  name: String,
  userId: Number,
  description: String,
  teams: [Object]
});

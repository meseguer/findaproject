const request = require('supertest');
const app = require('../../index');

describe('EventsController', function() {
  describe('creating event', function() {
    test('should save to database', function() {
      const app = request('http://localhost:3000');
      app.get('/events').then(function(response) {
        assert.equal(response.status, 200);
      });
    });
  });
});
// const assert = require('assert');
// const expect = require('chai').expect;
// const request = require('supertest');
// // const app = require('../../index');

// describe('EventsController', function() {
//   describe('creating event', function() {
//     it('should save to database', function() {
//       const app = request('http://localhost:3000');
//       app.get('/events').then(function(response) {
//         assert.equal(response.status, 200);
//       });
//     });
//   });
// });

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const supertest = require('supertest');
const api = require('../app');

test('Train models are returned as json', async () => {
  api.get('/api/trainmodels')
    .expect(200)
    .expect('Content-type', /application\/json/);
});
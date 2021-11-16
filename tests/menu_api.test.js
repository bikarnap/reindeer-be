const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

test('menus are returned as json', async () => {
  await api
    .get('/api/menus')
    .expect(200)
    .expect('Content-type', /application\/json/);
});

test('there are 8 menu items', async () => {
  const response = await api.get('/api/menus');
  expect(response.body).toHaveLength(8);
});
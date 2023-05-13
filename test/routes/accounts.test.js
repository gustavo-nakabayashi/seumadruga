
const request = require('supertest');
const app = require('../../src/app');

let userId;

beforeAll(() => {
  const email = `${Date.now()}@mail.com`;
  const data = { name: 'Gustavo Barros', email, password: '123456' };
  return request(app).post('/users').send(data).then(response => userId = response.body.id);
});

test('Should create an account successfully', () => {
  const data = { user_id: userId, name: 'Inter' };
  return request(app).post('/accounts').send(data).then((response) => {
    userId = response.body.id;
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('name', 'Inter');
  });
});
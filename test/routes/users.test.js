const request = require('supertest');
const app = require('../../src/app');

test('Should return user list', async () => {
  const response = await request(app).get('/users');
  expect(response.status).toBe(200);
  expect(response.body.length).toBeGreaterThan(0);
});

test('Should create a new user', async () => {
  const email = `${Date.now()}@mail.com`;
  const data = { name: 'Gustavo Barros', email, password: '123456' };
  const response = await request(app).post('/users').send(data);
  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty('name', 'Gustavo Barros');
});

test('Should not create a user without name', async () => {
  const data = { email: 'gustavo@email.com', password: '123456' };
  const response = await request(app).post('/users').send(data);
  expect(response.status).toBe(400);
  expect(response.body.error).toBe('Name is a required attribute');
});

test('Should not create an user without email', async () => {
  const data = { name: 'Gustavo', password: '123456' };
  const response = await request(app).post('/users').send(data);
  expect(response.status).toBe(400);
  expect(response.body.error).toBe('Email is a required attribute');
});

test('Should not create an user without password', async () => {
  const data = { name: 'Gustavo', email: 'gustavo@email.com' };
  const response = await request(app).post('/users').send(data);
  expect(response.status).toBe(400);
  expect(response.body.error).toBe('Password is a required attribute');
});

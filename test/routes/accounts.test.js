const request = require('supertest');
const app = require('../../src/app');

let userId;

beforeAll(() => {
  const email = `${Date.now()}@mail.com`;
  const data = { name: 'Gustavo Barros', email, password: '123456' };
  return request(app).post('/users').send(data).then((response) => { userId = response.body.id; });
});

describe('GET /accounts', () => {
  test('Should return accounts list', async () => {
    const data = { user_id: userId, name: 'Inter' };
    await request(app).post('/accounts').send(data);
    const response = await request(app).get('/accounts');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('Should return 404 if account with id does not exists', async () => {
  // Arrange
    const nonExistingAccountId = 999999999;
    // Act
    const response = await request(app).get(`/accounts/${nonExistingAccountId}`);

    // Assert
    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({ error: 'Account not found' });
  });
});

describe('GET /accounts/:id', () => {
  test('Should return accounts by id', async () => {
  // Arrange
    const accountToAdd = { user_id: userId, name: 'Acc by ID' };
    const { body: { id: addedAccountId } } = await request(app).post('/accounts').send(accountToAdd);

    // Act
    const response = await request(app).get(`/accounts/${addedAccountId}`);

    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ user_id: userId, name: 'Acc by ID', id: addedAccountId });
  });
});

describe('POST /accounts', () => {
  test('Should create an account successfully', () => {
    const data = { user_id: userId, name: 'Inter' };
    return request(app).post('/accounts').send(data).then((response) => {
      userId = response.body.id;
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('name', 'Inter');
    });
  });
});

describe('PUT /accounts/:id', () => {
  test('Should update an account successfully', async () => {
  // Arrange
    const accountToAdd = { user_id: userId, name: 'Acc to update' };
    const { body: { id: addedAccountId } } = await request(app).post('/accounts').send(accountToAdd);

    // Act
    const putResponse = await request(app).put(`/accounts/${addedAccountId}`).send({ name: 'Acc after update' });

    // Assert
    const getResponse = await request(app).get(`/accounts/${addedAccountId}`);
    expect(putResponse.status).toBe(200);
    expect(getResponse.body).toHaveProperty('name', 'Acc after update');
  });
});

describe('DELETE /accounts/:id', () => {
  test('Should delete an account successfully', async () => {
  // Arrange
    const accountToAdd = { user_id: userId, name: 'Acc to delete' };
    const { body: { id: addedAccountId } } = await request(app).post('/accounts').send(accountToAdd);

    // Act
    const deleteResponse = await request(app).delete(`/accounts/${addedAccountId}`);

    // Assert
    const getResponse = await request(app).get(`/accounts/${addedAccountId}`);
    expect(deleteResponse.status).toBe(204);
    expect(getResponse.status).toBe(404);
  });
});

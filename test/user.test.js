const request = require('supertest')
const app = require('../src/app')

test('Should return user list', async ()=>{
  const response = await request(app).get('/users')
  expect(response.status).toBe(200)
  expect(response.body).toHaveLength(1)
  expect(response.body[0]).toHaveProperty("name", "Gustavo Barros")
})

const request = require("supertest");

const app = require("../src/app.js");

test("Should return 200 on root", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
});

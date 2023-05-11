const supertest = require("supertest");
const request = supertest("localhost:3001");

test("Server should be running in port 3001", () => {
  return request.get("/").then((res) => {
    expect(res.statusCode).toBe(200);
  });
});

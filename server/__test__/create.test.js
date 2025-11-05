const app = require("../app");
const request = require("supertest");
const mongoose = require("mongoose");
const yup = require("yup");
const refreshTokenError = require("../errors/RefreshTokenError");

const appRequest = request(app);

const bodySchema = yup.object({
  data: yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    birthday: yup.date(),
    passwordHash: yup.string().required(),
  }),
  tokens: yup.object({
    accessToken: yup.string().required(),
    refreshToken: yup.string().required(),
  }),
});

function getUser() {
  return {
    firstName: "Nataliia",
    lastName: "Yakovenko",
    birthday: "1983-10-14",
    email: `natali.yakovenko${Date.now()}@gmail.com`,
    password: "Natali658",
  };
}

const user = getUser();

describe("Create new user", () => {
  test("user create successfuly expect 201 created", async () => {
    const response = await appRequest.post("/api/users/sign-up").send(user);

    expect(response.statusCode).toBe(201);

    expect(bodySchema.isValidSync(response.body)).toBe(true);
  });

  test("Create empty user expect 400 bed request", async () => {
    const response = await appRequest.post("/api/users/sign-up").send();

    expect(response.statusCode).toBe(400);

    expect(bodySchema.isValidSync(response.body)).toBe(false);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

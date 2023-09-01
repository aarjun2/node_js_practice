const request = require('supertest');
const app = require('./assignment8');

describe('POST /calculate-sum', () => {
  test('calculate the sum of numbers', async () => {
    const response = await request(app)
      .post('/calculate-sum')
      .send({ numbers: [1, 2, 3, 4, 5] })
      .expect(200);

    expect(response.body.result).toBe(15);
  });

  test('handle invalid input', async () => {
    const response = await request(app)
      .post('/calculate-sum')
      .send({ numbers: 'not an array' })
      .expect(400);

    expect(response.body.error).toBe('Input should be an array of numbers');
  });
});
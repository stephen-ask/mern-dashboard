import request from 'supertest';
import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors("*"));

describe('API routes', () => {

  test('GET /api/ responds with 200 status', async () => {
    const response = await request(app).get('/api/');
    expect(response.statusCode).toBe(200);
  });

  test('POST /api/user requires authentication', async () => {
    const response = await request(app).post('/api/user');
    expect(response.statusCode).toBe(401);
  });

  test('GET /api/admin requires authentication', async () => {
    const response = await request(app).get('/api/admin');
    expect(response.statusCode).toBe(401);
  });

});

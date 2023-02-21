'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');

const request = supertest(app);

describe('Auth login', () => {
  it('should create a new user', async () => {
    const response = await request.post('/signup').send({
      username: 'steve',
      password: '123456',
    });

    console.log(response.body);
    expect(response.username).toBe('steve');

  });

});
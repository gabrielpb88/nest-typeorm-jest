import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { UserController } from './user.controller';
import { INestApplication } from '@nestjs/common';
import { UserModule } from './user.module';

describe('UserController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET users`, async () => {
    const result = await request(app.getHttpServer()).get('/user');
    expect(result.text).toBe('hello User');
  });

  afterAll(async () => {
    await app.close();
  });
});

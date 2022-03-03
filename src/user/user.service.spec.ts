import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { AppModule } from '../app.module';
import { UserModule } from './user.module';
import { User } from './user.entity';
import { Connection, getConnection, Repository } from 'typeorm';

describe('UserService', () => {
  let service: UserService;
  let connection: Connection;
  let repository: Repository<User>;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule, UserModule],
    }).compile();

    connection = getConnection();
    repository = connection.getRepository(User);
    service = moduleRef.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 2 users', async () => {
    const result = await service.getAll();
    expect(result.length).toBe(2);
  });

  it('should save an user', async () => {
    const user: User = {
      firstName: 'Gabriel',
      lastName: 'Bastos',
      isActive: true,
    };
    const result = await service.create(user);
    expect(result.id).toBeDefined();
  });

  afterEach(async () => {
    await repository.clear();
  });
});

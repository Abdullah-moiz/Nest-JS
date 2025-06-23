import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all users', () => {
    expect(controller.findAllUsers()).toBe('This action returns all users');
  });

  it('should return a user with a specific id', () => {
    expect(controller.findOneUser()).toBe('This action returns a user with a specific id');
  });

  it('should return all posts of a user with a specific id', () => {
    expect(controller.findUserPosts()).toBe('This action returns all posts of a user with a specific id');
  });
});

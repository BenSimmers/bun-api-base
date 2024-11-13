import { type User } from "../../services/Users/model";
import { describe, expect, test, jest, beforeEach, afterEach } from "bun:test";

import { UserServiceImpl } from "../../services/Users/users";

class mockUsersRepository {
  getUsers = jest.fn();
  getUserById = jest.fn();
  createUser = jest.fn();
}

describe("UserService", () => {
  let service: UserServiceImpl;
  let mockRepository: mockUsersRepository;

  beforeEach(() => {
    mockRepository = new mockUsersRepository();
    service = new UserServiceImpl(mockRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("getUsers", async () => {
    const users: User[] = [{ id: 1, name: "Alice", age: 30 }];
    mockRepository.getUsers.mockResolvedValue(users);

    const result = await service.getUsers();

    expect(result).toEqual(users);
    expect(mockRepository.getUsers).toHaveBeenCalledTimes(1);
  });

  test("getUserById", async () => {
    const user: User = {
      id: 1,
      name: "Alice",
      age: 30,
    };

    mockRepository.getUserById.mockResolvedValue(user);

    const result = await service.getUserById(1);

    expect(result).toEqual(user);
    expect(mockRepository.getUserById).toHaveBeenCalledTimes(1);
    expect(mockRepository.getUserById).toHaveBeenCalledWith(1);
  });

  test("createUser", async () => {
    const user: User = {
      id: 1,
      name: "Alice",
      age: 30,
    };

    mockRepository.createUser.mockResolvedValue(user);

    const result = await service.createUser("Alice", 30);

    expect(result).toEqual(user);
    expect(mockRepository.createUser).toHaveBeenCalledTimes(1);
    expect(mockRepository.createUser).toHaveBeenCalledWith("Alice", 30);
  });
});

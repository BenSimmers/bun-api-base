import type { User, UserService } from "./model";

const users: User[] = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Doe", age: 24 },
];


/**
 * UserServiceImpl implements the UserService interface
 */
export class UserServiceImpl implements UserService {
  async getUsers(): Promise<User[]> {
    return users;
  }

  async getUserById(id: number): Promise<User | undefined> {
    return users.find((user) => user.id === id);
  }

  async createUser(name: string, age: number): Promise<User> {
    const id = users[users.length - 1].id + 1;
    const newUser = { id, name, age };
    users.push(newUser);
    return newUser;
  }
}
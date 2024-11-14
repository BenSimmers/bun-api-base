import type { User, UserService } from "./model";
import { db } from "../../database/database";

export class usersRepository {
  async getUsers(): Promise<User[]> {
    const items: User[] = await db("users").select("*");
    return items;
  }

  async getUserById(id: number): Promise<User | undefined> {
    const [user]: User[] = await db("users").select("*").where({ id });
    return user;
  }

  async createUser(name: string, age: number): Promise<User> {
    const [newUser]: User[] = await db("users")
      .insert({ name, age })
      .returning("*");
    return newUser;
  }
}

/**
 * UserServiceImpl implements the UserService interface
 */
export class UserServiceImpl implements UserService {
  constructor(private readonly repository: usersRepository) {}

  async getUsers(): Promise<User[]> {
    const items = await this.repository.getUsers();
    return items;
  }

  async getUserById(id: number): Promise<User | undefined> {
    const user = await this.repository.getUserById(id);
    return user;
  }

  async createUser(name: string, age: number): Promise<User> {
    const newUser = await this.repository.createUser(name, age);
    return newUser;
  }
}

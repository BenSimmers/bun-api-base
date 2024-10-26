import { expect, test, describe } from "bun:test";

import { UserServiceImpl } from "../../services/Users/users";

describe("UserService", () => {
  test("getUsers", async () => {
    const userService = new UserServiceImpl();
    const users = await userService.getUsers();
    expect(users).toHaveLength(2);
  });

  test("getUserById", async () => {
    const userService = new UserServiceImpl();
    const user = await userService.getUserById(1);
    expect(user).toEqual({ id: 1, name: "John Doe", age: 25 });
  });

  test("createUser", async () => {
    const userService = new UserServiceImpl();
    const user = await userService.createUser("Jane Doe", 24);
    expect(user).toEqual({ id: 3, name: "Jane Doe", age: 24 });
  });
});

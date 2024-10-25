import type { User } from "./model";

export function getUsers(currentUsers: User[]): User[] {
  return currentUsers;
}

export function getUserById(
  currentUsers: User[],
  id: number
): User | undefined {
  return currentUsers.find((user) => user.id === id);
}

export function createUser(
  currentUsers: User[],
  name: string,
  age: number
): User {
  const id = currentUsers.length + 1;
  const newUser = { id, name, age };
  currentUsers.push(newUser);
  return newUser;
}

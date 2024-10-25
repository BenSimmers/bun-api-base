import type { User } from "./model";

const users: User[] = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Doe", age: 24 },
];

export async function getUsers(): Promise<User[]> {
  return users;
}

export async function getUserById(id: number): Promise<User | undefined> {
  return users.find((user) => user.id === id);
}

export async function createUser(name: string, age: number): Promise<User> {
  const id = users[users.length - 1].id + 1;
  const newUser = { id, name, age };
  users.push(newUser);
  return newUser;
}

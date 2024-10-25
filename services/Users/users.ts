type User = {
  id: number;
  name: string;
  age: number;
};

const users: User[] = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Doe", age: 24 },
  { id: 3, name: "Jim Doe", age: 23 },
  { id: 4, name: "Jill Doe", age: 22 },
  { id: 5, name: "Jack Doe", age: 21 },
];

export function getUsers(): User[] {
  return users;
}

export function getUserById(id: number): User | undefined {
  return users.find((user) => user.id === id);
}

export function createUser(name: string, age: number): User {
  const id = users.length + 1;
  const newUser = { id, name, age };
  users.push(newUser);
  return newUser;
}

export default {
  getUsers,
  getUserById,
  createUser,
};

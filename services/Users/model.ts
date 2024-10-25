export type User = {
  id: number;
  name: string;
  age: number;
};

export type UserService = {
  getUsers: () => Promise<User[]>;
  getUserById: (id: number) => Promise<User | undefined>;
  createUser: (name: string, age: number) => Promise<User>;
};

import { nameUsers } from "@config/users/nameUsers";

const normalizeNameUsers = (code: string) =>
  nameUsers.find((element) => element.code === code);

export { normalizeNameUsers };

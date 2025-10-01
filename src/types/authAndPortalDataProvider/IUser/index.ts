interface IUser {
  email: string;
  emailVerified: boolean;
  familyName: string;
  givenName: string;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  updatedAt: string;
  [key: string]: unknown;
}

export type { IUser };

export type USER = {
  userId: number;
  nickname?: string;
  email: string;
  password: string;
};

export type LOGIN_RESPONSE = {
  accessToken: string;
  refreshToken: string;
  message: string;
  user: USER;
};

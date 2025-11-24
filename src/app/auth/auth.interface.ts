export interface UserSettings {
  themeDark: boolean;
}

export interface User {
  name: string;
  email: string;
  id: string;
  role: string;
  isActive: boolean;
  settings: UserSettings;
}

export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface AuthInterFace {
  user: User;
  token: Token;
}

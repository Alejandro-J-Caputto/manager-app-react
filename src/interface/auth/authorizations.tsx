export interface LoginResponse {
  status: string;
  message: string;
  user: User;
  token: string;
}

export interface RegisterResponse {
  status: string;
  message: string;
  token: string;
  newUser: User;
}

export interface CheckTokenResponse {
  status: string,
  user: User;
}
export interface User {
  role?: string;
  active?: boolean;
  google?: boolean;
  _id?: string;
  img?: string;
  name?: string;
  email?: string;
  password?: string;
  __v?: number;
}
export interface LoginResponse {
  status:  string;
  message: string;
  user:    User;
  token:   string;
}
export interface User {
  role?:     string;
  active?:   boolean;
  google?:   boolean;
  _id?:      string;
  img?:      string;
  name?:     string;
  email?:    string;
  password?: string;
  __v?:      number;
}
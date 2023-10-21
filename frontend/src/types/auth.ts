export interface IAuthData {
  name?: string;
  surname?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

export interface IUserData {
  id: number;
  name: string;
  surname: string;
  email: string;
  avatar?: string;
}

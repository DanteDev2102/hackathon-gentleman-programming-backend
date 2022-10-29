export interface CreateUserParams {
  email: string;
  password: string;
  passwordConfirm: string;
  firstName: string;
  lastName: string;
}

export interface UserLoginParams {
  email: string;
  password: string;
}

import { SignUpFormValues } from './types';

export const mapFormDataToApiData = (data: SignUpFormValues) => {
  const result = {
    email: data.email,
    password: data.password,
    login: data.login,
  };

  return result;
};

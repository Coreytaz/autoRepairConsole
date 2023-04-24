import { ApiResponseData, api } from '~shared/api';
import { setAsyncTimeout } from '~shared/lib/utils';

import { routes } from './routes';
import { ApiSignInData, ApiSignInResponseData } from './types';

export const signIn = (data: ApiSignInData) => {
  return api.post<any, ApiResponseData<ApiSignInResponseData>>(routes.signIn(), data);
};

export const mockSignIn = async (_data?: ApiSignInData) => {
  let result: unknown = null;

  await setAsyncTimeout(() => {
    result = {
      data: {
        id: '1',
        Fullname: 'Петров Петр Петрович',
        login: '2',
        email: '3',
        avatar: 'https://github.com/shadcn.png',
        token: 'token',
        ttl: 120,
        type: 'Bearer',
      },
    };
  }, 1000);

  return result as ApiResponseData<ApiSignInResponseData>;
};

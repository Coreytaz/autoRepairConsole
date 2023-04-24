import { Viewer } from '~entities/viewer';

import { ApiSignInResponseData } from '../api';

export const mapFormDataToViewer = (data: ApiSignInResponseData) => {
  const result: Viewer = {
    Fullname: data.Fullname,
    avatar: data.avatar,
    email: data.email,
    id: data.id,
    login: data.login,
  };

  return result;
};

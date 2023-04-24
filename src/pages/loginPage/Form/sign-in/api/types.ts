export interface ApiSignInData {
  login: string;
  password: string;
}

export interface ApiSignInResponseData {
  id: string;
  Fullname: string;
  login: string;
  email: string;
  avatar: string;
  token: string;
  ttl: number;
  type: string;
}

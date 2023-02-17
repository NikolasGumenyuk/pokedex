import { LoginProps } from 'pages/Login/Login';
import { UserState } from 'store/UserSlice';

export const verifyUser = (data: LoginProps): Promise<UserState> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.login === 'admin' && data.password === '12345') {
        resolve({ firstName: 'Mykola', lastName: 'Gumeniuk', isAuth: true });
      }
      reject('kto ty voin?');
    }, 2000);
  });
};

import { setCookie } from './cookies';
import { setLocalStorage } from './localStorage';

export const setAuthentication = (token, user) => {
    setCookie('token', token);
    setLocalStorage('user', user);
};

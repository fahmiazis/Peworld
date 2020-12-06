import http from '../../helpers/http';
import qs from 'querystring';

export default {
  doLogin: (data, role) => ({
    type: 'LOGIN',
    payload: http().post(`/auth/login/${role}`, qs.stringify(data)),
  }),
  signup: (data, role) => ({
    type: 'SIGNUP',
    payload: http().post(`/auth/register/${role}`, qs.stringify(data)),
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
  clear: () => ({
    type: 'CLEAR',
  }),
};

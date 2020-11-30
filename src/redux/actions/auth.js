import http from '../../helpers/http';

export default {
  doLogin: (data) => ({
    type: 'LOGIN',
    payload: data,
  }),
};

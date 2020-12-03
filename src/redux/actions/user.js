import http from '../../helpers/http';

export default {
  saveUser: (data) => ({
    type: 'SAVE_USER',
    payload: data,
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};

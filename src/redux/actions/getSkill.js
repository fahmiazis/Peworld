import http from '../../helpers/http';

export default {
  saveUser: (token) => ({
    type: 'GET_SKILL',
    payload: http(token).get('job-seeker/skill/get'),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};

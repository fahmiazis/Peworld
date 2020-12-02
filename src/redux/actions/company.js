import http from '../../helpers/http';

export default {
  getProfileCompany: (token) => ({
    type: 'GET_PROFILE_COMPANY',
    payload: http(token).get('company/profile/get'),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};

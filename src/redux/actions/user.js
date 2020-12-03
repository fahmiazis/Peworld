import http from '../../helpers/http';
import qs from 'querystring';

export default {
  saveUser: (data) => ({
    type: 'SAVE_USER',
    payload: data,
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
  show: (token) => ({
    type: 'SHOW_JOBSEEKER',
    payload: http(token).get('/job-seeker/profile/get'),
  }),
  updateDetail: (token, data) => ({
    type: 'EDIT_JOBSEEKER',
    payload: http(token).patch(
      '/job-seeker/profile/detail/update',
      qs.stringify(data),
    ),
  }),
};

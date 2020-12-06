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
  updatePhoto: (token, data) => ({
    type: 'EDIT_JOBSEEKER',
    payload: http(token).patch('/job-seeker/profile/avatar/update', data),
  }),
  addSkill: (token, data) => ({
    type: 'ADD_SKILL_SEEKER',
    payload: http(token).post('job-seeker/skill/post', qs.stringify(data)),
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
};

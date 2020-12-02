import http from '../../helpers/http';

export default {
  getProfileJobSeeker: (token) => ({
    type: 'GET_PROFILE_JOB_SEEKER',
    payload: http(token).get('job-seeker/profile/get'),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};

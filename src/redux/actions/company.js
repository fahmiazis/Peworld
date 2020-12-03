import http from '../../helpers/http';

export default {
  getProfileCompany: (token) => ({
    type: 'GET_PROFILE_COMPANY',
    payload: http(token).get('company/profile/get'),
  }),
  getListOfJobSeeker: (token) => ({
    type: 'GET_LIST_JOB_SEEKER',
    payload: http(token).get('company/job-seeker/all'),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};

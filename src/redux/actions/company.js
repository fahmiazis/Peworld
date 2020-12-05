import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getProfileCompany: (token) => ({
    type: 'GET_PROFILE_COMPANY',
    payload: http(token).get('company/profile/get'),
  }),
  getListJobSeeker: (token) => ({
    type: 'GET_LIST_JOBSEEKER',
    payload: http(token).get('company/job-seeker/all'),
  }),
  getListFullStackJobSeeker: (token) => ({
    type: 'GET_LIST_FULLSTACK_JOBSEEKER',
    payload: http(token).get(
      'company/job-seeker/all?search[jobTitle]=fullstack',
    ),
  }),
  getListMobileJobSeeker: (token) => ({
    type: 'GET_LIST_MOBILE_JOBSEEKER',
    payload: http(token).get('company/job-seeker/all?search[jobTitle]=mobile'),
  }),
  getListWebJobSeeker: (token) => ({
    type: 'GET_LIST_WEB_JOBSEEKER',
    payload: http(token).get('company/job-seeker/all?search[jobTitle]=web'),
  }),
  searchJobSeeker: (token, search = '') => ({
    type: 'SEARCH_JOB_SEEKER',
    payload: http(token).get(`company/job-seeker/all?search=${search}`),
  }),
  getDetailJobSeeker: (token, id) => ({
    type: 'GET_DETAIL_JOB_SEEKER',
    payload: http(token).get(`company/job-seeker/${id}`),
  }),
  updateProfile: (token, data) => ({
    type: 'UPDATE_PROFILE',
    payload: http(token).patch(
      'company/profile/update',
      qs.stringify({...data}),
    ),
  }),
  updateAvatar: (token, form) => ({
    type: 'UPDATE_AVATAR',
    payload: http(token).patch('company/profile/avatar/update', form),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};

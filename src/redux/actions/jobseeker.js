import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getProfileSeeker: (token) => ({
    type: 'GET_PROFILE_SEEKER',
    payload: http(token).get('job-seeker/profile/get'),
  }),
  getListOfCompany: (token) => ({
    type: 'GET_LIST_COMPANY',
    payload: http(token).get('job-seeker/company/all'),
  }),
  getDetailCompany: (token, id) => ({
    type: 'GET_DETAIL_COMPANY',
    payload: http(token).get(`job-seeker/company/${id}`),
  }),
  updateProfile: (token, data) => ({
    type: 'UPDATE_PROFILE',
    payload: http(token).patch(
      'job-seeker/profile/update',
      qs.stringify({...data}),
    ),
  }),
  updateAvatar: (token, form) => ({
    type: 'UPDATE_AVATAR',
    payload: http(token).patch('job-seeker/profile/avatar/update', form),
  }),
  searchCompany: (token, search = '', limit = 5) => ({
    type: 'SEARCH_COMPANY',
    payload: http(token).get(
      `job-seeker/company/all?search=${search}&limit=${limit}`,
    ),
  }),
  getNextCompany: (token, nextLink) => ({
    type: 'NEXT_COMPANY',
    payload: http(token).get(nextLink),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
};

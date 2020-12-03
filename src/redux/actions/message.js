import http from '../../helpers/http';

export default {
  listMessageCompany: (token) => ({
    type: 'LIST_CHAT_COMPANY',
    payload: http(token).get('/company/message/list'),
  }),
  listMessageJobSeeker: (token) => ({
    type: 'LIST_CHAT_JOBSEEKER',
    payload: http(token).get('/job-seeker/message/list'),
  }),
};

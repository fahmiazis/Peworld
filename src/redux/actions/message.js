import http from '../../helpers/http';
import qs from 'querystring';

export default {
  listMessageCompany: (token) => ({
    type: 'LIST_CHAT_COMPANY',
    payload: http(token).get('/company/message/list'),
  }),
  listMessageJobSeeker: (token) => ({
    type: 'LIST_CHAT_JOBSEEKER',
    payload: http(token).get('/job-seeker/message/list'),
  }),
  detailMessageCompany: (token, id) => ({
    type: 'DETAIL_MESSAGE_COMPANY',
    payload: http(token).get(`/company/message/${id}?limit=30`),
  }),
  detailMessageJobSeeker: (token, id) => ({
    type: 'DETAIL_MESSAGE_JOBSEEKER',
    payload: http(token).get(`/job-seeker/message/${id}`),
  }),
  sendMessageCompany: (token, id, data) => ({
    type: 'SEND_MESSAGE_COMPANY',
    payload: http(token).post(`/company/message/${id}`, qs.stringify(data)),
  }),
  sendMessageSeeker: (token, id, data) => ({
    type: 'SEND_MESSAGE_SEEKER',
    payload: http(token).post(`/job-seeker/message/${id}`, qs.stringify(data)),
  }),
  getNextMessage: (token, nextLink) => ({
    type: 'NEXT_MESSAGE',
    payload: http(token).get(nextLink),
  }),
  clearMsg: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};

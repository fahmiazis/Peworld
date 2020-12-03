import http from '../../helpers/http';

export default {
  listMessageCompany: (token) => ({
    type: 'LIST_CHAT_COMPANY',
    payload: http(token).get('/company/message/list')
  })
}